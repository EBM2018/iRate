import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Instructions extends Component {
  static propTypes = {
    exam: PropTypes.object,
    session: PropTypes.object,
    startedCopy: PropTypes.object,
    start: PropTypes.func.isRequired
  };

  render() {
    const { session, exam, startedCopy } = this.props;
    return (
      <section className="section">
        <div className="box notification is-info">
          <p className="title">{exam.title}</p>
        </div>
        {
          startedCopy &&
          (<div className="notification is-warning">
            <p>Vous avez déjà démarré un examen, cliquer sur "continuer" pour reprendre</p>
          </div>)
        }
        <div className="box">
          <div className="columns">
            <div className="column is-one-third">
              <span className="title is-5">Date de l'examen:</span>
            </div>
            <div className="column is-two-thirds">
              <span className="title is-5">{session.date}</span>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <span className="title is-5">Heure de début:</span>
            </div>
            <div className="column is-two-thirds">
              <span className="title is-5">{session.startTime}</span>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <span className="title is-5">Heure de fin:</span>
            </div>
            <div className="column is-two-thirds">
              <span className="title is-5">{session.endTime}</span>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <span className="title is-5">Rappels:</span>
            </div>
            <div className="column is-two-thirds">
              <span className="title is-5">{exam.reminder}</span>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <span className="title is-5">Consignes:</span>
            </div>
            <div className="column is-two-thirds">
              <span className="title is-5">{exam.instruction}</span>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <Link
              className="button is-medium is-info"
              to={{
                pathname: `/topic/${exam._id}`,
                state: { exam, session }
              }}
            >
              Afficher le sujet
            </Link>
          </div>
          <div className="column is-right is-half">
            <div className="buttons has-addons is-right">
              <button
                className="button is-medium is-info"
                onClick={this.props.start}
              >
                { startedCopy ? "Reprendre" : "Démarrer" } l'examen
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
