import React, { Component } from 'react';
import {getExam } from '../../repository/exams';
import {getCopy} from '../../repository/copies';
import DisplayExerciceWithAnswer from './DisplayExerciceWithAnswer';
import { Link } from 'react-router-dom';
class CopyCorrection extends Component {
  state = {
    exam: {},
    copy: false,
  };
  constructor(props) {
    super(props);
    this.addExamToState(this.props.route.match.params.examId);
    this.addCopyToState(this.props.route.match.params.copyId)
  }
  async addExamToState(examId) {
    const exam = await getExam(examId, true);
    this.setState({exam});
  };
  async addCopyToState(copyId) {
    const copy = await getCopy(copyId);
    this.setState({copy: copy});
  };

  render () {
    const { exam } = this.state;
    return (
      <div>
        <div className="content">
          <Link to={`/correction/${this.state.exam._id}`}>
            <div className="button is-outlined tooltip" data-tooltip="revenir à la liste des copies">
              <i className="fas fa-arrow-left"/>
            </div>
          </Link>
        </div>
        <header className="box has-background-white-ter">
          <div className="columns">
              <div className="column">
                  <h1 className="title">{exam.title}</h1>
                  <p className="subtitle is-4">
                      Instructions : {exam.instruction}
                  </p>
                  <p>
                      Groupe : {exam.group && exam.group.groupName}
                  </p>
                  <p>
                      {/*  TODO: Waiting for the other group */}
                      Module :
                  </p>
                  <p className="subtitle is-4 pt-1">
                      Rappel: {exam.reminder}
                  </p>
              </div>
              <div className="column">
                  <div className="field is-grouped">
                      <div className="control">
                          <div className="tags has-addons">
                              <span className="tag is-dark">barème</span>
                              <span className="tag is-success">{exam.scale}</span>
                          </div>
                      </div>

                      <div className="control">
                          <div className="tags has-addons">
                              <span className="tag is-dark">affichage barème</span>
                              <span className="tag is-success">{exam.showScale ? 'Oui' : 'Non'}</span>
                          </div>
                      </div>

                      <div className="control">
                          <div className="tags has-addons">
                              <span className="tag is-dark">temps est.</span>
                              <span className="tag is-success">{exam.estimatedTime}</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="column">
                  <button className="button is-pulled-right is-info no-print" onClick={window.print}>Télécharger la version PDF</button>
              </div>
          </div>
      </header>
      <section id={`exam-${exam._id}`} className="py-2 exam">
                        { exam.exercices && this.state.copy && exam.exercices.map((exercice, index) => {
                            return (
                                <div key={exercice._id} className="content">
                                  <DisplayExerciceWithAnswer exercice={exercice} copy={this.state.copy} />
                                </div>
                            )
                        })}
      </section>

      </div>
    )
  }
}

export default CopyCorrection
