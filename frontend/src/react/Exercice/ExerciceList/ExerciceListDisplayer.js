import React from 'react'
import Exercice from '../Exercice';
import PropTypes from 'prop-types';
import ExerciceSimplified from "../ExerciceSimplified/ExerciceSimplified";
import {sortableContainer, sortableElement} from "react-sortable-hoc";

let uniqid = require('uniqid');

const SortableContainer = sortableContainer(({children}) => {
    return <ul>{children}</ul>;
});

export default class ExerciceListDisplayer extends React.Component {

    static propTypes = {
        deleteExercice: PropTypes.func,
        onSortEnd: PropTypes.func,
        exercices: PropTypes.array,
        handleInputExercice: PropTypes.func,
        id: PropTypes.number,
        idExercice: PropTypes.number
    };

    render() {
        return (
            <>
                <div className="box">
                    <div className="field">
                        <input id="switchRoundedInfo" type="checkbox" name="switchRoundedInfo"
                               className="switch is-rounded is-info" checked={!this.props.isExtended}
                               onChange={this.props.toggleExtend}/>
                        <label htmlFor="switchRoundedInfo">Passer en mode simplifié</label>
                    </div>
                </div>
                <SortableContainer onSortEnd={this.props.onSortEnd}>
                    {typeof this.props.exercices !== 'undefined' && this.props.exercices.map((value, idx) => this.props.isExtended ?
                        <Exercice key={uniqid()} id={this.props.id} exercices={value}
                                  index={idx}
                                  deleteExercice={this.props.deleteExercice}
                                  handleInputExercice={this.props.handleInputExercice}/> :
                        <ExerciceSimplified key={uniqid()} id={this.props.id} exercices={value} index={idx}
                                            idQuestion={idx}
                                            deleteExercice={this.props.deleteExercice}/>)}
                </SortableContainer>
                <button className="button is-info is-medium" onClick={this.props.addExercice}>Nouvel Exercice</button>
            </>
        );
    }
}
