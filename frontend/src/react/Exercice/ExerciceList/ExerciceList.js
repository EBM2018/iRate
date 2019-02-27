import React from 'react'
import ExerciceListDisplayer from './ExerciceListDisplayer';
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import {postExercice} from "../../../redux/exercice/actions/post";

class ExerciceList extends React.PureComponent {

    static propTypes = {
        id: PropTypes.number,
        exercice: PropTypes.object.isRequired
    };

    state = {
        exercices: [
            {"title": 'coucou', "estimatedTime": '00:00:00'},
        ]
    };
    /**
     * Add a new exercice in the exam creation page.
     */
    addExercice = () => {
        const exercices = [...this.state.exercices];
        exercices.push({"title": '', "estimatedTime": ''});
        this.setState({exercices});
    };

    /**
     * handle inputs to update state value.
     */
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    /**
     * Delete an exercice in the exam creation page.
     *
     * We can't delete the first exercice.
     *
     * @param {Object} v
     */
    deleteExercice = (v) => {
        let idExercice = v.target.value;
        console.log(idExercice);
        if (idExercice === '0') return;
        else {
            const exercices = [...this.state.exercices];
            exercices.splice(idExercice, 1);
            this.setState({exercices});
        }
    };

    saveExercice = () => {
        this.props.fetchExercice(this.props.id, this.state.exercices)
    };

    render() {
        console.log(this.state.exercices);
        return (
            <div>
                <ExerciceListDisplayer addExercice={this.addExercice}
                                       deleteExercice={this.deleteExercice}
                                       exercices={this.state.exercices}
                                       index={this.props.index}
                                       handleInput={this.handleInput}
                                       id={this.props.id}/>
                <button onClick={this.saveExercice}>Save</button>
            </div>
        );
    }
}


export default connect((state, ownProps) => ({
    exercice: state.exercices.exercices,
    loading: state.exercices.loading,
    err: state.exercices.errorMessage
}), (dispatch, ownProps) => ({
    fetchExercice: (id, exercice) => dispatch(postExercice(id, exercice))
}))(ExerciceList);

