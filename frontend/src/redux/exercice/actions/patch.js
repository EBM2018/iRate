import * as ExerciceRepository from '../../../repository/exercice';

export const ACTIONS = {
    SET_PATCH_EXERCICE_START: 'EXERCICE/SET_PATCH_EXERCICE_START',
    SET_PATCH_EXERCICE_SUCCESS: 'EXERCICE/SET_PATCH_EXERCICE_SUCCESS',
    SET_PATCH_EXERCICE_FAILURE: 'EXERCICE/SET_PATCH_EXERCICE_FAILURE',
};
export const SET_PATCH_EXERCICE_START = () => ({
    type: ACTIONS.SET_PATCH_EXERCICE_START,
});

export const SET_PATCH_EXERCICE_SUCCESS = exercices => ({
    type: ACTIONS.SET_PATCH_EXERCICE_SUCCESS,
    exercices,
});

export const SET_PATCH_EXERCICE_FAILURE = err => ({
    type: ACTIONS.SET_PATCH_EXERCICE_FAILURE,
    err,
});

export const patchExercice = (idExam, idExercice, exerciceToPatch) => async dispatch => {
    dispatch(SET_PATCH_EXERCICE_START());

    try {
        const exercices = await ExerciceRepository.patchExercice(idExam, idExercice, exerciceToPatch);
        dispatch(SET_PATCH_EXERCICE_SUCCESS(exercices));
    } catch (err) {
        dispatch(SET_PATCH_EXERCICE_FAILURE(err));
    }
};
