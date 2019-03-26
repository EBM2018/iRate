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
          <div className="buttons field is-grouped">
            <div className="control">
              <div className="steps-action">
                <a
                  href="#/"
                  data-nav="next"
                  className="button is-info is-outlined is-medium"
                  onClick={this.props.handleNext}
                >
                  Next
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
