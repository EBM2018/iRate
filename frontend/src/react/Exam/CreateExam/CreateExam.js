import React, { Component } from 'react';
import ExerciceList from './Exercice/ExerciceList/ExerciceList';
import FooterExam from './FooterExam/FooterExam';

export default class CreateExam extends Component {
  render() {
    return (
      <>
        <div className="tile is-parent">
          <div className="tile is-child">
            <ExerciceList />
          </div>
        </div>
        <FooterExam />
      </>
    );
  }
}