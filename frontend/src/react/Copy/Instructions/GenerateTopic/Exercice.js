import React from 'react'
import PropTypes from "prop-types";
import Question from "./Question";
let uniqid = require('uniqid');

export default class Exercice extends React.Component{

  static propTypes = {
    exercice: PropTypes.object
  };

  render() {
    const exercice = this.props.exercice;
    const question = exercice.questions;
    return (
      <>
        <section className="section">
          <div className="box notification is-info">
            <div className="content">
              <span className="title">Exercice {this.props.index + 1}</span>
            </div>
          </div>
          <section className="box">
            <div className="columns">
              <div className="column is-half"><span className="title is-5">Intitulé de l'exercice :</span></div>
              <div className="column is-half"><span className="title is-5">{exercice.title}</span></div>
            </div>
            <div className="columns">
              <div className="column is-half"><span className="title is-5">Temps estimé :</span></div>
              <div className="column is-half"><span className="title is-5">{exercice.estimatedTime}</span></div>
            </div>
          </section>
          {question.map((question,idx) => <Question key={uniqid()} index={idx} question={question}/>)}
        </section>
      </>
    );
  }
}
