import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExerciceDisplayer from './ExerciceDisplayer';

class Exercice extends Component {
  static propTypes = {
    exercice: PropTypes.object.isRequired,
    nextExercice: PropTypes.func.isRequired
  };

  componentDidMount() {
    console.log(this.props);
  }

  handleNext = () => {
    // TODO: save along the way
    this.props.nextExercice();
  };

  render() {
    return (
      <ExerciceDisplayer
        handleNext={this.handleNext}
        exercice={this.props.exercice}
        showScale={this.props.showScale}
      />
    );
  }
}

export default connect(
  state => ({
    exams: state.exams.exams,
    loading: state.exams.loading
  }),
  dispatch => ({
    //post method goes here
  })
)(Exercice);
