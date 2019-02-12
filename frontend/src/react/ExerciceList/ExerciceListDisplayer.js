import React from 'react'
import Exercice from '../Exercice/Exercice';
import PropTypes from 'prop-types';

export default class ExerciceListDisplayer extends React.Component{

  render() {
    return (
      <>
        {this.props.exercices.map((value,idx) => <Exercice key={Date.now()} index={idx}/>)}
        <button className="button is-info is-medium" onClick={this.props.addExercice}>Nouvel Exercice</button>
      </>
    );
  }
}
