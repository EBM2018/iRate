import React, { Component } from 'react';

export default class ControllerDisplayer extends Component {
  render() {
    const {handleControllerClick, saved} = this.props;
    return (
      <div className="buttons">
        <button
          className="button is-medium is-info"
          onClick={handleControllerClick}
        >
          Enregistrer
        </button>
        {
          saved && (
            <>
              <span className="icon has-text-success">
                <i className="fas fa-check-circle fa-lg"></i>
              </span>
              <span className="has-text-success">Enregistré</span>
            </>
          )
        }
      </div>
    );
  }
}
