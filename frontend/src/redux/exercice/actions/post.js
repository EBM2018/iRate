import * as ExercicesRepository from '../../../repository/exercice';

export const ACTIONS = {
    SET_POST_EXERCICE_START: 'EXERCICE/SET_POST_EXAM_START',
    SET_POST_EXERCICE_SUCCESS: 'EXERCICE/SET_POST_EXAM_SUCCESS',
    SET_POST_EXERCICE_FAILURE: 'EXERCICE/SET_POST_EXAM_FAILURE',
};

export const SET_POST_EXERCICE_START = () => ({
    type: ACTIONS.SET_POST_EXERCICE_START,
});

export const SET_POST_EXERCICE_SUCCESS = exam => ({
    type: ACTIONS.SET_POST_EXERCICE_SUCCESS,
    exam,
});

export const SET_POST_EXERCICE_FAILURE = err => ({
    type: ACTIONS.SET_POST_EXERCICE_FAILURE,
    err,
});

export const postExercice = (exerciceToAdd) => async dispatch => {
    dispatch(SET_POST_EXERCICE_START());

    try {
        const exercice = await ExercicesRepository.postExercice(exerciceToAdd);
        dispatch(SET_POST_EXERCICE_SUCCESS(exercice));
    } catch (err) {
        dispatch(SET_POST_EXERCICE_FAILURE(err));
    }
};
