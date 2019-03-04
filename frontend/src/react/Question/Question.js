import React from 'react';
import QuestionDisplayer from "./QuestionDisplayer";
import {arrayMove} from "array-move";
import {SortableElement} from "react-sortable-hoc";

const Question = (props) => {
  const onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({question}) => ({
      question: arrayMove(this.props.question, oldIndex, newIndex),
    }));
  };
  return (
    <QuestionDisplayer handleInputQuestion={props.handleInputQuestion}
                       deleteQuestion={props.deleteQuestion}
                       id={props.id}
                       question={props.question}
                       onSortEnd={onSortEnd}
                       exercices={props.exercices}
                       index={props.id}/>
  );
};

export default SortableElement((props) => Question(props));
