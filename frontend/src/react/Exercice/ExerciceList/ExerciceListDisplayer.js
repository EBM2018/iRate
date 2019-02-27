import React from 'react'
import Exercice from '../Exercice';

import PropTypes from 'prop-types';

let uniqid = require('uniqid');

export default class ExerciceListDisplayer extends React.Component {

    static propTypes = {
        deleteExercice: PropTypes.func,
        handleInput: PropTypes.func,
        exercices: PropTypes.array,
        id: PropTypes.number,
        idExercice: PropTypes.number
    };

    render() {
        return (
            <>
                {this.props.exercices.map((value, idx) => <Exercice key={uniqid()} id={idx} exercices={value}
                                                                    index={idx}
                                                                    deleteExercice={this.props.deleteExercice}
                                                                    handleInput={this.props.handleInput}/>)}
                <button className="button is-info is-medium" onClick={this.props.addExercice}>Nouvel Exercice</button>
            </>
        );
    }
}
