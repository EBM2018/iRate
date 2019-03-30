import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import moment from 'moment';

import ConfirmCopyDisplayer from './ConfirmCopyDisplayer';
import {patchCopy} from '../../../repository/copies';
import {Redirect} from 'react-router';

const COPIES_KEY = 'irate_copies';

class ConfirmCopy extends Component {
  state = {
    timer: '',
    timerId: '',
    lessFiveMinutes: false,
    forceClose: false,
    nbrOfAnswers: 0,
    nbrOfQuestions: 0,
    redirect: false,
  };

  async componentDidMount() {
    const timerId = await setInterval(() => this.getTimeBeforeEnd(), 1000);
    this.setState({timerId});
    this.addNumberOfQuestionsAndAnswers();
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  getTimeBeforeEnd = () => {
    const {exam} = this.props;
    const endDateMoment = moment(exam.session.finishingDate);
    const timeDiff = endDateMoment.diff(moment(), 'seconds');
    const timer = moment.utc(timeDiff * 1000).format('HH:mm:ss');
    this.setState({timer});
    if (!this.state.lessFiveMinutes && !this.state.forceClose && timeDiff < 360) {
      this.toggleLessFiveMinutes(false)();
    }
  };

  addNumberOfQuestionsAndAnswers = () => {
    const {exam, copy} = this.props;
    const nbrOfQuestions = exam.exercices.reduce((total, exercice) => {
      return total.concat(exercice.questions);
    }, []).length;
    const nbrOfAnswers = copy.answers.length;
    this.setState({nbrOfQuestions, nbrOfAnswers});
  };

  toggleLessFiveMinutes = (forceClose) => () => {
    const {lessFiveMinutes} = this.state;
    this.setState({lessFiveMinutes: !lessFiveMinutes, forceClose});
  };

  confirmCopy = async () => {
    const {copy} = this.props;
    copy.submissionTime = moment().format("YYYY-MM-DDTHH:mm:ss");
    const data = await patchCopy(copy);
    if (data) {
      localStorage.removeItem(COPIES_KEY);
      this.setState({redirect: true});
    }
  };

  render() {
    const {nbrOfQuestions, nbrOfAnswers, redirect} = this.state;
    return (
      <>
        <ConfirmCopyDisplayer nbrOfQuestions={nbrOfQuestions}
                              nbrOfAnswers={nbrOfAnswers}
                              timer={this.state.timer}
                              lessFiveMinutes={this.state.lessFiveMinutes}
                              confirmCopy={this.confirmCopy}
                              toggleLessFiveMinutes={this.toggleLessFiveMinutes}/>
        {redirect ? <Redirect to={'/copies'}/> : null}
      </>
    );
  }
}

export default connect(
  state => ({
    loading: state.exams.loading,
    copy: state.copiesStore.copies,
  }),
)(ConfirmCopy);
