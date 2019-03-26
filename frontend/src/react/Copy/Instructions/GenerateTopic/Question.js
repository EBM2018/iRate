import React from "react";
import PropTypes from "prop-types";

export default class Question extends React.Component {
  static propTypes = {
    question: PropTypes.object
  };

  render() {
    const question = this.props.question;
    return (
      <>
        <div className="box">
          <div className="columns">
            <div className="column is-half">
              <span className="title is-5">Intitulé question :</span>
            </div>
            <div className="column is-half">
              <span className="title is-5">{question.title}</span>
            </div>
          </div>
          <div className="columns">
            <div className="column is-half">
              <span className="title is-5">Barème :</span>
            </div>
            <div className="column is-half">
              <span className="title is-5">{question.scale}</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
