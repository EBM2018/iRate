import React, {Component} from 'react'
import ExamListDisplayer from "./ExamListDisplayer";
import connect from "react-redux/es/connect/connect";
import {getExamsWithScaleAndTime} from "../../../redux/exams/actions/get";
import FinaliseExamDisplayer from "../FinaliseExam/FinaliseExamDisplayer";

class ExamList extends Component {
    state = {
        shouldFinaliseRender: false,
        didChecked: false,
        examId: '',
    };

    componentDidMount() {
        this.props.fetchExamsWithScale();
    }

    toggleFinalise = (id) => () => {
        this.setState({shouldFinaliseRender: !this.state.shouldFinaliseRender, examId: id})
    };

    toggleCheckScale = () => {
        this.setState({didChecked: !this.state.didChecked});
    };

    render() {
        return (
            <>
                {
                    this.props.loading &&
                    `loading`
                }
                {this.props.exams ? <ExamListDisplayer exams={this.props.exams} toggleFinalise={this.toggleFinalise}/> : 'waiting'}
                {this.state.shouldFinaliseRender ? <FinaliseExamDisplayer toggleFinalise={this.toggleFinalise}
                                                                          id={this.state.examId}
                                                                          toggleScaleCheck={this.toggleCheckScale}
                                                                          didChecked={this.state.didChecked}/> : null}
            </>
        );
    }
}

export default connect(state => ({
    exams: state.exams.exams,
    loading: state.exams.loading,
}), dispatch => ({
    fetchExamsWithScale: () => dispatch(getExamsWithScaleAndTime())
}))(ExamList);
