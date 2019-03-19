import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import { EditorState, RichUtils } from 'draft-js';

import QuestionDisplayer from './QuestionDisplayer';
import {
  createRawContent
} from '../../../../helpers/richContent';

import ControllerDisplayer from './Controller/ControllerDisplayer';
import AnswerDisplayer from './Answer/AnswerDisplayer';

import { patchAnswer, postAnswer } from '../../../../services/answers';

class Question extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    answer: ''
  };

  handleChange = editorState => {
    this.setState({ editorState });
  };

  handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  myBlockStyleFn = contentBlock => {
    const type = contentBlock.getType();
    if (type === 'unstyled') {
      return 'textarea';
    }
  };

  handleControllerClick = async () => {
    const { editorState, answer } = this.state;
    const rawContent = createRawContent(editorState);
    const copyId = this.props.copy._id;

    if (answer._id) {
      const answerData = await patchAnswer(
        copyId,
        this.props.id,
        answer._id,
        rawContent
      );
      this.setState({ answer: answerData });
    } else {
      const answerData = await postAnswer(copyId, this.props.id, rawContent);
      this.setState({ answer: answerData });
    }
  };

  onUnderlineClick = () => {
    this.handleChange(
      RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE')
    );
  };

  onBoldClick = () => {
    this.handleChange(
      RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD')
    );
  };

  onItalicClick = () => {
    this.handleChange(
      RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC')
    );
  };

  render() {
    return (
      <>
        <QuestionDisplayer
          question={this.props.question}
          showScale={this.props.showScale}
          index={this.props.index}
        />
        <div className="box">
          <AnswerDisplayer
            editorState={this.state.editorState}
            myBlockStyleFn={this.myBlockStyleFn}
            handleEditorClick={this.handleEditorClick}
            handleChange={this.handleChange}
            handleKeycommand={this.handleKeyCommand}
            handleBlur={this.handleBlur}
            onUnderlineClick={this.onUnderlineClick}
            onBoldClick={this.onBoldClick}
            onItalicClick={this.onItalicClick}
          />
          <ControllerDisplayer
            handleControllerClick={this.handleControllerClick}
          />
        </div>
      </>
    );
  }
}

export default connect(
  state => ({
    loading: state.exams.loading,
    copy: state.copiesStore.copies,
    answers: state.answer
  }),
  dispatch => ({
    /*editAnswer: (copyId, questionId, answerId, answerContent) =>
      dispatch(patchAnswer(copyId, questionId, answerId, answerContent))*/
  })
)(Question);
