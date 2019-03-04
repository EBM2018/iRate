import React from 'react'
import ExerciceListDisplayer from './ExerciceListDisplayer';
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import {patchExercice} from "../../../redux/exercice/actions/patch";
import {postExercice} from "../../../redux/exercice/actions/post";
import {deleteExercice} from "../../../redux/exercice/actions/delete";
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
        await this.props.fetchExam(this.props.route.match.params.id);
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
        console.log(id);
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
        let maxOrder = 0;
        if (exercices !== null) {
            maxOrder = Math.max(...exercices.map(qu => qu.order));
        } else {
            maxOrder = 0;
        }
        exercices.push({"title": '', "estimatedTime": '', "order" : maxOrder + 1, "question": []});
        this.setState({exercices: exercices});
        this.props.fetchNewExercice(this.props.route.match.params.id, {"title": "Nouvel Exercice", "order" : maxOrder + 1, "question": []});

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
        console.log(this.state.exercices);
        console.log(idExercice);
        this.props.fetchDeleteExercice(this.props.route.match.params.id, this.state.exercices[idExercice]._id, this.state.exercices[idExercice])
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
                this.props.patchExercice(this.props.route.match.params.id, this.state.exercices[i]._id, this.state.exercices[i]);
            } else {
                this.props.fetchNewExercice(this.props.route.match.params.id, this.state.exercices[i]);
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
                                       id={this.props.route.match.params.id}/>
                <div className="section">
                <button className="button is-info is-medium" onClick={this.saveNewExercice}>Sauvegarder l'examen</button>
                </div>
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
    fetchNewExercice: (idExam, exercice) => dispatch(postExercice(idExam, exercice)),
    fetchExam: (id) => dispatch(getExam(id)),
    fetchDeleteExercice: (idExam, idExercice, exercice) => dispatch(deleteExercice(idExam, idExercice, exercice))
}))(ExerciceList);

