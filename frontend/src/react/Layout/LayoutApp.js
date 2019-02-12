import React, {Component} from 'react'
import {connect} from 'react-redux';

import CreateExam from '../Exam/CreateExam';
import {getExams} from '../../redux/exams/actions/get';
import {postExam} from '../../redux/exams/actions/post';

class LayoutApp extends Component {

    componentDidMount() {
        this.props.fetchExams();
    }

    createExam = () => {
        this.props.postExam({
            title: 'This is a title from Redux',
            'reminders': 'This is a reminder from Redux',
            'instruction': 'These are some instructions'
        });
    }

    render() {
        return (
                <div className="hero is-fullheight">
                    <CreateExam/>
                    {
                        this.props.loading &&
                        `loading`
                    }
                    <button onClick={this.createExam}>Click me to add a new one</button>
                </div>
        );
    }
}

export default connect(state => ({
    exams: state.exams.exams,
    loading: state.exams.loading,
}), dispatch => ({
    fetchExams: () => dispatch(getExams()),
    postExam: (exam) => dispatch(postExam(exam)),
}))(LayoutApp);
