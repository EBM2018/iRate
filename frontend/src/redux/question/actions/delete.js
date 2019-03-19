import * as QuestionRepository from '../../../repository/question';

export const ACTIONS = {
    SET_DELETE_QUESTION_START: 'QUESTION/SET_DELETE_QUESTION_START',
    SET_DELETE_QUESTION_SUCCESS: 'QUESTION/SET_DELETE_QUESTION_SUCCESS',
    SET_DELETE_QUESTION_FAILURE: 'QUESTION/SET_DELETE_QUESTION_FAILURE',
};
export const SET_DELETE_QUESTION_START = () => ({
    type: ACTIONS.SET_DELETE_QUESTION_START,
});

export const SET_DELETE_QUESTION_SUCCESS = questions => ({
    type: ACTIONS.SET_DELETE_QUESTION_SUCCESS,
    questions,
});

export const SET_DELETE_QUESTION_FAILURE = err => ({
    type: ACTIONS.SET_DELETE_QUESTION_FAILURE,
    err,
});

export const deleteQuestion = (idExam, idQuestion, questionToDelete) => async dispatch => {
    dispatch(SET_DELETE_QUESTION_START());

    try {
        const questions = await QuestionRepository.deleteQuestion(idExam, idQuestion, questionToDelete);
        dispatch(SET_DELETE_QUESTION_SUCCESS(questions));
    } catch (err) {
        dispatch(SET_DELETE_QUESTION_FAILURE(err));
    }
};
