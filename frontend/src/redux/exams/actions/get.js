import * as ExamsRepository from '../../../repository/exams';

export const ACTIONS = {
    SET_GET_EXAMS_START: 'EXAMS/SET_GET_EXAMS_START',
    SET_GET_EXAMS_SUCCESS: 'EXAMS/SET_GET_EXAMS_SUCCESS',
    SET_GET_EXAMS_FAILURE: 'EXAMS/SET_GET_EXAMS_FAILURE',
};
export const SET_GET_EXAMS_START = () => ({
    type: ACTIONS.SET_GET_EXAMS_START,
});

export const SET_GET_EXAMS_SUCCESS = exams => ({
    type: ACTIONS.SET_GET_EXAMS_SUCCESS,
    exams,
});

export const SET_GET_EXAMS_FAILURE = err => ({
    type: ACTIONS.SET_GET_EXAMS_FAILURE,
    err,
});

export const getExams = () => async dispatch => {
    dispatch(SET_GET_EXAMS_START());

    try {
        const exams = await ExamsRepository.getExams();
        dispatch(SET_GET_EXAMS_SUCCESS(exams));
    } catch (err) {
        dispatch(SET_GET_EXAMS_FAILURE(err));
    }
};
