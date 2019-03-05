import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";
import {getExam} from "../../../redux/exams/actions/getSingle";
import InstructionsCopyDisplayer from "./InstructionsCopyDisplayer";
import InstructionsDisplayer from "../../Instructions/InstructionsDisplayer";
import {triggerActive, triggerInactive} from "../../../helpers/activeClass";
import {Redirect} from "react-router-dom";
//import PropTypes from 'prop-types';

class InstructionsCopy extends Component {
  static PropTypes = {};

  async componentDidMount() {
    // id en dur ?
    const id = '5c7cfb433cf0582c2548bc8d';
    const data = await this.props.fetchExam(id);
    console.log(this.props);
  }

  render() {
    return (
      <>
        <div className="tile is-child">
          <InstructionsCopyDisplayer />
        </div>
      </>
    );
  }
}

export default connect(state => ({
  exams: state.exams.exams,
  loading: state.exams.loading,
}), dispatch => ({
  fetchExam:(id) => dispatch(getExam(id))
}))(InstructionsCopy)

/*<button className="box button is-medium" onClick={this.addExamAndRedirect}>Suivant</button>
          {this.state.redirectExercices ? <Redirect to={`/newexam/${this.state.idRedirect}/exercices`}/> : null}*/
