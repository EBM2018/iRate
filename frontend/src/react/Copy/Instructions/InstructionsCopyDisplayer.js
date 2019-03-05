import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class InstructionsCopyDisplayer extends Component {
  static propTypes = {

  };

  render() {
    return (
      <section className="section">
        <div className="box notification is-info"><p className="title">/Intitulé exam/</p></div>
        <div className="box">
          <div className="columns">
            <div className="column is-one-third">
              <span className="title is-5">Date de l'examen:</span>
            </div>
            <div className="column is-two-thirds has-text-right">

            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <span className="title is-5">Heure de début:</span>
            </div>
            <div className="column is-two-thirds has-text-right">

            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <span className="title is-5">Heure de fin:</span>
            </div>
            <div className="column is-two-thirds has-text-right">

            </div>
          </div>

          <div className="columns">
            <div className="column is-one-third"><span className="title is-5">Rappels:</span></div>
            <div className="column is-two-thirds">

            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third"><span className="title is-5">Consignes:</span></div>
            <div className="column is-two-thirds">

            </div>
          </div>
        </div>
      </section>
    );
  }
}
