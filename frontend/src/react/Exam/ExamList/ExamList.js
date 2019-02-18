import React, {Component} from 'react'
import ExamListDisplayer from "./ExamListDisplayer";
import connect from "react-redux/es/connect/connect";
import {getExamsWithScaleAndTime} from "../../../redux/exams/actions/get";

class ExamList extends Component {

    async componentDidMount() {
        await this.props.fetchExamsWithScale();
    }

    render() {
        return (
            <>
                {
                    this.props.loading &&
                    `loading`
                }
                {this.props.exams ? <ExamListDisplayer exams={this.props.exams}/> : 'waiting'}
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
