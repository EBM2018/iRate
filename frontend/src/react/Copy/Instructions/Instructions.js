import React, { Component } from "react";
import InstructionsCopyDisplayer from "./InstructionsCopyDisplayer";
import PropTypes from "prop-types";

export default class Instructions extends Component {
  static propTypes = {
    exam: PropTypes.object,
    session: PropTypes.object,
    startedCopy: PropTypes.object,
    start: PropTypes.func.isRequired
  };

  render() {
    const {startedCopy, start, session, exam} = this.props;
    return (
      <>
        <div className="tile is-child">
          <InstructionsCopyDisplayer
            exam={exam}
            session={session}
            start={start}
            startedCopy={startedCopy}
          />
        </div>
      </>
    );
  }
}
