import React from 'react'
import Exercice from '../Exercice';
import PropTypes from 'prop-types';
import ExerciceSimplified from "../ExerciceSimplified/ExerciceSimplified";

let uniqid = require('uniqid');

export default class ExerciceListDisplayer extends React.Component {

    static propTypes = {
        deleteExercice: PropTypes.func,
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
                               className="switch is-rounded is-info" checked={this.props.isExtended}
                               onChange={this.props.toggleExtend}/>
                        <label htmlFor="switchRoundedInfo">Passer en mode simplifié</label>
                    </div>
                </div>
                {this.props.exercices.map((value, idx) => this.props.isExtended ?
                    <Exercice key={uniqid()} id={idx} exercices={value}
                              index={idx}
                              deleteExercice={this.props.deleteExercice}
                              handleInputExercice={this.props.handleInputExercice}/> :
                    <ExerciceSimplified key={uniqid()} id={idx} exercices={value} index={idx}
                                        deleteExercice={this.props.deleteExercice}/>)}

                <button className="button is-info is-medium" onClick={this.props.addExercice}>Nouvel Exercice</button>
            </>
        );
    }
}
