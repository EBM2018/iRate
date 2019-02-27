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
      {"questionTitle": '', "questionScale": null, "questionContent": '', "order": 1},
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
    let question = [...this.state.question];
    const maxOrder = Math.max(...question.map(qu => qu.order));
    question.push({"questionTitle": '', "questionScale": null, "questionContent": '', "order" : maxOrder + 1});
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
    if (idQuestion === '0') return;
    else {
      const question = [...this.state.question];
      question.splice(idQuestion, 1);
      this.setState({question});
    }
  };

  moveQuestion = (dragIndex, hoverIndex) => {
    const {question} = this.state;
    const dragQuestion = question[dragIndex];

    this.setState({
      ...this.state,
      question: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragQuestion]],
        },
      });
  };

  render() {
    return (
      <ExerciceDisplayer handleInput={this.handleInput}
                         addQuestion={this.addQuestion}
                         deleteQuestion={this.deleteQuestion}
                         deleteExercice={this.props.deleteExercice}
                         moveQuestion={this.moveQuestion}
                         question={this.state.question}
                         index={this.props.index}
                         id={this.props.id}/>
    );
  }
}
