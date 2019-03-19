import * as QuestionsRepository from '../../../repository/question';

export const ACTIONS = {
    SET_POST_QUESTION_START: 'QUESTION/SET_POST_QUESTION_START',
    SET_POST_QUESTION_SUCCESS: 'QUESTION/SET_POST_QUESTION_SUCCESS',
    SET_POST_QUESTION_FAILURE: 'QUESTION/SET_POST_QUESTION_FAILURE',
};

export const SET_POST_QUESTION_START = () => ({
    type: ACTIONS.SET_POST_QUESTION_START,
});

export const SET_POST_QUESTION_SUCCESS = questions => ({
    type: ACTIONS.SET_POST_QUESTION_SUCCESS,
    questions,
});

export const SET_POST_QUESTION_FAILURE = err => ({
    type: ACTIONS.SET_POST_QUESTION_FAILURE,
    err,
});

export const postQuestion = (idExam, idQuestion, questionToAdd) => async dispatch => {
    dispatch(SET_POST_QUESTION_START());
    try {
        const question = await QuestionsRepository.postQuestion(idExam, idQuestion, questionToAdd);
        dispatch(SET_POST_QUESTION_SUCCESS(question));
    } catch (err) {
        dispatch(SET_POST_QUESTION_FAILURE(err));
    }
};
