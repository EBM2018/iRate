import React from 'react';
import ExerciceDisplayer from './ExerciceDisplayer';
import PropTypes from "prop-types";

export default class Exercice extends React.Component {

  static propTypes = {
    exercices: PropTypes.array,
    id: PropTypes.number,
  };

  state = {
    question:[
      {"questionTitle": '', "questionScale": null, "questionContent": ''},
    ]
  };

  /**
   * Put input value in state with name of the input as name of the variable
   * @param {Object} e
   */
  handleInput = (e) => {
    this.setState({[e.target.name]:e.target.value});
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
   * Delete a question related to an exercice.
   *
   * We can't delete the first question.
   *
   * @param {Object} v
   */
  deleteQuestion = (v) => {
    let idQuestion = v.target.value;
    console.log(idQuestion);
    if (idQuestion === '0') return;
    else {
      const question = [...this.state.question];
      question.splice(idQuestion, 1);
      this.setState({question});
    }
  };

  render() {
    return (
      <ExerciceDisplayer handleInput={this.handleInput}
                         addQuestion={this.addQuestion}
                         deleteQuestion={this.deleteQuestion}
                         deleteExercice={this.props.deleteExercice}
                         question={this.state.question}
                         index={this.props.index}
                         id={this.props.id}/>
    );
  }
}
