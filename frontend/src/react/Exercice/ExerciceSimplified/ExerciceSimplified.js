import React from 'react';
import PropTypes from "prop-types";
import ExerciceSimplifiedDisplayer from "./ExerciceSimplifiedDisplayer";
import {arrayMove} from 'array-move';
import {SortableElement} from "react-sortable-hoc";


const ExerciceSimplified = (props) => {
  const onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({exercices}) => ({
      exercices: arrayMove(this.props.exercices, oldIndex, newIndex),
    }));
  };
  const handleInput = (e) => {
    this.setState({[e.target.name]:e.target.value});
  };
  return (
    <ExerciceSimplifiedDisplayer handleInput={handleInput}
                                 deleteExercice={props.deleteExercice}
                                 id={props.id}
                                 onSortEnd={onSortEnd}
                                 exercices={props.exercices}
                                 index={props.id}/>
  );
};

export default SortableElement((props) => ExerciceSimplified(props));
