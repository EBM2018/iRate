import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export default class InstructionsCopyDisplayer extends Component {
  static propTypes = {
    title: PropTypes.string,
    reminders: PropTypes.string,
    instructions: PropTypes.string,
    session: PropTypes.object
  };

  render() {
    const exam = this.props.exam;
    const session = this.props.session;
    return (
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
        <div className="columns">
          <div className="column is-half">
            <button  className="button is-medium is-info">
              <Link to={{
                      pathname: `/topic/${exam._id}`,
                      state: { exam, session }
                    }}
              >
                Afficher le sujet</Link>
            </button>
          </div>
          <div className="column is-right is-half">
            <div className="buttons has-addons is-right">
              <button className="button is-medium is-info">Démarrer l'examen</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
