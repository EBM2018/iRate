import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Question from '../Question/Question';
import {sortableContainer, sortableElement} from "react-sortable-hoc";

let uniqid = require('uniqid');

const SortableContainer = sortableContainer(({children}) => {
  return <ul>{children}</ul>;
});

export default class ExerciceDisplayer extends Component {
  static propTypes = {
    handleInputExercice: PropTypes.func.isRequired,
    handleInputQuestion: PropTypes.func,
    deleteQuestion: PropTypes.func.isRequired,
    addQuestion: PropTypes.func.isRequired,
    deleteExercice: PropTypes.func.isRequired,
    question: PropTypes.array.isRequired,
    exercices: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
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
                        <div className="column is-half"><span className="title is-5">Intitulé de l'exercice :</span>
                        </div>
                        <div className="column is-half"><input className="input"
                                                               name="title"
                                                               id={this.props.index}
                                                               defaultValue={this.props.exercices.title === 'undefined' ? '' : this.props.exercices.title}
                                                               onChange={this.props.handleInputExercice}
                                                               type="text"
                                                               placeholder="Epreuve..."/></div>
                    </div>
                </div>
          <SortableContainer onSortEnd={this.onSortEnd}>
          {typeof this.props.question !== 'undefined' && this.props.question !== null && this.props.question.length !== 0 && this.props.question.map((value, idx) => <Question key={uniqid()} id={idx} question={value} index={idx}
                                                             deleteQuestion={this.props.deleteQuestion}
                                                             handleInputQuestion={this.props.handleInputQuestion} />)}
        </SortableContainer>
               <button className="button is-info is-medium" onClick={this.props.addQuestion}>Nouvelle Question</button>
            </div>
        );
    }
}
