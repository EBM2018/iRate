import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getExam } from '../../../redux/exams/actions/getSingle';
import Error from '../../utils/Error';
import DisplayExercice from './DisplayExercice';

class DisplayExam extends Component {
  state = {
    displayError: true
  };

  static propTypes = {
    exam: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.fetchExam();
  }

  closeError = () => {
    this.setState({ displayError: false });
  };

  print = () => {
    window.print();
  };

  render() {
    const { id } = this.props.route.match.params;
    const { err, exam } = this.props;
    const { displayError } = this.state;
    return (
      <>
        {err || !exam ? (
          displayError && (
            <Error
              errors={err}
              close={this.closeError}
              status={err.response.status}
            />
          )
        ) : (
          <>
            <header className="box has-background-white-ter">
              <div className="columns">
                <div className="column">
                  <h1 className="title">{exam.title}</h1>
                  <p className="subtitle is-4">
                    Instructions : {exam.instruction}
                  </p>
                  <p>Groupe : {exam.group && exam.group.groupName}</p>
                  <p>
                    {/*  TODO: Waiting for the other group */}
                    Module :
                  </p>
                  <p className="subtitle is-4 pt-1">Rappel: {exam.reminder}</p>
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
                        <span className="tag is-success">
                          {exam.showScale ? "Oui" : "Non"}
                        </span>
                      </div>
                    </div>

                    <div className="control">
                      <div className="tags has-addons">
                        <span className="tag is-dark">temps est.</span>
                        <span className="tag is-success">
                          {exam.estimatedTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <button
                    className="button is-pulled-right is-info no-print"
                    onClick={this.print}
                  >
                    Télécharger la version PDF
                  </button>
                </div>
              </div>
            </header>
            <section id={`exam-${id}`} className="py-2 exam">
              {exam.exercices &&
                exam.exercices.map((exercice) => {
                  return (
                    <DisplayExercice exercice={exercice} key={exercice._id} />
                  );
                })}
            </section>
          </>
        )}
      </>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    exam: state.exams.exams,
    loading: state.exams.loading,
    err: state.exams.errorMessage
  }),
  (dispatch, ownProps) => ({
    fetchExam: () => dispatch(getExam(ownProps.route.match.params.id, true))
  })
)(DisplayExam);
