import React, {Component} from 'react'
import {connect} from 'react-redux';

import CreateExam from '../Exam/CreateExam';
import {getExams} from '../../redux/exams/actions/get';

class LayoutApp extends Component {

    componentDidMount() {
        this.props.fetchExams();
    }

    render() {
        return (
                <div className="hero is-fullheight">
                    <CreateExam/>
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
