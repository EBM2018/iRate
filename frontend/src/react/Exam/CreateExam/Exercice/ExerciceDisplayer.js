import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Question from '../Question/Question';
import {sortableContainer} from "react-sortable-hoc";

const SortableContainer = sortableContainer(({children}) => {
    return <ul>{children}</ul>;
});

export default class ExerciceDisplayer extends Component {
    static propTypes = {
        handleInputExercice: PropTypes.func.isRequired,
        handleInputQuestion: PropTypes.func,
        saveNewExercice: PropTypes.func,
        saveQuestion: PropTypes.func,
        saveQuestionEnter: PropTypes.func,
        moveQuestion: PropTypes.func,
        deleteQuestion: PropTypes.func.isRequired,
        addQuestion: PropTypes.func.isRequired,
        deleteExercice: PropTypes.func.isRequired,
        question: PropTypes.array,
        exercices: PropTypes.array.isRequired,
        id: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired,
        displayCross: PropTypes.bool
    };

    render() {
        return (
            <div className="section">
                <div className="box notification is-info">
                    <div className="content">
                        <div className="columns">
                            <div className="column is-11">
                                <p className="title">Exercice {this.props.index + 1}</p>
                            </div>
                            <div className="column is-1">
                                <button className="delete is-large" value={this.props.index}
                                        onClick={this.props.deleteExercice}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="columns">
                        <div className="column is-6"><span className="title is-5">Intitulé de l'exercice :</span>
                        </div>
                        <div className="column is-5"><input className="input"
                                                            name="title"
                                                            id={this.props.index}
                                                            onBlur={this.props.saveNewExercice}
                                                            onKeyDown={this.props.saveNewExercice}
                                                            defaultValue={this.props.exercices.title === 'undefined' ? '' : this.props.exercices.title}
                                                            onChange={this.props.handleInputExercice}
                                                            type="text"
                                                            placeholder="Epreuve..."/></div>
                        <div className="column is-1" style={{display: this.props.displayCross ? 'block' : 'none'}}>
                            <span className="icon has-text-success is-medium">
                                <i className="fas fa-check-square"/>
                            </span>
                        </div>
                        <div className="column is-1" style={{display: this.props.displayCross ? 'none' : 'block'}}>
                            <span className="icon has-text-danger is-medium">
                                <i className="fas fa-ban"/>
                            </span>
                        </div>
                    </div>
                </div>
                <SortableContainer onSortEnd={this.props.moveQuestion}>
                    {typeof this.props.question !== 'undefined' && this.props.question !== null && this.props.question.length !== 0 && this.props.question.map((value, idx) =>
                        <Question key={idx} id={value._id} question={value} idQuestion={idx}
                                  index={idx}
                                  deleteQuestion={this.props.deleteQuestion}
                                  handleInputQuestion={this.props.handleInputQuestion}
                                  displayCross={this.props.displayCross[idx]}
                                  saveQuestion={this.props.saveQuestion}
                                  saveQuestionEnter={this.props.saveQuestionEnter}
                        />)}
                </SortableContainer>
                <button className="button is-info is-medium" onClick={this.props.addQuestion}>Nouvelle Question</button>
            </div>
        );
    }
}
