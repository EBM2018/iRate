import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";
import {getExam} from "../../../redux/exams/actions/getSingle";
import InstructionsCopyDisplayer from "./InstructionsCopyDisplayer";
import {dataMock, session} from "../../../helpers/mocks/dataMock";

class InstructionsCopy extends Component {
  static propTypes = {};

  state = {
    session: {},
  };

  async componentDidMount() {
    const exam = dataMock;
    const id = '5c7cfb433cf0582c2548bc8d';
    const data = await this.props.fetchExam(id);
    const sessionId = 'e22cc200-c140-4977-9b1d-gvrbbb4156';
    const aSession = await session.classes.find((session) => {return sessionId === session._id});
    this.setState({session: aSession, exam});
  }

  render() {
    return (
      <>
        <div className="tile is-child">
          <InstructionsCopyDisplayer exam={dataMock} session={session}/>
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
