import React, {Component} from 'react'
import InstructionsDisplayer from './InstructionsDisplayer';
import NextButton from "../NextButton/NextButton";
import FooterExam from "../FooterExam/FooterExam";

export default class Instructions extends Component {
    state = {
        dropdownModule: false,
        dropdownClass: false,
    };

    /**
     * trigger the boolean in state with str as input
     * @param str
     * @returns undefined
     */
    triggerDropdown = (str) => () => {
        this.setState({[str]: !this.state[str]})
    };

    /**
     * Put input value in state with name of the input as name of the variable
     * @param {Object} e
     */
    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value});
    };

    render() {
        return (
            <>
                <div className="tile is-child">
                    <InstructionsDisplayer triggerDropdown={this.triggerDropdown}
                                           dropdownModule={this.state.dropdownModule}
                                           handleInput={this.handleInput}
                                           dropdownClass={this.state.dropdownClass}/>
                        <NextButton route={'/newexam/exercices'}/>
                </div>
                <FooterExam/>
            </>
        );
    }
}