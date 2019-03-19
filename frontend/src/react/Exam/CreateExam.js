import React, {Component} from 'react'
import ExerciceList from "../Exercice/ExerciceList/ExerciceList";
import FooterExam from "../FooterExam/FooterExam";

export default class CreateExam extends Component {
    render() {
        console.log(this.props);
        return (
            <>
                <div className="tile is-parent">
                    <div className="tile is-child">
                        <ExerciceList id={this.props.route.match.params.examId}/>
                    </div>
                </div>
                <FooterExam/>
            </>
        );
    }
}
