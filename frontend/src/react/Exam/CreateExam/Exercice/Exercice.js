import React from 'react';
import ExerciceDisplayer from './ExerciceDisplayer';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { postQuestion } from '../../../../redux/question/actions/post';
import { deleteQuestion } from '../../../../redux/question/actions/delete';
import { patchQuestion } from '../../../../redux/question/actions/patch';
import { getExam } from '../../../../redux/exams/actions/getSingle';
import { arrayMove } from 'react-sortable-hoc';

class Exercice extends React.Component {
  static propTypes = {
    exercices: PropTypes.object,
    handleInputExercice: PropTypes.func,
    saveNewExercice: PropTypes.func,
    saveNewExerciceEnter: PropTypes.func,
    id: PropTypes.string,
    index: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      question: {},
      questions: props.exercices.questions
    };
  }

  componentDidMount() {}

  /**
   * Add a new question related to an exercice.
   */
  addQuestion = async () => {
    let questions = this.state.questions;
    let maxOrder = questions ? questions.length : 0;
    await this.props.fetchNewQuestion(
      this.props.exam._id,
      this.props.exercices._id,
      {
        title: 'Nouvelle Question',
        order: maxOrder + 1,
        scale: 0
      }
    );
    await this.props.fetchExam(this.props.exam._id);
    this.setState({
      questions: this.props.exercices.questions
    });
  };

  moveQuestion = async ({ oldIndex, newIndex, collection }) => {
    const questions = arrayMove(this.state.questions, oldIndex, newIndex);
    const orderedQuestions = questions.map((q, i) => {
      return {
        ...q,
        order: i
      };
    });
    await this.setState({
      questions: orderedQuestions
    });
    await this.state.questions.map(async question => {
      await this.props.fetchPatchQuestion(
        this.props.exam._id,
        this.props.exercices._id,
        question._id,
        question
      );
    });
    await this.props.fetchExam(this.props.exam._id);
  };

  /**
   * Put input value in state with name of the input as name of the variable
   * @param {Object} e
   */
  handleInputQuestion = e => {
    const question = this.props.exercices.questions.find(
      q => q._id === e.target.id
    );
    const questionCopy = { ...question };
    const { name } = e.target;
    switch (name) {
      case 'questionTitle':
        questionCopy.title = e.target.value;
        this.setState({ question: questionCopy });
        break;
      case 'questionScale':
        questionCopy.scale = e.target.value;
        this.setState({ question: questionCopy });

        break;
      case 'questionCorrection':
        questionCopy.correction = e.target.value;
        this.setState({ question: questionCopy });
        break;
      case 'questionEstimatedTime':
        let time = e.target.value * 60;
        questionCopy.estimatedTime = time;
        this.setState({ question: questionCopy });
        break;
      default:
        break;
    }
  };

  /**
   * Delete a question related to an exercice.
   *
   * We can't delete the first question.
   *
   * @param {Object} v
   */
  deleteQuestion = async v => {
    const question = this.props.exercices.questions.find(
      q => q._id === v.target.value
    );
    const idQuestion = question._id;
    let idExo = this.props.exercices._id;
    const listOfQuestions = this.props.exercices.questions.filter(
      q => q._id !== question._id
    );
    this.setState({ question: listOfQuestions });
    await this.props.fetchDeleteQuestion(this.props.id, idExo, idQuestion);
    await this.props.fetchExam(this.props.id);
  };

  saveNewQuestion = async e => {
    const question = this.state.question;
    await this.props.fetchPatchQuestion(
      this.props.id,
      this.props.exercices._id,
      question._id,
      question
    );
    await this.props.fetchExam(this.props.id);
  };

  saveQuestionEnter = async e => {
    if (e.keyCode === 13 || e.keyCode === 9) {
      const question = this.state.question;
      await this.props.fetchPatchQuestion(
        this.props.id,
        this.props.exercices._id,
        question._id,
        question
      );
    }
    await this.props.fetchExam(this.props.id);
  };

  render() {
    return (
      <div>
        <ExerciceDisplayer
          handleInputQuestion={this.handleInputQuestion}
          handleInputExercice={this.props.handleInputExercice}
          saveNewExercice={this.props.saveNewExercice}
          saveNewExerciceEnter={this.props.saveNewExerciceEnter}
          addQuestion={this.addQuestion}
          exercices={this.props.exercices}
          deleteQuestion={this.deleteQuestion}
          moveQuestion={this.moveQuestion}
          deleteExercice={this.props.deleteExercice}
          saveQuestion={this.saveNewQuestion}
          saveQuestionEnter={this.saveQuestionEnter}
          question={this.state.questions}
          index={this.props.index}
          id={this.props.id}
        />
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    exercice: state.exercices.exercices,
    exam: state.exams.exams,
    loading: state.exercices.loading,
    err: state.exercices.errorMessage
  }),
  (dispatch, ownProps) => ({
    fetchNewQuestion: (idExam, idExercice, questionToAdd) =>
      dispatch(postQuestion(idExam, idExercice, questionToAdd)),
    fetchDeleteQuestion: (idExam, idExercice, idQuestion, questionToAdd) =>
      dispatch(deleteQuestion(idExam, idExercice, idQuestion, questionToAdd)),
    fetchPatchQuestion: (idExam, idExercice, idQuestion, questionToAdd) =>
      dispatch(patchQuestion(idExam, idExercice, idQuestion, questionToAdd)),
    fetchExam: id => dispatch(getExam(id))
  })
)(Exercice);
