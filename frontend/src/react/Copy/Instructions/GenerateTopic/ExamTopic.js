import React, {Component} from "react";
import Exercice from "./Exercice";
let uniqid = require('uniqid');

export default class ExamTopic extends Component {

  downloadTopic = () => {
    window.print();
  };

  render() {
    const exam = this.props.route.location.state.exam;
    const session = this.props.route.location.state.session;
    const exercices = this.props.route.location.state.exam.exercices;
    return (
      <div>
        <div className="has-text-centered">
          <a href="#/" onClick={this.downloadTopic} className="button is-success">
            <span className="icon is-large"><i className="fas fa-download"></i></span>
            <span>Télécharger le sujet</span>
          </a>
        </div>
        <section className="section">
          <div className="box notification is-info"><p className="title">{exam.title}</p></div>
          <div className="box">
            <div className="columns">
              <div className="column is-one-third">
                <span className="title is-5">Date de l'examen:</span>
              </div>
              <div className="column is-two-thirds">
                <span className="title is-5">{session.classes[0].date}</span>
              </div>
            </div>
            <div className="columns">
              <div className="column is-one-third">
                <span className="title is-5">Heure de début:</span>
              </div>
              <div className="column is-two-thirds">
                <span className="title is-5">{session.classes[0].startTime}</span>
              </div>
            </div>
            <div className="columns">
              <div className="column is-one-third">
                <span className="title is-5">Heure de fin:</span>
              </div>
              <div className="column is-two-thirds">
                <span className="title is-5">{session.classes[0].endTime}</span>
              </div>
            </div>
            <div className="columns">
              <div className="column is-one-third"><span className="title is-5">Rappels:</span></div>
              <div className="column is-two-thirds">
                <span className="title is-5">{exam.reminder}</span>
              </div>
            </div>
            <div className="columns">
              <div className="column is-one-third"><span className="title is-5">Consignes:</span></div>
              <div className="column is-two-thirds">
                <span className="title is-5">{exam.instruction}</span>
              </div>
            </div>
          </div>
        </section>
        {exercices.map((exercice,idx) => <Exercice key={uniqid()} index={idx} exercice={exercice}/>)}
      </div>
    )
  }
};
