import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CopiesOfExamDisplayer extends Component {
  render () {
    const copies = this.props.copies.length > 0 && this.props.copies.map((copy) => {
      const examId = this.props.examId;
      return (
      <Link to={`/correction/${examId}/copy/${copy._id}`} className="content pointer" key={copy._id} onClick={this.props.showCopy(copy._id)}>
        <div className="card">
          <header className="card-header">
            <div className="card-header-title has-no-margin-bottom">
              <div className="title is-5" style={{color: '#FFF'}}>Author: </div> {copy._id} 
            </div>
          </header>
          <div className="card-content">
            <div className="content">
              <span className="title is-5"> Answers :</span> {copy.answers.length}
            </div>
          </div>
        </div>
      </Link>
      )
    });
    return (
      <div>
        {copies}
      </div>
    )
  }
}

export default CopiesOfExamDisplayer;