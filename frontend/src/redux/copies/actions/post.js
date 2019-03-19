import * as CopiesRepository from '../../../repository/copies';

export const ACTIONS = {
  SET_POST_COPY_START: 'EXAMS/SET_POST_COPY_START',
  SET_POST_COPY_SUCCESS: 'EXAMS/SET_POST_COPY_SUCCESS',
  SET_POST_COPY_FAILURE: 'EXAMS/SET_POST_COPY_FAILURE'
};

export const SET_POST_COPY_START = () => ({
  type: ACTIONS.SET_POST_COPY_START
});

export const SET_POST_COPY_SUCCESS = copy => ({
  type: ACTIONS.SET_POST_COPY_SUCCESS,
  copy
});

export const SET_POST_COPY_FAILURE = err => ({
  type: ACTIONS.SET_POST_COPY_FAILURE,
  err
});

export const postCopy = copyToAdd => async dispatch => {
  dispatch(SET_POST_COPY_START());
  try {
    const copy = await CopiesRepository.postCopy(copyToAdd);
    dispatch(SET_POST_COPY_SUCCESS(copy));
  } catch (err) {
    dispatch(SET_POST_COPY_FAILURE(err));
  }
};
