import * as CopiesRepository from '../../../repository/copies';

export const ACTIONS = {
  SET_PATCH_ANSWER_START: 'COPIES/SET_PATCH_ANSWER_START',
  SET_PATCH_ANSWER_SUCCESS: 'COPIES/SET_PATCH_ANSWER_SUCCESS',
  SET_PATCH_ANSWER_FAILURE: 'COPIES/SET_PATCH_ANSWER_FAILURE'
};

export const SET_PATCH_ANSWER_START = () => ({
  type: ACTIONS.SET_PATCH_ANSWER_START
});

export const SET_PATCH_ANSWER_SUCCESS = copy => ({
  type: ACTIONS.SET_PATCH_ANSWER_SUCCESS,
  copy
});

export const SET_PATCH_ANSWER_FAILURE = err => ({
  type: ACTIONS.SET_PATCH_ANSWER_FAILURE,
  err
});

export const patchAnswer = (
  copyId,
  questionId,
  answerId,
  answerContent
) => async dispatch => {
  dispatch(SET_PATCH_ANSWER_START());
  try {
    const answer = await CopiesRepository.patchAnswer(
      copyId,
      questionId,
      answerId,
      answerContent
    );
    dispatch(SET_PATCH_ANSWER_SUCCESS(answer));
  } catch (err) {
    dispatch(SET_PATCH_ANSWER_FAILURE(err));
  }
};
