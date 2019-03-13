import React, {Component} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Exercice extends Component {

    static propTypes = {
        exercice: PropTypes.object.isRequired,
        nextExercice: PropTypes.func.isRequired
    };

    handleNext = () => {
        // TODO: save along the way
        this.props.nextExercice();
    }

    render() {
        return (<div>
            <section></section>
            <footer>
                <button onClick={this.handleNext}>Next</button>
                <button>valider</button>
            </footer>
        </div>)
    }
}

export default connect(state => ({
    exams: state.exams.exams,
    loading: state.exams.loading,
}), dispatch => ({
    //post method goes here
}))(Exercice);
