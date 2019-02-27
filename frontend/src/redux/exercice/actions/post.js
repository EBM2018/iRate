import * as ExercicesRepository from '../../../repository/exercice';

export const ACTIONS = {
    SET_POST_EXERCICE_START: 'EXERCICE/SET_POST_EXERCICE_START',
    SET_POST_EXERCICE_SUCCESS: 'EXERCICE/SET_POST_EXERCICE_SUCCESS',
    SET_POST_EXERCICE_FAILURE: 'EXERCICE/SET_POST_EXERCICE_FAILURE',
};

export const SET_POST_EXERCICE_START = () => ({
    type: ACTIONS.SET_POST_EXERCICE_START,
});

export const SET_POST_EXERCICE_SUCCESS = exercice => ({
    type: ACTIONS.SET_POST_EXERCICE_SUCCESS,
    exercice,
});

export const SET_POST_EXERCICE_FAILURE = err => ({
    type: ACTIONS.SET_POST_EXERCICE_FAILURE,
    err,
});

export const postExercice = (id, exerciceToAdd) => async dispatch => {
    dispatch(SET_POST_EXERCICE_START());
    try {
        const exercice = await ExercicesRepository.postExercice(id, exerciceToAdd);
        dispatch(SET_POST_EXERCICE_SUCCESS(exercice));
    } catch (err) {
        dispatch(SET_POST_EXERCICE_FAILURE(err));
    }
};
