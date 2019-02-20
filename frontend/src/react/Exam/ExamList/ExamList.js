import React, {Component} from 'react'
import ExamListDisplayer from "./ExamListDisplayer";
import connect from "react-redux/es/connect/connect";
import {getExamsWithScaleAndTime} from "../../../redux/exams/actions/get";
import FinaliseExam from "../FinaliseExam/FinaliseExam";

class ExamList extends Component {
    state = {
        shouldFinaliseRender: false,
        examId: '',
    };

    componentDidMount() {
        this.props.fetchExamsWithScale();
    }

    toggleFinalise = (id) => () => {
        this.setState({shouldFinaliseRender: !this.state.shouldFinaliseRender, examId: id})
    };

    render() {
        return (
            <>
                {
                    this.props.loading &&
                    `loading`
                }
                {this.props.exams ? <ExamListDisplayer exams={this.props.exams} toggleFinalise={this.toggleFinalise}/> : 'waiting'}
                {this.state.shouldFinaliseRender ? <FinaliseExam toggleFinalise={this.toggleFinalise} id={this.state.examId}/> : null}
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
