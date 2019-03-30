import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EditorState, RichUtils } from 'draft-js';

import QuestionDisplayer from './QuestionDisplayer';
import {createRawContent, createRichContentFromRaw} from '../../../../helpers/richContent';

import ControllerDisplayer from './Controller/ControllerDisplayer';
import AnswerDisplayer from './Answer/AnswerDisplayer';

import { patchAnswer, postAnswer } from '../../../../services/answers';
import Error from '../../../utils/Error';
export default class Question extends Component {

  static propTypes = {
    question: PropTypes.object.isRequired,
    showScale: PropTypes.bool.isRequired,
    copy: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
  };

  state = {
    editorState: EditorState.createEmpty(),
    answer: '',
    err: '',
    saved: false,
    readOnly: false
  };

  componentDidMount() {
    this.checkForExistingAnswer();
  };

  handleChange = editorState => {
    this.setState({ editorState, saved: false });
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
    if(this.props.readOnly){
        return 'div';
    }
    const type = contentBlock.getType();
    if (type === 'unstyled') {
      return 'textarea';
    }
  };

  checkForExistingAnswer = () => {
    const {question, copy, readOnly} = this.props;
    const answer = copy.answers && copy.answers.find(x => x.refQuestion === question._id);
    if (answer) {
      const editorState = createRichContentFromRaw(answer.content);
      this.setState({ answer, editorState });
    }
    this.setState({readOnly})
  };

  handleControllerClick = async () => {
    const { editorState, answer } = this.state;
    const rawContent = createRawContent(editorState);
    const {copy, question} = this.props;

    if (answer._id) {

      try {
        const answerData = await patchAnswer(copy._id, question._id, answer._id, rawContent);
        this.setState({answer: answerData, saved: true});
      } catch (err) {
        this.setState({err});
      }

    } else {

      try {
        const answerData = await postAnswer(copy._id, question._id, rawContent);
        this.setState({ answer: answerData, saved: true });
      } catch (err) {
        this.setState({err});
      }

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
    const {showScale, question, index} = this.props;
    const {err, saved} = this.state;
    return (
        <>
            {
            !this.state.readOnly && err && <Error errors={err} status={err.response.status}/>
            }
            <QuestionDisplayer question={question}
                               showScale={showScale}
                               index={index}/>
            <div className="box">
                <AnswerDisplayer editorState={this.state.editorState}
                                 myBlockStyleFn={this.myBlockStyleFn}
                                 handleEditorClick={this.handleEditorClick}
                                 handleChange={this.handleChange}
                                 handleKeycommand={this.handleKeyCommand}
                                 handleBlur={this.handleControllerClick}
                                 onUnderlineClick={this.onUnderlineClick}
                                 onBoldClick={this.onBoldClick}
                                 onItalicClick={this.onItalicClick}
                                 readOnly={this.state.readOnly}/>
                {!this.state.readOnly && <ControllerDisplayer
                    handleControllerClick={this.handleControllerClick}
                    saved={saved}
                />}
            </div>
        </>
    );
  }
}