import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CopiesOfExamDisplayer extends Component {
  render() {
    const copies = this.props.copies.length > 0 && this.props.copies.map((copy) => {
      const examId = this.props.examId;
      return (
        <div className="content">
          <Link to={`/correction/${examId}/copy/${copy._id}`} className="content pointer" key={copy._id}>
            <div className="card">
              <header className="card-header">
                <div className="card-header-title has-no-margin-bottom">
                  <div className="title is-5" style={{color: '#FFF'}}>John Doe</div>
                </div>
              </header>
              <div className="card-content">
                <div className="content">
                  <span className="title is-5"> Réponses enregistrés :</span> {copy.answers.length}
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
    return (
      <div>
        {copies}
      </div>
    );
  }
}

export default CopiesOfExamDisplayer;
