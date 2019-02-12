import React from 'react';
import QuestionDisplayer from "./QuestionDisplayer";
import PropTypes from "prop-types";

export default class Question extends React.PureComponent {

  static propTypes = {
    exercices: PropTypes.array,
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
      <QuestionDisplayer handleInput={this.handleInput}/>
    );
  }
}
