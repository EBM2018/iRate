import React, {Component} from 'react'
import connect from 'react-redux/es/connect/connect';

import {getExam} from '../../redux/exams/actions/getSingle';

import Instructions from './Instructions';
import Exercice from './AnswerExercice/Exercice';
import HeaderCopy from './HeaderCopy';
import ConfirmCopy from './ConfirmCopy';
import {session} from '../../helpers/mocks/dataMock';

class Copy extends Component {

  state = {
    session: {},
    step: 0, // in: 0 (instructions), 1 (exercice), 2 (confirmation)
    exerciceIndex: ''
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
  handleNext = (forceConfirmation = false) => {
    const {step, exerciceIndex} = this.state;
    const {exercices} = this.props.exam;
    if (step === 0) {
      this.setState({exerciceIndex: 0, step: 1});
    } else {
      this.setState({
        step: ((exerciceIndex === exercices.length - 1) || forceConfirmation) ? 2 : 1,
        exerciceIndex: exerciceIndex+1
      });
    }
  };

  renderContent() {
    const {exam} = this.props;
    const {exerciceIndex} = this.state;
    switch (this.state.step) {
      case 0:
        return (
          <Instructions title={exam.title}
                        reminders={exam.reminder}
                        instructions={exam.instruction}
                        session={this.state.session}
                        start={this.handleNext}/>
        );
      case 2:
          return (
            <ConfirmCopy />
          );
      default:
        return (
              <Exercice exercice={exam.exercices[exerciceIndex]} showScale={exam.showScale} nextExercice={this.handleNext} confirm={() => this.handleNext(true)}/>
            );
    }
  }

  navigate(index) {
    this.setState({exerciceIndex: index})
  }

  render() {
    const {step, exerciceIndex} = this.state;
    const {exercices} = this.props.exam;
    return (
      <div className="tile is-child">
        { (step === 1) &&
          <HeaderCopy
            currentExercice={exerciceIndex}
            exercices={exercices}
            navigate={ (index) => this.navigate(index)}/>
        }
        { this.renderContent() }
      </div>
    );
  }
}

export default connect(state => ({
  exam: state.exams.exams,
  loading: state.exams.loading,
}), dispatch => ({
  fetchExam:(id) => dispatch(getExam(id))
}))(Copy)
