import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class Instructions extends Component {
  static propTypes = {
    title: PropTypes.string,
    reminders: PropTypes.string,
    instructions: PropTypes.string,
    session: PropTypes.object,
    start: PropTypes.func.isRequired
  };

  render() {
    return (
      <section className="section">
        <div className="box notification is-info"><p className="title">{this.props.title}</p></div>
        <div className="box">
          <div className="columns">
            <div className="column is-one-third">
              <span className="title is-5">Date de l'examen:</span>
            </div>
            <div className="column is-two-thirds">
              <span className="title is-5">{this.props.session.date}</span>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <span className="title is-5">Heure de début:</span>
            </div>
            <div className="column is-two-thirds">
              <span className="title is-5">{this.props.session.startTime}</span>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <span className="title is-5">Heure de fin:</span>
            </div>
            <div className="column is-two-thirds">
              <span className="title is-5">{this.props.session.endTime}</span>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third"><span className="title is-5">Rappels:</span></div>
            <div className="column is-two-thirds">
              <span className="title is-5">{this.props.reminders}</span>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third"><span className="title is-5">Consignes:</span></div>
            <div className="column is-two-thirds">
              <span className="title is-5">{this.props.instructions}</span>
            </div>
          </div>
          <div className="columns">
              <div className="column is-half">
                  <button className="button is-medium is-info">Télécharger le sujet</button>
              </div>
              <div className="column is-right is-half">
                  <div className="buttons has-addons is-right">
                  <button className="button is-medium is-info" onClick={this.props.start}>Démarrer l'examen</button>
                  </div>
              </div>
          </div>
        </div>
      </section>
    );
  }
}
