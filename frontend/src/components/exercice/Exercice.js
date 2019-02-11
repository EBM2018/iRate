import React from 'react';
import ExerciceDisplayer from "./ExerciceDisplayer";

export default class Exercice extends React.PureComponent {

  state = {
    question: [1]
  };

  /**
   * Put input value in state with name of the input as name of the variable
   * @param {Object} e
   */
  handleInput = (e) => {
    this.setState({[e.target.name]:e.target.value});
  };

  addQuestion = () => {
    const question = [...this.state.question];
    question.push(1);
    this.setState({question});
  };

  render() {
    return (
      <ExerciceDisplayer handleInput={this.handleInput}
                         addQuestion={this.addQuestion}
                         question={this.state.question}
                         index={this.props.index}/>
    );
  }
}
