import React from 'react'
import Exercice from '../Exercice/Exercice';

import PropTypes from 'prop-types';
let uniqid = require('uniqid');

export default class ExerciceListDisplayer extends React.Component{

  static propTypes = {
    deleteExercice: PropTypes.func,
    exercices: PropTypes.array,
    id: PropTypes.number
  };

  static propTypes = {
    deleteExercice: PropTypes.func,
    exercices: PropTypes.array,
    id: PropTypes.number
  };

  render() {
    console.log(this.props.exercices);
    return (
      <>
        {this.props.exercices.map((value,idx) => <Exercice key={uniqid()} id={idx} exercices={value} index={idx} deleteExercice={this.props.deleteExercice} />)}
        <button className="button is-info is-medium" onClick={this.props.addExercice}>Nouvel Exercice</button>
      </>
    );
  }
}
