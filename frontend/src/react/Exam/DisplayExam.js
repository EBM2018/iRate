import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getExam} from '../../redux/exams/actions/getSingle';
import Error from '../utils/Error';
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
    };

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
        return(
            <>
                {(err||!exam)  ?
                    (displayError && <Error errors={err} close={this.closeError} status={err.response.status}/>)
                : (
                    <>
                    <header className="box has-background-white-ter">
                        <div className="columns">
                            <div className="column is-three-quarters">
                                <h1 className="title">{exam.title}</h1>
                                <p className="subtitle is-4">
                                    Instructions: {exam.instruction}
                                </p>
                                <p className="subtitle is-4">
                                    Rappel: {exam.reminder}
                                </p>
                            </div>
                            <div className="column">
                                <button className="button is-pulled-right is-info no-print" onClick={this.print}>Télécharger la version PDF</button>
                            </div>
                        </div>
                    </header>
                    <section id={`exam-${id}`} className="py-2 exam">
                        { exam.exercices && exam.exercices.map((exercice, index) => {
                            return (
                                <DisplayExercice exercice={exercice} key={exercice._id} />
                            )
                        })}
                    </section>
                    </>
                )}
            </>
        )
    }

}

export default connect((state, ownProps) => ({
    exam: state.exams.exams,
    loading: state.exams.loading,
    err: state.exams.errorMessage
}), (dispatch, ownProps) => ({
    fetchExam: () => dispatch(getExam(ownProps.route.match.params.id))
}))(DisplayExam);