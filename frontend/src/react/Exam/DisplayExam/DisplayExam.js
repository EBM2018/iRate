import React, {Component} from 'react'
import DisplayExamDisplayer from "./DisplayExamDisplayer";
import connect from "react-redux/es/connect/connect";
import {getExams} from "../../../redux/exams/actions/get";

class DisplayExam extends Component {

    componentDidMount() {
        this.props.fetchExams();
        console.log(this.props);
    }

    render() {
        return (
            <>
                {
                    this.props.loading &&
                    `loading`
                }
                {this.props.exams ? <DisplayExamDisplayer exams={this.props.exams}/> : 'waiting'}
            </>
        );
    }
}

export default connect(state => ({
    exams: state.exams.exams,
    loading: state.exams.loading,
}), dispatch => ({
    fetchExams: () => dispatch(getExams())
}))(DisplayExam);
