import * as ExamsRepository from '../../../repository/exams';

export const ACTIONS = {
    SET_GET_EXAM_START: 'EXAMS/SET_GET_EXAM_START',
    SET_GET_EXAM_SUCCESS: 'EXAMS/SET_GET_EXAM_SUCCESS',
    SET_GET_EXAM_FAILURE: 'EXAMS/SET_GET_EXAM_FAILURE',
};
export const SET_GET_EXAM_START = () => ({
    type: ACTIONS.SET_GET_EXAM_START,
});

export const SET_GET_EXAM_SUCCESS = exam => ({
    type: ACTIONS.SET_GET_EXAM_SUCCESS,
    exam,
});

export const SET_GET_EXAM_FAILURE = err => ({
    type: ACTIONS.SET_GET_EXAM_FAILURE,
    err,
});

export const getExam = (id, withTS = false) => async dispatch => {
    dispatch(SET_GET_EXAM_START());
    try {
        const exam = await ExamsRepository.getExam(id, withTS);
        if (!exam) return;
        dispatch(SET_GET_EXAM_SUCCESS(exam));
    } catch (err) {
        dispatch(SET_GET_EXAM_FAILURE(err));
    }
};
