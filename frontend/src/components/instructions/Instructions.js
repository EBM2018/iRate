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


    triggerDropdown = (str) => () => {
        this.setState({[str]: !this.state[str]})
    };

    render() {
        return (
            <InstructionsDisplayer triggerDropdown={this.triggerDropdown}
                                   dropdownModule={this.state.dropdownModule}
                                   dropdownClass={this.state.dropdownClass}/>
        );
    }
}
