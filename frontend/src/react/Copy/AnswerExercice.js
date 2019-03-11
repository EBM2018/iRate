import React, {Component} from 'react'
import {connect} from 'react-redux';

class AnswerExercice extends Component {
    render() {
        return <div></div>
    }
}

export default connect(state => ({
    exams: state.exams.exams,
    loading: state.exams.loading,
}), dispatch => ({
    //
}))(AnswerExercice);
