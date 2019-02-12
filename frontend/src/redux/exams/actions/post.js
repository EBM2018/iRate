import * as ExamsRepository from '../../../repository/exams';

export const ACTIONS = {
    SET_POST_EXAM_START: 'EXAMS/SET_POST_EXAM_START',
    SET_POST_EXAM_SUCCESS: 'EXAMS/SET_POST_EXAM_SUCCESS',
    SET_POST_EXAM_FAILURE: 'EXAMS/SET_POST_EXAM_FAILURE',
};

export const SET_POST_EXAM_START = () => ({
    type: ACTIONS.SET_POST_EXAM_START,
});

export const SET_POST_EXAM_SUCCESS = exam => ({
    type: ACTIONS.SET_POST_EXAM_SUCCESS,
    exam,
});

export const SET_POST_EXAM_FAILURE = err => ({
    type: ACTIONS.SET_POST_EXAM_FAILURE,
    err,
});

export const postExam = (examToAdd) => async dispatch => {
    dispatch(SET_POST_EXAM_START());

    try {
        const exam = await ExamsRepository.postExam(examToAdd);
        dispatch(SET_POST_EXAM_SUCCESS(exam));
    } catch (err) {
        dispatch(SET_POST_EXAM_FAILURE(err));
    }
};
