import React, {Component} from 'react'
import Exam from '../Exam/Exam';
import {connect} from 'react-redux';
import {getExams} from '../../../redux/exams/actions';

class LayoutApp extends Component {

    componentDidMount() {
        this.props.fetchExams();
    }

    render() {
        return (
                <div className="hero is-fullheight">
                    <Exam/>
                </div>
        );
    }
}

export default connect(state => ({
    exams: state.exams.exams,
    loading: state.exams.loading,
}), dispatch => ({
    fetchExams: () => dispatch(getExams()),
}))(LayoutApp);