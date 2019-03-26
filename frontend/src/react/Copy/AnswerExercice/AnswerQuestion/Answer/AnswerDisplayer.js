import React, { Component } from "react";
import { Editor } from "draft-js";

export default class AnswerDisplayer extends Component {
  render() {
    return (
      <>
        <div className="buttons">
          <div className="button" onClick={this.props.onBoldClick}>
            <span className="icon">
              <i className="fas fa-bold" />
            </span>
          </div>
          <div className="button" onClick={this.props.onItalicClick}>
            <span className="icon">
              <i className="fas fa-italic" />
            </span>
          </div>
          <div className="button" onClick={this.props.onUnderlineClick}>
            <span className="icon">
              <i className="fas fa-underline" />
            </span>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <Editor
              editorState={this.props.editorState}
              onChange={this.props.handleChange}
              onBlur={this.props.handleBlur}
              handleKeyCommand={this.props.handleKeyCommand}
              placeholder={"Il faut répondre ici."}
              blockStyleFn={this.props.myBlockStyleFn}
            />
          </div>
        </div>
      </>
    );
  }
}
