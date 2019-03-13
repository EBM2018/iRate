import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class FooterCopy extends Component {

    static propTypes = {
        exercices: PropTypes.array.isRequired,
        clickExercice: PropTypes.func,
        currentExercice: PropTypes.number.isRequired,
        confirm: PropTypes.func
    };

    render() {
        const {currentExercice} = this.props;
        const exercices = this.props.exercices.slice(0, currentExercice+1).map(
            (ex, index) => (
                <li key={index}>
                    <a href="#/" className={currentExercice === index ? 'active' : ''}>{index+1}</a>
                </li>)
        );
        return (
            <>
                <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
                    <ul>
                        {exercices}
                    </ul>
                </nav>
                <button onClick={this.props.confirm}>Passer à la confirmation</button>
            </>
        )
    }
}
