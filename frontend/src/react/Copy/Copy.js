import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';

import { postCopy } from '../../redux/copies/actions/post';
import { getExam } from '../../redux/exams/actions/getSingle';

import Instructions from './Instructions/Instructions';
import Exercice from './AnswerExercice/Exercice';
import HeaderCopy from './HeaderCopy';
import ConfirmCopy from './ConfirmCopy';

import { session } from '../../helpers/mocks/dataMock';

const COPIES_KEY = 'irate_copies';
class Copy extends Component {
  state = {
    session: {},
    step: 0, // in: 0 (instructions), 1 (exercice), 2 (confirmation)
    exerciceIndex: null,
    startedCopyId: null,
    storage: []
  };

  async componentDidMount() {
    //TODO: When a user will be connected, add a "get copy" from the exam and the author to know which copy is currently writing the user (if he refresh the page)
    await this.props.fetchExam(this.props.route.match.params.id);
    const sessionId = 'e22cc200-c140-4977-9b1d-gvrbbb4156';
    const aSession = await session.classes.find(session => sessionId === session._id);
    this.setState({ session: aSession });
    this.checkLocalStorage();
  };

  checkLocalStorage = () => {
    const copies = this.getValidLocalStorage();
    if (!copies) return;

    this.setState({ storage: copies });
    console.log(copies);

    const copy = copies.find(copy => copy.examId === this.props.route.match.params.id);
    // We found a copy in progress for this exam
    if (copy) {
      console.log(copy);
      this.setState({ startedCopy: copy._id });
    }
  }

  getValidLocalStorage = () => {
    const storage = localStorage.getItem(COPIES_KEY) && JSON.parse(localStorage.getItem(COPIES_KEY));
    if (!storage) return null;

    localStorage.removeItem(COPIES_KEY);

    // Check that each item is valid, else delete it
    for (let i = 0; i < storage.length; i++) {
      const element = storage[i];
      const expTime = element.ttl || null;
      if (expTime && expTime + element.now > Date.now()) {
        delete storage[i];
      }
    }

    localStorage.setItem(COPIES_KEY, JSON.stringify(storage));
    return storage;
  }

  storeLocalCopy = () => {
    const {storage} = this.state;
    const {exam, copy} = this.props;
    // Update the local storage
    storage.push({
      examId: exam._id,
      copyId: copy._id,
      ttl: 3600000, // 1H by default
      now: Date.now()
    });
    localStorage.setItem(COPIES_KEY, JSON.stringify(storage));
  }

  /**
   * @param {Boolean} forceConfirmation: whether we want to force the confirmation
   */
  handleNext = async (forceConfirmation = false) => {
    const { step, exerciceIndex } = this.state;
    const { exercices } = this.props.exam;

    if (step === 0) {
      // Create the copy
      await this.props.createCopy({
        exam: this.props.exam._id
        //TODO: add the userID (logged in) --> Delete the mock data bc database requires an objectId element.
      });
      this.storeLocalCopy();
      this.setState({ exerciceIndex: 0, step: 1 });
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
    const { exerciceIndex } = this.state;
    switch (this.state.step) {
      case 0:
        console.log(copy);
        return (
          <Instructions
            exam={exam}
            session={this.state.session}
            start={this.handleNext}
          />
        );
      case 2:
        return <ConfirmCopy />;
      default:
        return (
          <Exercice
            copyId={copy._id}
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

  render() {
    const { exerciceIndex, step } = this.state;
    const { exercices } = this.props.exam;
    return (
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
          <div className="step-content has-text-centered">
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    exam: state.exams.exams,
    loading: state.exams.loading,
    copy: state.copiesStore.copies
  }),
  dispatch => ({
    fetchExam: id => dispatch(getExam(id)),
    createCopy: copy => dispatch(postCopy(copy))
  })
)(Copy);
