import React, { Component } from "react";
import { connect } from "react-redux";

import ExamListDisplayer from "./ExamListDisplayer";
import { getExams } from "../../../redux/exams/actions/get";
import FinaliseExamDisplayer from "./FinaliseExam/FinaliseExamDisplayer";
import { patchExam } from "../../../redux/exams/actions/patch";
import { sortExamsBySessionDate } from "../../../helpers/exam";

class ExamList extends Component {
  state = {
    shouldFinaliseRender: false,
    didChecked: false,
    examId: ""
  };

  async componentDidMount() {
    await this.props.fetchExamsWithScale();
    if (this.props.exams) {
      const exams = sortExamsBySessionDate(this.props.exams);
      this.setState({ exams });
    }
  }

  toggleFinalise = id => () => {
    this.setState({
      shouldFinaliseRender: !this.state.shouldFinaliseRender,
      examId: id
    });
  };

  toggleCheckScale = () => {
    this.setState({ didChecked: !this.state.didChecked });
  };

  finaliseExam = id => async () => {
    const exam = await this.props.exams.filter(exam => {
      return exam._id === id;
    })[0];
    exam.isFinalised = true;
    exam.showScale = this.state.didChecked;
    await this.props.fetchExamPatcher(exam);
    await this.toggleFinalise("")();
  };

  render() {
    return (
      <>
        {this.props.loading && `loading`}
        {this.state.exams ? (
          <ExamListDisplayer
            exams={this.state.exams}
            toggleFinalise={this.toggleFinalise}
          />
        ) : (
          "waiting"
        )}
        {this.state.shouldFinaliseRender ? (
          <FinaliseExamDisplayer
            toggleFinalise={this.toggleFinalise}
            id={this.state.examId}
            toggleScaleCheck={this.toggleCheckScale}
            didChecked={this.state.didChecked}
            finaliseExam={this.finaliseExam}
          />
        ) : null}
      </>
    );
  }
}

export default connect(
  state => ({
    exams: state.exams.exams,
    loading: state.exams.loading
  }),
  dispatch => ({
    fetchExamsWithScale: () => dispatch(getExams({}, true)),
    fetchExamPatcher: exam => dispatch(patchExam(exam))
  })
)(ExamList);
