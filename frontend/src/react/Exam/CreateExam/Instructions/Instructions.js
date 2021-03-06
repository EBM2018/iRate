import React, {Component} from 'react';
import InstructionsDisplayer from './InstructionsDisplayer';
import {group} from '../../../../helpers/mocks/group';

import {Redirect} from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import {postExam} from '../../../../redux/exams/actions/post';
import {triggerActive, triggerInactive} from '../../../../helpers/css';
import axios from 'axios';
import moment from 'moment';

class Instructions extends Component {
  state = {
    dropdownGroup: {
      value: 'Choisir un groupe',
      _id: '',
    },
    dropdownSession: {
      value: 'Choisir une séance',
      _id: '',
    },
    groupErr: false,
  };

  /**
   * get the groups/sessions from url params or all of them if no params
   * @return undefined
   */
  async componentDidMount() {
    //TODO When we'll have some routes from TEAMY Group --> API Call goes here.
    const {groupId, sessionId} = this.props.route.match.params;
    if (groupId && sessionId) {
      if (groupId === group._id) {
        const session = group.classes.find(session => {
          return sessionId === session._id;
        });
        this.setState({
          dropdownSession: {
            _id: session._id,
            value:
              session.date +
              ' from ' +
              session.startTime +
              ' to ' +
              session.endTime,
          },
          dropdownGroup: {
            _id: group._id,
            value: group.name,
          },
        });
      } else {
        //TODO Handle not found id
      }
    } else {
      //TODO Here I create the constant group so that we know where to put the API Call when we don't have id params.
      const callResponse = await axios.get('https://teamy.ebm.nymous.io/api/groups');
      if (callResponse.status === 200) {
        const {data} = callResponse;
        const groups = data.map(group => {
          let classes = group.seances/*.filter((seance) => {
            return moment(seance.finishingDate).isAfter();
          })*/.map((seance) => {
            return {
              _id: seance._id,
              label: seance.label,
              dateDisplay: moment(seance.startingDate).format('DD/MM/YYYY [de] HH:mm [à] ') + moment(seance.finishingDate).format('HH:mm'),
            };
          });
          return {
            _id: group._id,
            name: group.groupName,
            classes: classes,
          };
        });
        this.setState({groups});
      } else {
        this.setState({groupErr: true});
      }
    }
  }

  /**
   * Put input value in state with name of the input as name of the variable
   * @param {Object} e
   */
  handleInput = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  /**
   * Send an exam to the API and redirect to /newexam/:examId/exercices if success
   * @return undefined
   */
  addExamAndRedirect = async () => {
    const {
      title,
      reminder,
      instruction,
      dropdownSession,
      dropdownGroup,
    } = this.state;
    const examData = {
      title,
      reminder,
      instruction,
      group: dropdownGroup._id,
      session: dropdownSession._id,
    };

    await this.props.createExam(examData);
    if (this.props.exams.exam._id) {
      this.setState({
        idRedirect: this.props.exams.exam._id,
        redirectExercices: true,
      });
    }
  };

  handleSelect = (select, id, dropdownType) => () => {
    this.setState({
      [dropdownType]: {
        value: select,
        _id: id,
      },
    });
    if (dropdownType === 'dropdownGroup') {
      this.setState({
        dropdownSession: {
          value: 'Choisir la séance',
          _id: '',
        },
      });
    }
  };

  render() {
    return (
      <>
        <div className="tile is-child">
          <InstructionsDisplayer dropdownGroup={this.state.dropdownGroup}
                                 dropdownSession={this.state.dropdownSession}
                                 groups={this.state.groups}
                                 session={this.state.session}
                                 handleInput={this.handleInput}
                                 triggerActive={triggerActive}
                                 triggerInactive={triggerInactive}
                                 groupErr={this.state.groupErr}
                                 handleSelect={this.handleSelect}/>
          <button className="box button is-medium"
                  onClick={this.addExamAndRedirect}>Suivant</button>
          {this.state.redirectExercices ? (<Redirect to={`/newexam/${this.state.idRedirect}/exercices`}/>) : null}
        </div>
      </>
    );
  }
}

export default connect(
  state => ({
    exams: state.exams.exams,
    loading: state.exams.loading,
  }),
  dispatch => ({
    createExam: examData => dispatch(postExam(examData)),
  }),
)(Instructions);
