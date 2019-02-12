import React from 'react';
import PropTypes from 'prop-types';
import Question from '../Question/Question';

export default class ExerciceDisplayer extends React.Component {
  static propTypes = {
    handleInput: PropTypes.func.isRequired,
    delQuestion: PropTypes.func.isRequired,
    question: PropTypes.array.isRequired,
  };

  static defaultProps = {};

  render() {
    return (
      <div className="section">
        <div className="box notification is-info">
          <div className="content">
            <div className="columns">
              <div className="column is-11">
                <p className="title">Exercice {this.props.index + 1}</p>
              </div>
              <div className="column is-1">
                <div className="delete is-large"/>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="columns">
            <div className="column is-half"><span className="title is-5">Intitulé de l'exercice :</span></div>
            <div className="column is-half"><input className="input"
                                                   name="exerciceTitle"
                                                   onChange={this.props.handleInput}
                                                   type="text"
                                                   placeholder="Epreuve..."/></div>
          </div>
          <div className="columns">
            <div className="column is-half"><span className="title is-5">Temps estimé :</span></div>
            <div className="column is-half"><input className="input"
                                                   name="estimatedTime"
                                                   onChange={this.props.handleInput}
                                                   type="text"/></div>
          </div>
        </div>
        {this.props.question.map((value,idx) => <Question key={idx} id={idx} question={value} index={idx} delQuestion={this.props.delQuestion}/>)}
        <button className="button is-info is-medium" onClick={this.props.addQuestion}>Nouvelle Question</button>
      </div>
    );
  }
}
