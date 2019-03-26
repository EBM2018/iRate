import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExerciceDisplayer from './ExerciceDisplayer';

export default class Exercice extends Component {
  static propTypes = {
    exercice: PropTypes.object.isRequired,
    nextExercice: PropTypes.func.isRequired,
    copy: PropTypes.object
  };

  handleNext = () => {
    this.props.nextExercice();
  };

  render() {
    return (
      <ExerciceDisplayer
        handleNext={this.handleNext}
        exercice={this.props.exercice}
        showScale={this.props.showScale}
        copy={this.props.copy}
      />
    );
  }
}
