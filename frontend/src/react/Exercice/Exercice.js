import React from 'react';
import ExerciceDisplayer from './ExerciceDisplayer';
import PropTypes from "prop-types";

export default class Exercice extends React.Component {

    static propTypes = {
        exercices: PropTypes.array,
        handleInputExercice: PropTypes.func,
        id: PropTypes.number,
    };

    state = {
        question: [
            {"questionTitle": '', "questionScale": null, "questionContent": ''},
        ],
    };

    /**
     * Add a new question related to an exercice.
     */
    addQuestion = () => {
        const question = [...this.state.question];
        question.push({"questionTitle": '', "questionScale": null, "questionContent": ''});
        this.setState({question});
    };

    /**
     * Put input value in state with name of the input as name of the variable
     * @param {Object} e
     */
    handleInputQuestion = (e) => {
        let questions = this.state.question;
        let name = e.target.name;
        let id = e.target.id;
        console.log(e.target.id);
        switch (name) {
            case 'questionTitle':
                questions[id].questionTitle = e.target.value;
                this.setState({question: questions});
                break;
            case 'questionScale':
                questions[id].questionScale = e.target.value;
                this.setState({question: questions});
                break;
            case 'questionContent':
                questions[id].questionContent = e.target.value;
                this.setState({question: questions});
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
        if (idQuestion === '0') return;
        else {
            const question = [...this.state.question];
            question.splice(idQuestion, 1);
            this.setState({question});
        }
    };

    render() {
        return (
            <div>
                <ExerciceDisplayer handleInputQuestion={this.handleInputQuestion}
                                   handleInputExercice={this.props.handleInputExercice}
                                   addQuestion={this.addQuestion}
                                   exercices={this.props.exercices}
                                   deleteQuestion={this.deleteQuestion}
                                   deleteExercice={this.props.deleteExercice}
                                   question={this.state.question}
                                   index={this.props.index}
                                   id={this.props.id}/>
            </div>
        );
    }
}