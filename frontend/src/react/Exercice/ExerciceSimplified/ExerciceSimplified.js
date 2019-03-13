import React from 'react';
import PropTypes from "prop-types";
import ExerciceSimplifiedDisplayer from "./ExerciceSimplifiedDisplayer";
import {arrayMove} from 'array-move';
import {SortableElement} from "react-sortable-hoc";

const ExerciceSimplified = (props) => {

    return (
        <ExerciceSimplifiedDisplayer
                                     deleteExercice={props.deleteExercice}
                                     id={props.id}
                                     exercices={props.exercices}
                                     idQuestion={props.idQuestion}
                                     index={props.index}/>
    );
};

export default SortableElement((props) => ExerciceSimplified(props));
