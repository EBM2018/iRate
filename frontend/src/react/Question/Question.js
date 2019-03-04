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
  const handleInput = (e) => {
    this.setState({[e.target.name]:e.target.value});
  };
  return (
    <QuestionDisplayer handleInput={handleInput}
                       deleteExercice={props.deleteExercice}
                       id={props.id}
                       onSortEnd={onSortEnd}
                       exercices={props.exercices}
                       index={props.id}/>
  );
};

export default SortableElement((props) => Question(props));
