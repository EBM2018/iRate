import React, {Component} from 'react'
import ExerciceList from "../Exercice/ExerciceList/ExerciceList";

export default class CreateExam extends Component {
    render() {
        return (
            <>
                <div className="tile is-parent">
                    <div className="tile is-child">
                        <ExerciceList id={this.props.route.match.params.examId}/>
                    </div>
                </div>
            </>
        );
    }
}
