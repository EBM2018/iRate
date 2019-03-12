import React, {Component} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {getExamsForStudent} from '../../../redux/exams/actions/get';
import CopyListDisplayer from "./CopyListDisplayer";
import {sortExamsBySessionDate} from "../../../helpers/exam";

class CopyList extends Component {
    //TODO Mapper uniquement les exams dont l'élève fait partie du groupe: exemple, l'élève est dans EBM, on lui mappe ses exams uniquement pas ceux des autres groupes.
     state = {
        exams: {},
    };

    async componentDidMount() {
        await this.props.fetchExams();
        if(this.props.exams) {
            let exams = this.props.exams.filter((exam) => {return exam.isFinalised}).map((exam) => {
                if(exam.session) {
                    exam.isOver = moment().isAfter(exam.session.date.split("/")[2] + "-" +  exam.session.date.split("/")[0] + "-" + exam.session.date.split("/")[1]+"T"+exam.session.endTime);
                }
                return exam;
            });
            exams = sortExamsBySessionDate(exams);
            this.setState({exams});
        }
    }

    render() {
        return (
            <>
                {
                    this.props.loading &&
                    `loading`
                }
                <CopyListDisplayer exams={this.state.exams}/>
            </>
        );
    }
}

export default connect(state => ({
    exams: state.exams.exams,
    loading: state.exams.loading,
}), dispatch => ({
    // TODO: handle the user(student) login state and access to his own exams
    fetchExams: (user) => dispatch(getExamsForStudent(user))
}))(CopyList);