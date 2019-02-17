import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getExams} from '../../redux/exams/actions/get';
import {postExam} from '../../redux/exams/actions/post';

class DisplayExam extends Component {

    static propTypes = {
        //
    };
    componentDidMount() {
        //this.props.fetchExams();
    }

    /*createExam = () => {
        this.props.postExam({
            title: 'This is a title from Redux',
            'reminders': 'This is a reminder from Redux',
            'instruction': 'These are some instructions'
        });
    }*/

}

// This is an example for now
export default connect(state => ({
    exams: state.exams.exams,
    loading: state.exams.loading,
}), dispatch => ({
    fetchExams: () => dispatch(getExams()),
    postExam: (exam) => dispatch(postExam(exam)),
}))(DisplayExam);
