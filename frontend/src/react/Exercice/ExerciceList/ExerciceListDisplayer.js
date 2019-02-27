import React from 'react'
import Exercice from '../Exercice';

import PropTypes from 'prop-types';

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
                {this.props.exercices.map((value, idx) => <Exercice key={uniqid()} id={idx} exercices={value}
                                                                    index={idx}
                                                                    deleteExercice={this.props.deleteExercice}
                                                                    handleInputExercice={this.props.handleInputExercice}/>)}
                <button className="button is-info is-medium" onClick={this.props.addExercice}>Nouvel Exercice</button>
            </>
        );
    }
}
