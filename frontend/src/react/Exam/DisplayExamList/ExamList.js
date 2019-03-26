import React, {Component} from 'react'
import {connect} from 'react-redux';

import ExamListDisplayer from './ExamListDisplayer';
import {getExams} from '../../../redux/exams/actions/get';
import FinaliseExamDisplayer from './FinaliseExam/FinaliseExamDisplayer';
import {patchExam} from '../../../redux/exams/actions/patch';
import {filterNotPassedExams, filterPassedExams, sortExamsBySessionDate} from '../../../helpers/exam';
import DatePicker from './DatePicker';

class ExamList extends Component {
  state = {
    shouldFinaliseRender: false,
    didChecked: false,
    examId: '',
    simplified: true,
    day: '',
  };

  async componentDidMount() {
    await this.props.fetchExamsWithScale();
    if(this.props.exams) {
      const exams = await sortExamsBySessionDate(this.props.exams);
      const passedExams = await sortExamsBySessionDate(filterPassedExams(this.props.exams));
      const notPassedExams = await sortExamsBySessionDate(filterNotPassedExams(this.props.exams));
      const finalisedExams = await notPassedExams.filter(exam => {
        return exam.isFinalised
      });
      const createdExams = await sortExamsBySessionDate(exams.filter(exam => {
        return !exam.isFinalised
      }));
      this.setState({passedExams,finalisedExams,createdExams});
    }
  }

  filterByCalendarDate() {
    const { day } = this.state;
    if (day) {

    }
  }

  toggleFinalise = (id) => () => {
    this.setState({shouldFinaliseRender: !this.state.shouldFinaliseRender, examId: id});
  };

  toggleCheckScale = () => {
    this.setState({didChecked: !this.state.didChecked});
  };

  finaliseExam = (id) => async () => {
    const exam = await this.props.exams.filter((exam) => {return exam._id === id})[0];
    exam.isFinalised = true;
    exam.showScale = this.state.didChecked;
    await this.props.fetchExamPatcher(exam);
    await this.toggleFinalise('')();
  };

  handleSimplified = () => {
    let {simplified} = this.state;
    simplified = !simplified;
    this.setState({simplified})
  };

  handleDayChange = (day) => {
    this.setState({day});
  };

  render() {
    return (
      <>
        {
          this.props.loading &&
          `loading`
        }
        {this.state.createdExams ? <ExamListDisplayer passedExams={this.state.passedExams}
                                                      finalisedExams={this.state.finalisedExams}
                                                      createdExams={this.state.createdExams}
                                                      toggleFinalise={this.toggleFinalise}/> : 'waiting'}
        <DatePicker simplified={this.state.simplified}
                    handleSimplified={this.handleSimplified}
                    handleDayChange={this.handleDayChange}
                    day={this.state.day}/>
        {this.state.shouldFinaliseRender ? <FinaliseExamDisplayer toggleFinalise={this.toggleFinalise}
                                                                  id={this.state.examId}
                                                                  toggleScaleCheck={this.toggleCheckScale}
                                                                  didChecked={this.state.didChecked}
                                                                  finaliseExam={this.finaliseExam}/> : null}
      </>
    );
  }
}

export default connect(state => ({
  exams: state.exams.exams,
  loading: state.exams.loading,
}), dispatch => ({
  fetchExamsWithScale: () => dispatch(getExams({}, true)),
  fetchExamPatcher: (exam) => dispatch(patchExam(exam))
}))(ExamList);
