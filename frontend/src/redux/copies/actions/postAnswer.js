import * as CopiesRepository from '../../../repository/copies';

export const ACTIONS = {
  SET_POST_ANSWER_START: 'COPIES/SET_POST_ANSWER_START',
  SET_POST_ANSWER_SUCCESS: 'COPIES/SET_POST_ANSWER_SUCCESS',
  SET_POST_ANSWER_FAILURE: 'COPIES/SET_POST_ANSWER_FAILURE'
};

export const SET_POST_ANSWER_START = () => ({
  type: ACTIONS.SET_POST_ANSWER_START
});

export const SET_POST_ANSWER_SUCCESS = answer => ({
  type: ACTIONS.SET_POST_ANSWER_SUCCESS,
  answer
});

export const SET_POST_ANSWER_FAILURE = err => ({
  type: ACTIONS.SET_POST_ANSWER_FAILURE,
  err
});

export const postAnswer = (
  copyId,
  questionId,
  answerContent
) => async dispatch => {
  dispatch(SET_POST_ANSWER_START());
  try {
    const answer = await CopiesRepository.postAnswer(
      copyId,
      questionId,
      answerContent
    );
    dispatch(SET_POST_ANSWER_SUCCESS(answer));
  } catch (err) {
    dispatch(SET_POST_ANSWER_FAILURE(err));
  }
};
