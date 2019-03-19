import React, { Component } from "react";
import InstructionsCopyDisplayer from "./InstructionsCopyDisplayer";
import PropTypes from "prop-types";

export default class Instructions extends Component {
  static propTypes = {
    exam: PropTypes.object,
    session: PropTypes.object,
    start: PropTypes.func.isRequired
  };

  render() {
    return (
      <>
        <div className="tile is-child">
          <InstructionsCopyDisplayer
            exam={this.props.exam}
            session={this.props.session}
            start={this.props.start}
          />
        </div>
      </>
    );
  }
}
