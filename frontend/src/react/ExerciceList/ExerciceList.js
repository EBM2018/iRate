import React from "react";
import ExerciceListDisplayer from "./ExerciceListDisplayer";

export default class ExerciceList extends React.Component {
  state = {
    exercices: [1]
  };

  addExercice = () => {
    const exercices = [...this.state.exercices];
    exercices.push(1);
    this.setState({ exercices });
  };

  render() {
    return (
      <ExerciceListDisplayer
        addExercice={this.addExercice}
        exercices={this.state.exercices}
      />
    );
  }
}
