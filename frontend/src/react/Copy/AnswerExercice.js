import {Component} from 'react'
import {connect} from 'react-redux';

class AnswerExercice extends Component {

}

export default connect(state => ({
    exams: state.exams.exams,
    loading: state.exams.loading,
}), dispatch => ({
    //
}))(AnswerExercice);
