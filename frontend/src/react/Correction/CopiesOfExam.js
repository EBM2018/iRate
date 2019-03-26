import React, { Component } from 'react'
import {getCopiesOfExam } from '../../repository/copies';
import CopiesOfExamDisplayer from './CopiesOfExamDisplayer'
class CopiesOfExam extends Component {
  state = {
    copies: []
  }
  componentDidMount() {
    const examId = this.props.route.match.params.examId;
    this.addExamsToState(examId);
  }
  async addExamsToState(examId) {
    const copies = await getCopiesOfExam(examId);
    console.log(copies);
    this.setState({copies: copies})
  }
  showCopy = (copyId) => () => {
    console.log(copyId);
  }
  render () {
    return (
      <CopiesOfExamDisplayer 
        copies={this.state.copies}
        showCopy={this.showCopy}
        examId={this.props.route.match.params.examId}>
      </CopiesOfExamDisplayer>
    )
  }
}

export default CopiesOfExam;