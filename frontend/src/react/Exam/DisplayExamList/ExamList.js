import React, {Component} from 'react'
import {connect} from 'react-redux';

import ExamListDisplayer from './ExamListDisplayer';
import {getExams} from '../../../redux/exams/actions/get';
import FinaliseExamDisplayer from './FinaliseExam/FinaliseExamDisplayer';
import {patchExam} from '../../../redux/exams/actions/patch';
import {
  filterExamsByDate, filterFinalisedExams, filterNotFinalisedExams,
  filterNotPassedExams,
  filterPassedExams,
  sortExamsBySessionDate,
} from '../../../helpers/exam';
import DatePicker from './DatePicker';
import 'react-day-picker/lib/style.css';

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
      await this.filterByCalendarDate();
    }
  }

  filterByCalendarDate = async (day) => {
      let exams = await sortExamsBySessionDate(this.props.exams);
      if(day) {
        await this.setState({day});
        exams = await filterExamsByDate(exams,day);
      }
      const passedExams = await filterPassedExams(exams);
      const notPassedExams = await filterNotPassedExams(exams);
      const finalisedExams = await filterFinalisedExams(notPassedExams);
      const createdExams = await filterNotFinalisedExams(exams);
      this.setState({passedExams,finalisedExams,createdExams})
  };

  cancelFilterFromCalendar = async () => {
    await this.filterByCalendarDate();
    await this.setState({day:'',simplified:true});
  };

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
                    handleDayChange={this.filterByCalendarDate}
                    cancelFilterFromCalendar={this.cancelFilterFromCalendar}
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
