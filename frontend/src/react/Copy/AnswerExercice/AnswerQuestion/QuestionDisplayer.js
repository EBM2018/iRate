import React, {Component} from 'react';
import moment from "moment";
import 'draft-js/dist/Draft.css';
import {Editor} from 'draft-js';

export default class QuestionDisplayer extends Component {
    render() {
        let {
            title,
            scale,
            estimatedTime
        } = this.props.question;
        const { showScale,
            index } = this.props;

        estimatedTime = moment.utc(estimatedTime * 1000).format('mm:ss');

        return (
            <>
                <div className="box">
                    <div className="level">
                    <span className="level-left">
                        <span className="title is-4">Question {index + 1}</span>
                    </span>
                        <div className="level-right">
                            <div className="field is-grouped is-grouped-multiline">
                                {showScale ? <div className="control">
                                    <div className="tags has-addons">
                                        <span className="tag is-medium is-dark">Barème</span>
                                        <span className="tag is-medium is-info">{scale}</span>
                                    </div>
                                </div> : null}

                                <div className="control">
                                    <div className="tags has-addons">
                                        <span className="tag is-medium is-dark">Temps estimé</span>
                                        <span className="tag is-medium is-primary">{estimatedTime}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subtitle">{title}</div>
                </div>
                <div className="box">
                    <div className="buttons">
                        <div className="button" onClick={this.props.onBoldClick}>
                            <span className="icon">
                                <i className="fas fa-bold"/>
                            </span>
                        </div>
                        <div className="button" onClick={this.props.onItalicClick}>
                            <span className="icon">
                                <i className="fas fa-italic"/>
                            </span>
                        </div>
                        <div className="button" onClick={this.props.onUnderlineClick}>
                            <span className="icon">
                                <i className="fas fa-underline"/>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <Editor editorState={this.props.editorState} className="textarea" onChange={this.props.handleChange} onBlur={this.props.handleBlur} handleKeyCommand={this.props.handleKeyCommand} blockStyleFn={this.props.myBlockStyleFn}/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
