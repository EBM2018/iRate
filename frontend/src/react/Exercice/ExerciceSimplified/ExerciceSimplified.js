import React from 'react';
import ExerciceSimplifiedDisplayer from "./ExerciceSimplifiedDisplayer";
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
