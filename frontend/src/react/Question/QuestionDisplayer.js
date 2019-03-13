import React from 'react';
import PropTypes from 'prop-types';

export default class QuestionDisplayer extends React.Component {

    static propTypes = {
        handleInputQuestion: PropTypes.func.isRequired,
        saveQuestion: PropTypes.func.isRequired,
        deleteQuestion: PropTypes.func.isRequired,
        question: PropTypes.array.isRequired,
        id: PropTypes.number.isRequired,
    };

    render() {
        return (
            <div className="box">
                <div className="columns">
                    <div className="column is-5"><span className="title is-5">Intitulé question :</span>
                    </div>
                    <div className="column is-6"><input className="input"
                                                        name="questionTitle"
                                                        id={this.props.id}
                                                        onChange={this.props.handleInputQuestion}
                                                        onBlur={this.props.saveQuestion}
                                                        defaultValue={typeof this.props.question.title === 'undefined' ? '' : this.props.question.title}
                                                        type="text"
                                                        placeholder="Nouvelle Question"/></div>
                    <div className="column is-1">
                        <button className="delete is-large" value={this.props.id} onClick={this.props.deleteQuestion}/>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-5"><span className="title is-5">Barème :</span></div>
                    <div className="column is-6"><input className="input"
                                                        name="questionScale"
                                                        id={this.props.id}
                                                        defaultValue={typeof this.props.question.scale === 'undefined' ? '' : this.props.question.scale}
                                                        onChange={this.props.handleInputQuestion}
                                                        onBlur={this.props.saveQuestion}
                                                        type="number"
                                                        min="0"
                                                        step="0.25"/></div>
                    <div className="column is-1">
                        <i className="fas fa-sort fa-2x"
                           style={{paddingLeft: "10px", color: "hsl(204, 86%, 53%)", cursor: "grabbing"}}/>
                    </div>
                </div>
                <div className="columns">

                    <div className="column is-5"><span className="title is-5">Temps estimé :</span></div>
                    <div className="column is-6"><input className="input"
                                                        name="questionEstimatedTime"
                                                        id={this.props.id}
                                                        defaultValue={typeof this.props.question.estimatedTime === 'undefined' ? '' : this.props.question.estimatedTime}
                                                        onChange={this.props.handleInputQuestion}
                                                        onBlur={this.props.saveQuestion}
                                                        type="number"
                                                        min="0"
                                                        step="0.25"/></div>
                    <div className="column is-1">
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-5"><span className="title is-5">Contenu question :</span></div>
                    <div className="column is-6"><textarea className="textarea"
                                                           name="questionCorrection"
                                                           id={this.props.id}
                                                           defaultValue={typeof this.props.question.correction === 'undefined' ? '' : this.props.question.correction}
                                                           onChange={this.props.handleInputQuestion}
                                                           onBlur={this.props.saveQuestion}
                                                           type="text"
                                                           placeholder="Question..."
                    /></div>
                    <div className="column is-1">
                    </div>
                </div>
            </div>
        );
    }
}

