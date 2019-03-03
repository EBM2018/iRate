import React, {Component} from 'react'
import InstructionsDisplayer from './InstructionsDisplayer';
import {Redirect} from 'react-router-dom'
import connect from "react-redux/es/connect/connect";
import {postExam} from "../../redux/exams/actions/post";

class Instructions extends Component {
    state = {
        dropdownModule: false,
        dropdownClass: false,
        title: '',
        reminder: '',
        instruction: '',
        redirectExercices: false,
    };

    /**
     * trigger the boolean in state with str as input
     * @param str
     * @returns undefined
     */
    triggerDropdown = (str) => () => {
        this.setState({[str]: !this.state[str]})
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

    render() {
        return (
            <>
                <div className="tile is-child">
                    <InstructionsDisplayer triggerDropdown={this.triggerDropdown}
                                           dropdownModule={this.state.dropdownModule}
                                           handleInput={this.handleInput}
                                           dropdownClass={this.state.dropdownClass}/>
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
