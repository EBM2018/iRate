import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class HeaderCopy extends Component {

    static propTypes = {
        exercices: PropTypes.array.isRequired,
        currentExercice: PropTypes.number,
        navigate: PropTypes.func,
        confirm: PropTypes.func,
        step: PropTypes.number
    };

    state = {
        defaultStepItemClass: "step-item"
    }

    /**
     * @return {String}
     */
    getClassEx = (index) => {
        const {defaultStepItemClass} = this.state;
        if (this.props.currentExercice === index)
            return `${defaultStepItemClass} is-active pointer`;
        else if (this.props.currentExercice > index)
            return `${defaultStepItemClass} is-completed pointer`;

        return `${defaultStepItemClass}`;
    }

    render() {
        const {currentExercice, exercices, step} = this.props;
        const {defaultStepItemClass} = this.state;
        return (
            <div>
                <div className="steps">
                    <div className={ step === 1 ? `is-completed ${defaultStepItemClass}` : `is-active ${defaultStepItemClass}` }>
                        <div className="step-marker">0</div>
                        <div className="step-details">
                            <p className="step-title">Introduction</p>
                        </div>
                    </div>
                    {exercices.map((exercice, index) =>
                        (<div
                            className={this.getClassEx(index)}
                            key={index}
                            onClick={() => currentExercice && currentExercice > index && this.props.navigate(index)}>
                                <div className="step-marker">{index+1}</div>
                                <div className="step-details">
                                    <p className="step-title">Exercice {index+1}</p>
                                </div>
                        </div>)
                    )}
                    <div className={ step === 2 ? `pointer is-active ${defaultStepItemClass}` : `pointer ${defaultStepItemClass}` }
                        onClick={this.props.confirm}>
                        <div className="step-marker">{exercices.length+1}</div>
                        <div className="step-details">
                            <p className="step-title">Confirmation</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
