import React from 'react';
import QuestionDisplayer from "./QuestionDisplayer";
import PropTypes from "prop-types";

export default class Question extends React.Component {

  static propTypes = {
    exercices: PropTypes.array,
    deleteQuestion: PropTypes.func,
    question: PropTypes.array,
    id: PropTypes.number,
  };

  /**
   * Put input value in state with name of the input as name of the variable
   * @param {Object} e
   */
  handleInput = (e) => {
    this.setState({[e.target.name]:e.target.value});
  };

  render() {
    return (
      <QuestionDisplayer handleInput={this.handleInput}
                         deleteQuestion={this.props.deleteQuestion}
                         question={this.props.question}
                         id={this.props.id}/>
    );
  }
}
