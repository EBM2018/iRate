import React from 'react';
import PropTypes from 'prop-types';

export default class QuestionDisplayer extends React.Component {
  static propTypes = {
    handleInputQuestion: PropTypes.func.isRequired,
    saveQuestion: PropTypes.func.isRequired,
    saveQuestionEnter: PropTypes.func.isRequired,
    deleteQuestion: PropTypes.func.isRequired,
    question: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
  };

  render() {
    return (
      <div className="box">
        <div className="columns">
          <div className="column is-1">
            <i
              className="fas fa-sort fa-2x"
              style={{
                paddingLeft: '10px',
                color: 'hsl(204, 86%, 53%)',
                cursor: 'grabbing'
              }}
            />
          </div>
          <div className="column is-10">
            <span className="title is-5">Question {this.props.index + 1}</span>
          </div>
          <div className="column is-1">
            <button
              className="delete is-large"
              value={this.props.id}
              onClick={this.props.deleteQuestion}
            />
          </div>
        </div>
        <div className="columns" />
        <div className="columns">
          <div className="column is-5">
            <span className="title is-5">Barème :</span>
          </div>
          <div className="column is-6">
            <input
              className="input"
              name="questionScale"
              id={this.props.id}
              defaultValue={
                typeof this.props.question.scale === 'undefined'
                  ? ''
                  : this.props.question.scale
              }
              onChange={this.props.handleInputQuestion}
              onKeyDown={this.props.saveQuestionEnter}
              onBlur={this.props.saveQuestion}
              type="number"
              min="0"
              step="0.25"
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-5">
            <span className="title is-5">Temps estimé :</span>
          </div>
          <div className="column is-6">
            <input
              className="input"
              name="questionEstimatedTime"
              placeholder="minutes"
              id={this.props.id}
              defaultValue={
                typeof this.props.question.estimatedTime === 'undefined'
                  ? ''
                  : this.props.question.estimatedTime / 60
              }
              onChange={this.props.handleInputQuestion}
              onBlur={this.props.saveQuestion}
              onKeyDown={this.props.saveQuestionEnter}
              type="number"
              min="0"
              step="0.25"
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-5">
            <span className="title is-5">Contenu question :</span>
          </div>
          <div className="column is-6">
            <textarea
              className="textarea"
              name="questionTitle"
              id={this.props.id}
              defaultValue={
                typeof this.props.question.title === 'undefined'
                  ? ''
                  : this.props.question.title
              }
              onChange={this.props.handleInputQuestion}
              onBlur={this.props.saveQuestion}
              onKeyDown={this.props.saveQuestionEnter}
              type="text"
              placeholder="Question..."
            />
          </div>
        </div>
      </div>
    );
  }
}
