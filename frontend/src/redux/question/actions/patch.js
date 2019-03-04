import * as QuestionRepository from '../../../repository/question';

export const ACTIONS = {
    SET_PATCH_QUESTION_START: 'QUESTION/SET_PATCH_QUESTION_START',
    SET_PATCH_QUESTION_SUCCESS: 'QUESTION/SET_PATCH_QUESTION_SUCCESS',
    SET_PATCH_QUESTION_FAILURE: 'QUESTION/SET_PATCH_QUESTION_FAILURE',
};
export const SET_PATCH_QUESTION_START = () => ({
    type: ACTIONS.SET_PATCH_QUESTION_START,
});

export const SET_PATCH_QUESTION_SUCCESS = questions => ({
    type: ACTIONS.SET_PATCH_QUESTION_SUCCESS,
    questions,
});

export const SET_PATCH_QUESTION_FAILURE = err => ({
    type: ACTIONS.SET_PATCH_QUESTION_FAILURE,
    err,
});

export const patchQuestion = (idExam, idExercice, idQuestion, questionToAdd) => async dispatch => {
    dispatch(SET_PATCH_QUESTION_START());

    try {
        const questions = await QuestionRepository.patchQuestion(idExam, idExercice, idQuestion, questionToAdd);
        dispatch(SET_PATCH_QUESTION_SUCCESS(questions));
    } catch (err) {
        dispatch(SET_PATCH_QUESTION_FAILURE(err));
    }
};
