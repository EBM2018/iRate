import React from 'react';
import QuestionDisplayer from './QuestionDisplayer';
import { SortableElement } from 'react-sortable-hoc';

const Question = props => {
  return (
    <QuestionDisplayer
      handleInputQuestion={props.handleInputQuestion}
      deleteQuestion={props.deleteQuestion}
      saveQuestion={props.saveQuestion}
      saveQuestionEnter={props.saveQuestionEnter}
      id={props.id}
      question={props.question}
      exercices={props.exercices}
      index={props.idQuestion}
    />
  );
};

export default SortableElement(props => Question(props));
