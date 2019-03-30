import React from 'react';
import ExerciceListDisplayer from './ExerciceListDisplayer';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { patchExercice } from '../../../../../redux/exercice/actions/patch';
import { postExercice } from '../../../../../redux/exercice/actions/post';
import { deleteExercice } from '../../../../../redux/exercice/actions/delete';
import { getExam } from '../../../../../redux/exams/actions/getSingle';
import { Redirect } from 'react-router-dom';
import FooterExam from '../../FooterExam/FooterExam';

import { arrayMove } from 'react-sortable-hoc';
class ExerciceList extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string,
    exercice: PropTypes.object.isRequired,
    exam: PropTypes.object
  };

  state = {
    exercices: [],
    isExtended: true,
    redirectExams: false
  };

  componentDidMount() {
    if (this.state.exercices.length === 0) {
      this.props.fetchExam(this.props.id);
      this.setState({ exercices: this.props.exam.exercices });
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (this.props.exam !== nextProps.exam) {
      this.setState({ exercices: nextProps.exam.exercices });
    }
  }

  /**
   * Put input value in state with name of the input as name of the variable
   * @param {Object} e
   */

  handleInputExercice = e => {
    const { exercices } = this.state;
    const { name, id } = e.target;
    switch (name) {
      case 'title':
        exercices[id].title = e.target.value;
        this.setState({ exercices: exercices });
        break;
      default:
        break;
    }
  };

  toggleExtend = () => {
    const extend = !this.state.isExtended;
    this.setState({
      isExtended: extend
    });
  };

  /**
   * Add a new exercice in the exam creation page.
   */
  addExercice = async () => {
    let exercices = this.state.exercices;
    let maxOrder = 0;
    if (exercices !== null) {
      maxOrder = Math.max(...exercices.map(qu => qu.order));
      if (maxOrder === -Infinity) {
        exercices = [
          {
            title: 'Nouvel Exercice',
            estimatedTime: '',
            order: 1,
            question: []
          }
        ];
        maxOrder = 0;
      } else {
        exercices.push({
          title: 'Nouvel Exercice',
          estimatedTime: '',
          order: maxOrder + 1,
          question: []
        });
      }
    }
    this.setState({ exercices: exercices });
    let order = maxOrder + 1;
    await this.props.fetchNewExercice(this.props.id, {
      title: 'Nouvel Exercice',
      order: order,
      question: []
    });
    await this.props.fetchExam(this.props.id);
  };

  saveExam = () => {
    this.setState({ redirectExams: true });
  };

  /**
   * Delete an exercice in the exam creation page.
   *
   * We can't delete the first exercice.
   *
   * @param {Object} v
   */
  deleteExercice = async v => {
    const exercice = this.props.exam.exercices.find(
      q => q._id === v.target.value
    );
    const exerciceId = exercice._id;
    const listOfExercices = this.props.exam.exercices.filter(
      e => e._id !== exercice._id
    );
    this.setState({ exercices: listOfExercices });
    await this.props.fetchDeleteExercice(this.props.id, exerciceId, exercice);
    await this.props.fetchExam(this.props.id);
  };

  saveNewExerciceEnter = e => {
    if (e.keyCode === 13 || e.keyCode === 9) {
      for (let i in this.state.exercices) {
        if (typeof this.state.exercices[i]._id !== 'undefined') {
          this.props.patchExercice(
            this.props.id,
            this.state.exercices[i]._id,
            this.state.exercices[i]
          );
        }
      }
    }
  };

  saveNewExercice = e => {
    for (let i in this.state.exercices) {
      if (typeof this.state.exercices[i]._id !== 'undefined') {
        this.props.patchExercice(
          this.props.id,
          this.state.exercices[i]._id,
          this.state.exercices[i]
        );
      }
    }
  };

  onSortEnd = async ({ oldIndex, newIndex }) => {
    const exercices = arrayMove(this.state.exercices, oldIndex, newIndex);
    const orderedExercices = exercices.map((e, i) => {
      return {
        ...e,
        order: i
      };
    });
    await this.setState({
      exercices: orderedExercices
    });
    await this.state.exercices.map(async exercice => {
      await this.props.patchExercice(this.props.id, exercice._id, exercice);
    });
  };

  render() {
    return (
      <div>
        <ExerciceListDisplayer
          addExercice={this.addExercice}
          deleteExercice={this.deleteExercice}
          saveNewExercice={this.saveNewExercice}
          saveNewExerciceEnter={this.saveNewExerciceEnter}
          exercices={this.state.exercices}
          handleInputExercice={this.handleInputExercice}
          onSortEnd={this.onSortEnd}
          index={this.props.id}
          idExercice={this.state.idExercice}
          toggleExtend={this.toggleExtend}
          isExtended={this.state.isExtended}
          id={this.props.id}
        />
        <div className="section">
          <button className="button is-info is-medium" onClick={this.saveExam}>
            Sauvegarder l'examen
          </button>
          {this.state.redirectExams ? <Redirect to={'/exams/'} /> : null}
        </div>
        {this.state.exercices ? (
          <FooterExam exercices={this.state.exercices} />
        ) : null}
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
    patchExercice: (idExam, idExercice, exercice) =>
      dispatch(patchExercice(idExam, idExercice, exercice)),
    fetchNewExercice: (idExam, exercice) =>
      dispatch(postExercice(idExam, exercice)),
    fetchExam: id => dispatch(getExam(id)),
    fetchDeleteExercice: (idExam, idExercice, exercice) =>
      dispatch(deleteExercice(idExam, idExercice, exercice))
  })
)(ExerciceList);
