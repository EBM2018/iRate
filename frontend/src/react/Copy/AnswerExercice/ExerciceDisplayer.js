import React, {Component} from 'react';
import Question from "./AnswerQuestion/Question";

export default class ExerciceDisplayer extends Component {
    render() {
        const { title,
                questions } = this.props.exercice;
        const {showScale} = this.props;
        return (
            <div>
                <div className="box notification is-info">
                    <div className="title">{title}</div>
                </div>
                {questions.map((question,index) => <Question key={question._id} question={question} showScale={showScale} index={index}/>)}
                <footer>
                    <button onClick={this.props.handleNext}>Next</button>
                    <button>valider</button>
                </footer>
            </div>
        );
    }
}
