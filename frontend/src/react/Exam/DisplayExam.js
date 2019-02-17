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
        const { id } = this.props.route.match.params;
        //TODO: get single Exam: this.props.fetchExam();
    }

    /*createExam = () => {
        this.props.postExam({
            title: 'This is a title from Redux',
            'reminders': 'This is a reminder from Redux',
            'instruction': 'These are some instructions'
        });
    }*/

    render() {
        const { id } = this.props.route.match.params;

        return(
            <section id={`exam-${id}`} className="section">
                <div className="box">
                    <div className="columns">
                        <div className="column is-two-thirds">
                            <span className="title is-5">Module de l'épreuve:</span>
                        </div>
                        <div className="column is-one-third has-text-right">
                            <div>
                                <div className="dropdown-trigger">
                                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                        <span>Dropdown button</span>
                                        <span className="icon is-small"><i className="fas fa-angle-down" aria-hidden="true"/></span>
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <div className="dropdown-item">test</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

// This is an example for now
export default connect(state => ({
    exams: state.exams.exams,
    loading: state.exams.loading,
}), dispatch => ({
    fetchExams: () => dispatch(getExams()),
    postExam: (exam) => dispatch(postExam(exam)),
}))(DisplayExam);
