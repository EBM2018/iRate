import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';

import InstructionsDisplayer from './InstructionsDisplayer';
import {postExam} from "../../redux/exams/actions/post";
import {triggerActive,triggerInactive} from "../../helpers/css";

class Instructions extends Component {
    state = {
        dropdownModule: 'Choisir le module',
        dropdownClass: 'Choisir la séance',
        title: '',
        reminder: '',
        instruction: '',
        redirectExercices: false,
    };

    /**
     * Put input value in state with name of the input as name of the variable
     * @param {Object} e
     */
    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value});
    };

    /**
     * Send an exam to the API and redirect to /newexam/:examId/exercices if success
     * @return undefined
     */
    addExamAndRedirect = async () => {
        const { title,
                reminder,
                instruction} = this.state;
        const examData = {
            title,
            reminder,
            instruction
        };

        await this.props.createExam(examData);
        if (this.props.exams.exam._id) {
            this.setState({
                idRedirect: this.props.exams.exam._id,
                redirectExercices: true})
        }
    };

    handleSelect = (select,dropdownType) => () => {
        this.setState({[dropdownType]: select});
    };

    render() {
        return (
            <>
                <div className="tile is-child">
                    <InstructionsDisplayer triggerDropdown={this.triggerDropdown}
                                           dropdownModule={this.state.dropdownModule}
                                           dropdownClass={this.state.dropdownClass}
                                           handleInput={this.handleInput}
                                           triggerActive={triggerActive}
                                           triggerInactive={triggerInactive}
                                           handleSelect={this.handleSelect}/>
                    <button className="box button is-medium" onClick={this.addExamAndRedirect}>Suivant</button>
                    {this.state.redirectExercices ? <Redirect to={`/newexam/${this.state.idRedirect}/exercices`}/> : null}
                </div>
            </>
        );
    }
}

export default connect(state => ({
    exams: state.exams.exams,
    loading: state.exams.loading,
}), dispatch => ({
    createExam: (examData) => dispatch(postExam(examData)),
}))(Instructions);
