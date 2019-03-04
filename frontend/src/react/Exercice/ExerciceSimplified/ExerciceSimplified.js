import React from 'react';
import PropTypes from "prop-types";
import ExerciceSimplifiedDisplayer from "./ExerciceSimplifiedDisplayer";

export default class ExerciceSimplified extends React.PureComponent {

  static propTypes = {
    exercices: PropTypes.array,
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
      <ExerciceSimplifiedDisplayer handleInput={this.handleInput}
                                   deleteExercice={this.props.deleteExercice}
                                   id={this.props.id}
                                   index={this.props.index}/>
    );
  }
}
