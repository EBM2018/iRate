import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getExamsForStudent} from '../../redux/exams/actions/get';

class CopyList extends Component {
    /* state = {
        shouldFinaliseRender: false,
        didChecked: false,
        examId: '',
    }; */

    async componentDidMount() {
        await this.props.fetchExams();
        if(this.props.exams) {
            this.setState({exams: this.props.exams});
        }
    }

    render() {
        return (
            <>
                {
                    this.props.loading &&
                    `loading`
                }
                <p>{JSON.stringify(this.props.exams)}</p>
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
