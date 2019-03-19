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
        exam: PropTypes.object,
    };

    state = {
        exercices: [],
        isExtended: true,
    };

    componentDidMount() {
        this.props.fetchExam(this.props.route.match.params.id);
        this.setState({exercices: this.props.exam.exercices});
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.exam !== nextProps.exam) {
            this.setState({exercices: nextProps.exam.exercices});
        }
    }

    /**
     * Put input value in state with name of the input as name of the variable
     * @param {Object} e
     */

    handleInputExercice = async (e) => {
        const {exercices} = this.state;
        const {name, id} = e.target;
        switch (name) {
            case 'title':
                exercices[id].title = e.target.value;
                this.setState({exercices: exercices});
                break;
            case 'estimatedTime':
                exercices[id].estimatedTime = e.target.value;
                this.setState({exercices: exercices});
                break;
            default:
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
    addExercice = async () => {
        let exercices = this.state.exercices;
        let maxOrder = 0;
        if (exercices !== null) {
            maxOrder = Math.max(...exercices.map(qu => qu.order));
            if (maxOrder === -Infinity) {
                exercices = [{"title": "Nouvel Exercice", "estimatedTime": '', "order": 1, "question": []}];
                maxOrder = 0;
            } else {
                exercices.push({
                    "title": "Nouvel Exercice",
                    "estimatedTime": '',
                    "order": maxOrder + 1,
                    "question": []
                });
            }
        }
        this.setState({exercices: exercices});
        let order = maxOrder + 1
        await this.props.fetchNewExercice(this.props.route.match.params.id, {
            "title": "Nouvel Exercice",
            "order": order,
            "question": []
        });
        await this.props.fetchExam(this.props.route.match.params.id);
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
        this.props.fetchDeleteExercice(this.props.route.match.params.id, this.state.exercices[idExercice]._id, this.state.exercices[idExercice])
        const exercices = [...this.state.exercices];
        exercices.splice(idExercice, 1);
        this.setState({exercices});
    };

    saveNewExercice = () => {
        for (let i in this.state.exercices) {
            if (typeof this.state.exercices[i]._id !== 'undefined') {
                this.props.patchExercice(this.props.route.match.params.id, this.state.exercices[i]._id, this.state.exercices[i]);
            }
        }
    };

    onSortEnd = async ({oldIndex, newIndex}) => {
        let exercices = this.state.exercices;
        let departure = oldIndex + 1;
        let arrival = newIndex + 1;
        console.log(oldIndex);
        console.log(newIndex);

        console.log(exercices);
        if (arrival === departure) return;
        if (arrival > departure) {
            for (let i in exercices) {
                console.log(exercices[i].order);
                if (exercices[i].order <= arrival && exercices[i].order > departure && exercices[i].order !== departure) {
                    exercices[i].order = exercices[i].order - 1;
                }
            }
            exercices[oldIndex].order = newIndex;

        } else {
            console.log('else');
            for (let i in exercices) {
                if (exercices[i].order >= arrival && exercices[i].order < departure && exercices[i].order !== departure) {
                    console.log(exercices[i].order);
                    console.log(i);
                    // exercices[i].order = exercices[i].order - 1;
                }
            }
            exercices[oldIndex].order = newIndex + 1;
        }
        for (let i in exercices) {
            if (typeof exercices[i]._id !== 'undefined') {
                await this.props.patchExercice(this.props.route.match.params.id, exercices[i]._id, exercices[i]);
            }
        }
        this.setState({exercices: exercices});
        await this.props.fetchExam(this.props.route.match.params.id);
    };


    render() {
        return (
            <div>
                <ExerciceListDisplayer addExercice={this.addExercice}
                                       deleteExercice={this.deleteExercice}
                                       exercices={this.state.exercices}
                                       handleInputExercice={this.handleInputExercice}
                                       onSortEnd={this.onSortEnd}
                                       index={this.props.id}
                                       idExercice={this.state.idExercice}
                                       toggleExtend={this.toggleExtend}
                                       isExtended={this.state.isExtended}
                                       id={this.props.route.match.params.id}/>
                <div className="section">
                    <button className="button is-info is-medium" onClick={this.saveNewExercice}>Sauvegarder l'examen
                    </button>
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

