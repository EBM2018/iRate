import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import moment from 'moment';

import {submitCopy} from '../../../redux/copies/actions/patch';
import ConfirmCopyDisplayer from './ConfirmCopyDisplayer';

class ConfirmCopy extends Component {
  state = {
    timer: '',
    timerId: '',
    lessFiveMinutes: false,
    forceClose: false,
    nbrOfAnswers: 0,
    nbrOfQuestions: 0,
  };

  async componentDidMount() {
      const timerId = await setInterval(() => this.getTimeBeforeEnd(), 1000);
      this.setState({timerId});
      this.addNumberOfQuestionsAndAnswers()
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  getTimeBeforeEnd = () => {
    const { exam } = this.props;
    const dateTable = exam.session.date.split('/');
    const endDate = dateTable[2] + '-' + dateTable[0] + '-' + dateTable[1] + "T" + exam.session.endTime;
    const endDateMoment = moment(endDate);
    const timeDiff = endDateMoment.diff(moment(), 'seconds');
    const timer = moment.utc(timeDiff * 1000).format("HH:mm:ss");
    this.setState({timer});
    if(!this.state.lessFiveMinutes && !this.state.forceClose && timeDiff < 360) {
      this.toggleLessFiveMinutes(false)();
    }
  };

  addNumberOfQuestionsAndAnswers = () => {
    const { exam, copy } = this.props;
    const nbrOfQuestions = exam.exercices.reduce((total, exercice) => {
      return total.concat(exercice.questions);
    }, []).length;
    const nbrOfAnswers = copy.answers.length;
    this.setState({nbrOfQuestions,nbrOfAnswers})
  };

  toggleLessFiveMinutes = (forceClose) => () => {
    const {lessFiveMinutes} = this.state;
    this.setState({lessFiveMinutes: !lessFiveMinutes, forceClose});
  };

  render() {
    const { exam, copy} = this.props;
    const { nbrOfQuestions, nbrOfAnswers} = this.state;
    return (
      <ConfirmCopyDisplayer nbrOfQuestions={nbrOfQuestions}
                            nbrOfAnswers={nbrOfAnswers}
                            timer={this.state.timer}
                            lessFiveMinutes={this.state.lessFiveMinutes}
                            toggleLessFiveMinutes={this.toggleLessFiveMinutes}/>
    );
  }
}

export default connect(
  state => ({
    loading: state.exams.loading,
    copy: state.copiesStore.copies
  }),
  dispatch => ({
    confirmCopy: copy => dispatch(submitCopy(copy))
  })
)(ConfirmCopy);
