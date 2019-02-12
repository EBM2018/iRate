import React, {Component} from 'react'
import ExerciceList from "../ExerciceList/ExerciceList";
import Instructions from "../Instructions/Instructions";
import NextButton from "./NextButton";

export default class CreateExam extends Component {

  render() {
    return (
      <>
        <div className="tile is-parent">
          <div className="tile is-child">
            <Instructions/>
            <NextButton onClick={this.onClick}/>
            <ExerciceList/>
          </div>
        </div>
      </>
    );
  }
}
