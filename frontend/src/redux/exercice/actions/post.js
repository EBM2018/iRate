import * as ExercicesRepository from '../../../repository/exercice';

export const ACTIONS = {
<<<<<<< HEAD
    SET_POST_EXERCICE_START: 'EXERCICE/SET_POST_EXERCICE_START',
    SET_POST_EXERCICE_SUCCESS: 'EXERCICE/SET_POST_EXERCICE_SUCCESS',
    SET_POST_EXERCICE_FAILURE: 'EXERCICE/SET_POST_EXERCICE_FAILURE',
=======
    SET_POST_EXERCICE_START: 'EXERCICE/SET_POST_EXAM_START',
    SET_POST_EXERCICE_SUCCESS: 'EXERCICE/SET_POST_EXAM_SUCCESS',
    SET_POST_EXERCICE_FAILURE: 'EXERCICE/SET_POST_EXAM_FAILURE',
>>>>>>> fetch master
};

export const SET_POST_EXERCICE_START = () => ({
    type: ACTIONS.SET_POST_EXERCICE_START,
});

<<<<<<< HEAD
export const SET_POST_EXERCICE_SUCCESS = exercice => ({
    type: ACTIONS.SET_POST_EXERCICE_SUCCESS,
    exercice,
=======
export const SET_POST_EXERCICE_SUCCESS = exam => ({
    type: ACTIONS.SET_POST_EXERCICE_SUCCESS,
    exam,
>>>>>>> fetch master
});

export const SET_POST_EXERCICE_FAILURE = err => ({
    type: ACTIONS.SET_POST_EXERCICE_FAILURE,
    err,
});

<<<<<<< HEAD
export const postExercice = (id, exerciceToAdd) => async dispatch => {
    dispatch(SET_POST_EXERCICE_START());

    try {
        const exercice = await ExercicesRepository.postExercice(id, exerciceToAdd);
=======
export const postExercice = (exerciceToAdd) => async dispatch => {
    dispatch(SET_POST_EXERCICE_START());

    try {
        const exercice = await ExercicesRepository.postExercice(exerciceToAdd);
>>>>>>> fetch master
        dispatch(SET_POST_EXERCICE_SUCCESS(exercice));
    } catch (err) {
        dispatch(SET_POST_EXERCICE_FAILURE(err));
    }
};
