import React from 'react'
import ExerciceListDisplayer from './ExerciceListDisplayer';
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import {patchExercice} from "../../../redux/exercice/actions/patch";
import {postExercice} from "../../../redux/exercice/actions/post";
import {getExam} from "../../../redux/exams/actions/getSingle";

class ExerciceList extends React.PureComponent {

    static propTypes = {
        id: PropTypes.number,
        exercice: PropTypes.object.isRequired,
        exam: PropTypes.object
    };

    state = {
        exercices: [],
        isExtended: true,
    };

    async componentDidMount() {
        await this.props.fetchExam(this.props.id);
        if (this.state.exercices.length === 0) {
            this.setState({exercices: this.props.exam.exercices});
        }
    };

    /**
     * Put input value in state with name of the input as name of the variable
     * @param {Object} e
     */

    handleInputExercice = async (e) => {
        const { exercices } = this.state;
        const { name, id }= e.target;
        console.log('id ' + id);
        switch (name) {
            case 'title':
                exercices[id].title = e.target.value;
                console.log(exercices);
                this.setState({exercices: exercices});
                console.log(this.state.exercices);
                break;
            case 'estimatedTime':
                exercices[id].estimatedTime = e.target.value;
                this.setState({exercices: exercices});
                break;
        }
    };

    toggleExtend = () => {
        const extend = !this.state.isExtended;
        this.setState({
            isExtended: extend,
        })
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

    saveNewExercice = () => {
        for (let i in this.state.exercices) {
            if (typeof this.state.exercices[i]._id !== 'undefined') {
                this.props.patchExercice(this.props.id, this.state.exercices[i]._id, this.state.exercices);
            } else {
                this.props.fetchNewExercice(this.props.id, this.state.exercices);
            }

        }
    };

    render() {
        return (
            <div>
                <ExerciceListDisplayer addExercice={this.addExercice}
                                       deleteExercice={this.deleteExercice}
                                       exercices={this.state.exercices}
                                       handleInputExercice={this.handleInputExercice}
                                       index={this.props.id}
                                       idExercice={this.state.idExercice}
                                       toggleExtend={this.toggleExtend}
                                       isExtended={this.state.isExtended}
                                       id={this.props.id}/>
                <button onClick={this.saveNewExercice}>Sauvegarder nouvel exercice</button>
            </div>
        );
    }
}


export default connect((state, ownProps) => ({
    exercice: state.exercices.exercices,
    exam: state.exams.exams,
    loading: state.exercices.loading,
    err: state.exercices.errorMessage
}), (dispatch, ownProps) => ({
    patchExercice: (idExam, idExercice, exercice) => dispatch(patchExercice(idExam, idExercice, exercice)),
    fetchNewExercice: (idExam, idExercice, exercice) => dispatch(postExercice(idExam, exercice)),
    fetchExam: (id) => dispatch(getExam(id))
}))(ExerciceList);

