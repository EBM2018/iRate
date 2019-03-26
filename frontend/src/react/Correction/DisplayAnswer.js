import React, { Component } from 'react';
import {Editor, EditorState} from 'draft-js';
import {createRichContentFromRaw} from '../../helpers/richContent'
class DisplayAnswer extends Component {
  constructor(props) {
    super(props);
    console.log('answer', props.answer)
    this.state = {
        editorState: createRichContentFromRaw(props.answer.content)
      }
    }
  onChange = (editorState) => this.setState({editorState});
  render () {
    return (
      <div>
        <Editor editorState={this.props.answer.content} onChange={this.onChange} />
      </div>
    )
  }
}

export default DisplayAnswer