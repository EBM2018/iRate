import React, {Component} from 'react'
import InstructionsDisplayer from "./InstructionsDisplayer";

export default class Instructions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownModule: false,
            dropdownClass: false,
        }
    }

//trigger the boolean in state with str as input
//reusable function
    triggerDropdown = (str) => () => {
        this.setState({[str]: !this.state[str]})
    };

//Put input value in state with name of the input as name of the variable
//Reusable function
    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value});
    };

    render() {
        return (
            <InstructionsDisplayer triggerDropdown={this.triggerDropdown}
                                   dropdownModule={this.state.dropdownModule}
                                   handleInput={this.handleInput}
                                   dropdownClass={this.state.dropdownClass}/>
        );
    }
}
