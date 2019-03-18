import React, {Component} from 'react';
import QuestionDisplayer from "./QuestionDisplayer";
import {Editor, EditorState, RichUtils} from 'draft-js';

export default class Question extends Component {
    state = {
        editorState: EditorState.createEmpty()
    };

    handleChange = (editorState) => {
        this.setState({editorState});
    };

    handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    };

    onUnderlineClick = () => {
        this.handleChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    };

    onBoldClick = () => {
        this.handleChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
    };

    onItalicClick = () => {
        this.handleChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
    };

    render() {
        return (
            <QuestionDisplayer question={this.props.question}
                               showScale={this.props.showScale}
                               editorState={this.state.editorState}
                               handleChange={this.handleChange}
                               handleKeycommand={this.handleKeyCommand}
                               onUnderlineClick={this.onUnderlineClick}
                               onBoldClick={this.onBoldClick}
                               onItalicClick={this.onItalicClick}
                               index={this.props.index}/>
        );
    }
}
