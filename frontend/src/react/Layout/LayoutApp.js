import React, {Component} from 'react'
import {connect} from 'react-redux';

import {getExams} from '../../redux/exams/actions/get';
import Router from "../Router/Router";

class LayoutApp extends Component {
    componentDidMount() {
        this.props.fetchExams();
    }

    render() {
        return (
            <div className="hero is-fullheight">
                coucou
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
