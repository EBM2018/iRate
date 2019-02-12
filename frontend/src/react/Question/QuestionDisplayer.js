import React from 'react';
import PropTypes from 'prop-types';

export default class QuestionDisplayer extends React.PureComponent {
  static propTypes = {
    /*number: PropTypes.number,
    intitule: PropTypes.str,
    contenu: PropTypes.str,
    fctSave: PropTypes.function,*/
    handleInput: PropTypes.func.isRequired
  };

  static defaultProps = {};

  render() {
    return (
        <div className="box">
          <div className="columns">
            <div className="column is-half"><span className="title is-5">Intitulé question :</span></div>
            <div className="column is-half"><input className="input"
                                                   name="questionTitle"
                                                   onChange={this.props.handleInput}
                                                   type="text"
                                                   placeholder="Nouvelle Question"/></div>
          </div>
          <div className="columns">
            <div className="column is-half"><span className="title is-5">Barème :</span></div>
            <div className="column is-half"><input className="input"
                                                   name="exerciceScale"
                                                   onChange={this.props.handleInput}
                                                   type="number"
                                                   min="0"
                                                   step="0.25"/></div>
          </div>
          <div className="columns">
            <div className="column is-half"><span className="title is-5">Contenu question :</span></div>
            <div className="column is-half"><textarea className="textarea"
                                                   name="questionContent"
                                                   onChange={this.props.handleInput}
                                                   type="text"
                                                   placeholder="Question..."/></div>
          </div>
        </div>
    );
  }
}
