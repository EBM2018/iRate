import React, {Component} from 'react'
import connect from 'react-redux/es/connect/connect';

import {postCopy} from '../../redux/copies/actions/post';
import {getExam} from '../../redux/exams/actions/getSingle';

import Instructions from './Instructions/Instructions';
import Exercice from './AnswerExercice/Exercice';
import HeaderCopy from './HeaderCopy';
import ConfirmCopy from './ConfirmCopy';
import {session} from '../../helpers/mocks/dataMock';

class Copy extends Component {

  state = {
    session: {},
    step: 0, // in: 0 (instructions), 1 (exercice), 2 (confirmation)
    exerciceIndex: null
  };

  async componentDidMount() {
    await this.props.fetchExam(this.props.route.match.params.id);
    const sessionId = 'e22cc200-c140-4977-9b1d-gvrbbb4156';
    const aSession = await session.classes.find(session => sessionId === session._id);
    this.setState({session: aSession});
  }

  /**
   * @param {Boolean} forceConfirmation: whether we want to force the confirmation
   */
  handleNext = async (forceConfirmation = false) => {
    const {step, exerciceIndex} = this.state;
    const {exercices} = this.props.exam;

    if (step === 0) {
      // Create the copy
      await this.props.createCopy({
        exam: this.props.exam._id,
        author: 12 // TODO: add the userID (logged in)
      });
      this.setState({exerciceIndex: 0, step: 1});
    } else {
      this.setState({
        step: ((exerciceIndex === exercices.length - 1) || forceConfirmation) ? 2 : 1,
        exerciceIndex: exerciceIndex+1
      });
    }
  }

  renderContent() {
    const {exam, copy} = this.props;
    const {exerciceIndex} = this.state;
    switch (this.state.step) {
      case 0:
        return (
          <Instructions exam={exam}
                        session={this.state.session}
                        start={this.handleNext}/>
        );
      case 2:
          return (
            <ConfirmCopy />
          );
      default:
        return (
              <Exercice
                exercice={exam.exercices[exerciceIndex]}
                showScale={exam.showScale}
                nextExercice={this.handleNext}
                copyId={copy && copy._id}
                confirm={() => this.handleNext(true)}/>
            );
    }
  }

  /**
   * Move to a given exercice index
   */
  navigate(index) {
    this.setState({exerciceIndex: index})
  }

  render() {
    const {exerciceIndex, step} = this.state;
    const {exercices} = this.props.exam;
    return (
      <div className="tile is-child">
        { exercices &&
          <HeaderCopy
            step={step}
            confirm={() => this.handleNext(true)}
            currentExercice={exerciceIndex}
            exercices={exercices}
            navigate={ (index) => this.navigate(index)}/>
        }
        <div className="steps-content">
            <div className="step-content has-text-centered">
              { this.renderContent() }
            </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  exam: state.exams.exams,
  loading: state.exams.loading,
  copy: state.copiesStore.copies
}), dispatch => ({
  fetchExam:(id) => dispatch(getExam(id)),
  createCopy: (copy) => dispatch(postCopy(copy))
}))(Copy)
