import React from 'react'
import ExerciceListDisplayer from './ExerciceListDisplayer';
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import {postExercice} from "../../../redux/exercice/actions/post";

class ExerciceList extends React.PureComponent {

    static propTypes = {
        id: PropTypes.number,
        exercice: PropTypes.object.isRequired,
    };

    state = {
        exercices: [
            {"title": '', "estimatedTime": ''},
        ],
    };

    /**
     * Put input value in state with name of the input as name of the variable
     * @param {Object} e
     */
    handleInputExercice = (e) => {
        let exercices = this.state.exercices;
        let name = e.target.name;
        let id = e.target.id;
        console.log(e.target.id);
        switch (name) {
            case 'title':
                exercices[id].title = e.target.value;
                this.setState({exercices: exercices});
                break;
            case 'estimatedTime':
                exercices[id].estimatedTime = e.target.value;
                this.setState({exercices: exercices});
                break;
        }
        console.log(this.state.exercices);

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
        for(let i in this.state.exercices)
        {
            console.log(this.state.exercices[i]);
            this.props.fetchExercice(this.props.id, this.state.exercices[i]);
        }
    };

    render() {
        return (
            <div>
                <ExerciceListDisplayer addExercice={this.addExercice}
                                       deleteExercice={this.deleteExercice}
                                       exercices={this.state.exercices}
                                       handleInputExercice={this.handleInputExercice}
                                       index={this.props.index}
                                       idExercice={this.state.idExercice}
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

