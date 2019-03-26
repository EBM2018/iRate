import React, { Component } from 'react';
import Question from './AnswerQuestion/Question';

export default class ExerciceDisplayer extends Component {
  render() {
    const { title, questions } = this.props.exercice;
    const { showScale, copy } = this.props;
    return (
      <div>
        <div className="box notification is-info">
          <div className="title">{title}</div>
        </div>
        {questions.map((question, index) => (
          <Question
            key={question._id}
            question={question}
            showScale={showScale}
            index={index}
            copy={copy}
          />
        ))}
        <div className="steps-actions">
          <div className="buttons field is-grouped columns">
            <div className="is-4 is-offset-8 column text-right">
              <a
                href="#/"
                data-nav="next"
                className="button is-info is-outlined is-medium is-4 is-offset-8"
                onClick={this.props.handleNext}
              >
                <span className="icon">
                  <i className="fas fa-arrow-right"></i>
                </span>
                <span>Suivant</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
