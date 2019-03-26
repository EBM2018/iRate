import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';

import { postCopy } from '../../redux/copies/actions/post';
import { getExam } from '../../redux/exams/actions/getSingle';
import { getCopy } from '../../redux/copies/actions/getSingle';

import Instructions from './Instructions/Instructions';
import Exercice from './AnswerExercice/Exercice';
import HeaderCopy from './HeaderCopy';
import ConfirmCopy from './ConfirmCopy';

import Error from '../utils/Error';

import { session } from '../../helpers/mocks/dataMock';

const COPIES_KEY = 'irate_copies';
class Copy extends Component {
  state = {
    session: {},
    step: 0, // in: 0 (instructions), 1 (exercice), 2 (confirmation)
    exerciceIndex: null,
    startedCopy: null,
    displayError: true
  };

  async componentDidMount() {
    //TODO: When a user will be connected, add a "get copy" from the exam and the author to know which copy is currently writing the user (if he refresh the page)
    await this.props.fetchExam(this.props.route.match.params.id);
    const sessionId = 'e22cc200-c140-4977-9b1d-gvrbbb4156';
    const aSession = await session.classes.find(session => sessionId === session._id);
    this.setState({ session: aSession });
    await this.checkLocalStorage();
  };

  checkLocalStorage = async () => {
    const copies = this.getValidLocalStorage();
    if (!copies) return;

    const copy = copies.find(x => x.examId === this.props.route.match.params.id);

    // We found a copy in progress for this exam
    if (copy) {
      this.setState({ startedCopy: copy });
      await this.props.fetchCopy(copy.copyId);
    }
  }

  getValidLocalStorage = () => {
    const storage = localStorage.getItem(COPIES_KEY) && JSON.parse(localStorage.getItem(COPIES_KEY));
    if (!storage || storage.length === 0 || !storage.some(el => el !== null)) return null;

    // Check that each item is valid, else delete it
    for (let i = 0; i < storage.length; i++) {
      const element = storage[i];
      const expTime = element.ttl || null;
      if (expTime && expTime + element.now < Date.now()) {
        delete storage[i];
      }
    }

    storage ? localStorage.setItem(COPIES_KEY, JSON.stringify(storage)) : localStorage.removeItem(COPIES_KEY);
    return (storage.length > 0 ? storage : null);
  }

  storeLocalCopy = () => {
    const storage = this.getValidLocalStorage() || [];
    const {exam, copy} = this.props;
    // Update the local storage
    storage.push({
      examId: exam._id,
      copyId: copy._id,
      ttl: 14400000, // 4H by default
      now: Date.now()
    });
    localStorage.setItem(COPIES_KEY, JSON.stringify(storage));
  }

  updateLocalCopy = () => {
    const storage = this.getValidLocalStorage();
    const index = storage.findIndex(x => x.examId === this.props.route.match.params.id);
    storage[index].now = Date.now();
    localStorage.setItem(COPIES_KEY, JSON.stringify(storage));
  }

  /**
   * @param {Boolean} forceConfirmation: whether we want to force the confirmation
   */
  handleNext = async (forceConfirmation = false) => {
    const { step, exerciceIndex, startedCopy } = this.state;
    const { exercices } = this.props.exam;

    if (step === 0) {
      // Create the copy
      if (!startedCopy) {
        await this.props.createCopy({
          exam: this.props.exam._id
          //TODO: add the userID (logged in) --> Delete the mock data bc database requires an objectId element.
        });
        if (!this.props.err) this.storeLocalCopy();
      } else {
        this.updateLocalCopy();
      }
      if (!this.props.err) this.setState({ exerciceIndex: 0, step: 1 });
    } else {
      this.setState({
        step:
          exerciceIndex === exercices.length - 1 || forceConfirmation ? 2 : 1,
        exerciceIndex: exerciceIndex + 1
      });
    }
  };

  renderContent() {
    const { exam, copy } = this.props;
    const { exerciceIndex, startedCopy } = this.state;
    switch (this.state.step) {
      case 0:
        return (
          <Instructions
            exam={exam}
            startedCopy={startedCopy}
            session={this.state.session}
            start={this.handleNext}
          />
        );
      case 2:
        return <ConfirmCopy />;
      default:
        return (
          <Exercice
            copy={copy}
            exercice={exam.exercices[exerciceIndex]}
            showScale={exam.showScale}
            nextExercice={this.handleNext}
            confirm={() => this.handleNext(true)}
          />
        );
    }
  }

  /**
   * Move to a given exercice index
   */
  navigate(index) {
    this.setState({ exerciceIndex: index });
  }

  closeError = () => {
    this.setState({displayError: false});
  }

  render() {
    const { exerciceIndex, step, displayError } = this.state;
    const { exercices } = this.props.exam;
    const {err} = this.props;
    return (
      <>
        {err && (
          displayError && (
            <Error
              errors={err}
              close={this.closeError}
              status={err.response.status}
            />
          )
        )}
        <div className="tile is-child">
          {exercices && (
            <HeaderCopy
              step={step}
              confirm={() => this.handleNext(true)}
              currentExercice={exerciceIndex}
              exercices={exercices}
              navigate={index => this.navigate(index)}
            />
          )}
          <div className="steps-content">
            <div className="step-content has-text-centered py-2">
              {this.renderContent()}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(
  state => ({
    exam: state.exams.exams,
    loading: state.exams.loading,
    copy: state.copiesStore.copies,
    err: state.copiesStore.errorMessage
  }),
  dispatch => ({
    fetchExam: id => dispatch(getExam(id)),
    fetchCopy: copyId => dispatch(getCopy(copyId)),
    createCopy: copy => dispatch(postCopy(copy))
  })
)(Copy);
