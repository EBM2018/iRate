import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {EditorState, RichUtils} from 'draft-js';

import QuestionDisplayer from './QuestionDisplayer';
import {createRawContent, createRichContentFromRaw} from '../../../../helpers/richContent';

import ControllerDisplayer from './Controller/ControllerDisplayer';
import AnswerDisplayer from './Answer/AnswerDisplayer';
import {postAnswer} from '../../../../redux/copies/actions/postAnswer';
import {patchAnswer} from '../../../../redux/copies/actions/patchAnswer';

class Question extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        id: '',
        answerId: '',
    };

    componentDidMount() {
        this.setState({id:this.props.id});
    };

    handleChange = (editorState) => {
        this.setState({editorState});
    };

    handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    };

    myBlockStyleFn = (contentBlock) => {
        const type = contentBlock.getType();
        if (type === 'unstyled') {
            return 'textarea';
        }
    };

    handleControllerClick = async () => {
        const { id,
                answerId,
                editorState } = this.state;
        const rawContent = createRawContent(editorState);
        console.log(id,rawContent);
        if (answerId) {
            //TODO make a PATCH Request here
            console.log(await this.props.createAnswer());
            console.log(await this.props.editAnswer());
        } else {
            //TODO make a POST Request here, don't forget to pass the id to the state.
        }
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

    handleBlur = () => {
        //TODO: What we have here is raw content that we need to send to the API when the routes are defined
        console.log(createRawContent(this.state.editorState));
        //TODO: What we have here is a function that creates rich content from raw and that will be needed when the API routes will be defined
        this.setState({editorState: createRichContentFromRaw(createRawContent(this.state.editorState))});
    };



    render() {
        return (
            <>
                <QuestionDisplayer question={this.props.question}
                                   showScale={this.props.showScale}
                                   index={this.props.index}/>
                <div className="box">
                    <AnswerDisplayer editorState={this.state.editorState}
                                     myBlockStyleFn={this.myBlockStyleFn}
                                     handleEditorClick={this.handleEditorClick}
                                     handleChange={this.handleChange}
                                     handleKeycommand={this.handleKeyCommand}
                                     handleBlur={this.handleBlur}
                                     onUnderlineClick={this.onUnderlineClick}
                                     onBoldClick={this.onBoldClick}
                                     onItalicClick={this.onItalicClick}/>
                    <ControllerDisplayer handleControllerClick={this.handleControllerClick}/>
                </div>
            </>
        );
    }
}

export default connect(state => ({
    copyId: state.id,
    answerId: state.answerId,
    loading: state.exams.loading,
}), dispatch => ({
    createAnswer: (copyId,questionId,answerContent) => dispatch(postAnswer(copyId,questionId,answerContent)),
    editAnswer: (copyId,questionId,answerId,answerContent) => dispatch(patchAnswer(copyId,questionId,answerId,answerContent)),
}))(Question);
