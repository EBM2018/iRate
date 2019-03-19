import * as ExerciceRepository from '../../../repository/exercice';

export const ACTIONS = {
    SET_DELETE_EXERCICE_START: 'EXERCICE/SET_DELETE_EXERCICE_START',
    SET_DELETE_EXERCICE_SUCCESS: 'EXERCICE/SET_DELETE_EXERCICE_SUCCESS',
    SET_DELETE_EXERCICE_FAILURE: 'EXERCICE/SET_DELETE_EXERCICE_FAILURE',
};
export const SET_DELETE_EXERCICE_START = () => ({
    type: ACTIONS.SET_DELETE_EXERCICE_START,
});

export const SET_DELETE_EXERCICE_SUCCESS = exercices => ({
    type: ACTIONS.SET_DELETE_EXERCICE_SUCCESS,
    exercices,
});

export const SET_DELETE_EXERCICE_FAILURE = err => ({
    type: ACTIONS.SET_DELETE_EXERCICE_FAILURE,
    err,
});

export const deleteExercice = (idExam, idExercice, exerciceToDelete) => async dispatch => {
    dispatch(SET_DELETE_EXERCICE_START());

    try {
        const exercices = await ExerciceRepository.deleteExercice(idExam, idExercice, exerciceToDelete);
        dispatch(SET_DELETE_EXERCICE_SUCCESS(exercices));
    } catch (err) {
        dispatch(SET_DELETE_EXERCICE_FAILURE(err));
    }
};
