import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';

import { submitCopy } from '../../redux/copies/actions/patch';

class ConfirmCopy extends Component {
  render() {
    return (
      <section className="section">
        <div className="box notification is-info">
          <p className="title">Etape de soumission</p>
        </div>
        <div className="box">
          <div className="columns">
            <div className="column is-one-third">
              <span className="title is-5">Heure dé démarrage:</span>
            </div>
            <div className="column is-two-thirds">
              <span className="title is-5" />
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <span className="title is-5">Nombre d'exercices:</span>
            </div>
            <div className="column is-two-thirds">
              <span className="title is-5" />
            </div>
          </div>
          <div className="columns">
            <div className="column is-right">
              <div className="buttons has-addons is-right">
                <button
                  className="button is-medium is-info"
                  onClick={this.props.confirmCopy}
                >
                  Confirmer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({
    loading: state.exams.loading,
    copy: state.copiesStore.copies
  }),
  dispatch => ({
    confirmCopy: copy => dispatch(submitCopy(copy))
  })
)(ConfirmCopy);
