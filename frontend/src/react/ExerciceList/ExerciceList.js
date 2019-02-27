import React from 'react'
import ExerciceListDisplayer from './ExerciceListDisplayer';
import PropTypes from "prop-types";

export default class ExerciceList extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number,
  };

  state = {
    exercices: [
      {"exerciceTitle": '', "estimatedTime": ''},
    ],
    isExtended: true,
  };
  /**
   * Add a new exercice in the exam creation page.
   */
  addExercice = () => {
    const exercices = [...this.state.exercices];
    exercices.push({"exerciceTitle": '', "estimatedTime": ''});
    this.setState({exercices});
  };

  /**
   * Delete an exercice in the exam creation page.
   *
   * We can't delete the first exercice.
   *
   * @param {Object} v
   */
  deleteExercice = (v) => {
    let idExercice = v.target.value;
    console.log(idExercice);
    if (idExercice === '0') return;
    else {
      const exercices = [...this.state.exercices];
      exercices.splice(idExercice, 1);
      this.setState({exercices});
    }
  };

  toggleExtend = () => {
    const extend = !this.state.isExtended;
    console.log(!this.state.isExtended);
    this.setState({
      isExtended: extend,
    })
  };

  render() {
    return (
      <ExerciceListDisplayer addExercice={this.addExercice}
                             deleteExercice={this.deleteExercice}
                             exercices={this.state.exercices}
                             index={this.props.index}
                             id={this.props.id}
                             toggleExtend={this.toggleExtend}
                             isExtended={this.state.isExtended}/>
    );
  }
}
