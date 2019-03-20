import React from 'react';
import ExerciceDisplayer from './ExerciceDisplayer';
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import {postQuestion} from "../../redux/question/actions/post";
import {deleteQuestion} from "../../redux/question/actions/delete";
import {patchQuestion} from "../../redux/question/actions/patch";
import {getExam} from "../../redux/exams/actions/getSingle";


class Exercice extends React.Component {

    static propTypes = {
        exercices: PropTypes.array,
        handleInputExercice: PropTypes.func,
        saveNewExercice: PropTypes.func,
        id: PropTypes.number,
        index: PropTypes.number
    };

    state = {
        question: [],
    };

    componentDidMount() {
        this.setState({question: this.props.exercices.questions});
    };

    /**
     * Add a new question related to an exercice.
     */
    addQuestion = async () => {
        let question = this.state.question;
        let maxOrder = 0;
        if (question.length !== null) {
            maxOrder = question.length;
            question.push({"title": 'Nouvelle Question', "scale": 0, "correction": '', "order": maxOrder + 1});
        } else {
            question = [{"title": 'Nouvelle Question', "scale": 0, "correction": '', "order": 1}];
            maxOrder = 0;
        }
        this.setState({question: question});
        await this.props.fetchNewQuestion(this.props.id, this.props.exercices._id, {
            "title": "Nouvelle Question",
            "order": maxOrder + 1,
            "scale": 0,
            "correction": ""
        });
        await this.props.fetchExam(this.props.id);
    };

    moveQuestion = async ({oldIndex, newIndex}) => {
        let exercices = this.props.exercices.questions;
        let departure = oldIndex + 1;
        let arrival = newIndex + 1;
        if (arrival === departure) return;
        if (arrival > departure) {
            for (let i in exercices) {
                if (exercices[i].order <= arrival && exercices[i].order > departure && exercices[i].order !== departure) {
                    exercices[i].order = exercices[i].order - 1;
                }
            }
            exercices[oldIndex].order = newIndex;

        } else {
            for (let i in exercices) {
                if (exercices[i].order >= arrival && exercices[i].order < departure && exercices[i].order !== departure) {
                    // exercices[i].order = exercices[i].order - 1;
                }
            }
            exercices[oldIndex].order = newIndex + 1;
        }
        for (let i in this.state.question) {
            if (typeof this.state.question[i]._id !== 'undefined') {
                await this.props.patchQuestion(this.props.id, this.props.exercices._id, this.state.question[i]._id, this.state.question[i]);
            }
        }
        this.setState({question: exercices});
        await this.props.fetchExam(this.props.id);
    };

    /**
     * Put input value in state with name of the input as name of the variable
     * @param {Object} e
     */
    handleInputQuestion = async (e) => {
        const {question} = this.state;
        const {name, id} = e.target;
        switch (name) {
            case 'questionTitle':
                question[id].title = e.target.value;
                this.setState({question: question});
                break;
            case 'questionScale':
                question[id].scale = e.target.value;
                this.setState({question: question});
                break;
            case 'questionCorrection':
                question[id].correction = e.target.value;
                this.setState({question: question});
                break;
            case 'questionEstimatedTime':
                let time = (e.target.value) * 60;
                question[id].estimatedTime = time;
                this.setState({question: question});
                break;
            default:
                break;
        }
    };


    /**
     * Delete a question related to an exercice.
     *
     * We can't delete the first question.
     *
     * @param {Object} v
     */
    deleteQuestion = (v) => {
        let idQuestion = v.target.value;
        const question = [...this.state.question];
        question.splice(idQuestion, 1);
        let idExo = this.props.exercices._id;
        this.setState({question});
        this.props.fetchDeleteQuestion(this.props.id, idExo, this.state.question[idQuestion]._id);
    };

    saveNewQuestion = () => {
        for (let i in this.state.question) {
            if (typeof this.state.question[i]._id !== 'undefined') {
                this.props.patchQuestion(this.props.id, this.props.exercices._id, this.state.question[i]._id, this.state.question[i]);
            }
        }
    };

    render() {
        return (
            <div>
                <ExerciceDisplayer handleInputQuestion={this.handleInputQuestion}
                                   handleInputExercice={this.props.handleInputExercice}
                                   saveNewExercice={this.props.saveNewExercice}
                                   addQuestion={this.addQuestion}
                                   exercices={this.props.exercices}
                                   deleteQuestion={this.deleteQuestion}
                                   moveQuestion={this.moveQuestion}
                                   deleteExercice={this.props.deleteExercice}
                                   saveQuestion={this.saveNewQuestion}
                                   question={this.state.question}
                                   index={this.props.index}
                                   id={this.props.id}/>
            </div>
        );
    }
}


export default connect((state, ownProps) => ({
    exercice: state.exercices.exercices,
    exam: state.exams.exams,
    loading: state.exercices.loading,
    err: state.exercices.errorMessage
}), (dispatch, ownProps) => ({
    fetchNewQuestion: (idExam, idExercice, questionToAdd) => dispatch(postQuestion(idExam, idExercice, questionToAdd)),
    fetchDeleteQuestion: (idExam, idExercice, idQuestion, questionToAdd) => dispatch(deleteQuestion(idExam, idExercice, idQuestion, questionToAdd)),
    patchQuestion: (idExam, idExercice, idQuestion, questionToAdd) => dispatch(patchQuestion(idExam, idExercice, idQuestion, questionToAdd)),
    fetchExam: (id) => dispatch(getExam(id)),
}))(Exercice);



