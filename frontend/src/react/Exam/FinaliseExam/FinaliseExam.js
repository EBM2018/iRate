import React, {Component} from 'react'
import FinaliseExamDisplayer from "./FinaliseExamDisplayer";

export default class FinaliseExam extends Component {
    render() {
        return (
            <>
                <FinaliseExamDisplayer toggleFinalise={this.props.toggleFinalise} id={this.props.id}/>
            </>
        );
    }
}
