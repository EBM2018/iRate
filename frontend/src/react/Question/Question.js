import React from 'react';
import QuestionDisplayer from "./QuestionDisplayer";
import PropTypes from "prop-types";

export default class Question extends React.Component {

    static propTypes = {
        exercices: PropTypes.array,
        handleInputQuestion: PropTypes.func,
        deleteQuestion: PropTypes.func,
        question: PropTypes.array,
        id: PropTypes.number,
    };

    render() {
        return (
            <QuestionDisplayer handleInput={this.props.handleInputQuestion}
                               deleteQuestion={this.props.deleteQuestion}
                               question={this.props.question}
                               id={this.props.id}/>
        );
    }
}
