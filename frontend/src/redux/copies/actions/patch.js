import * as CopiesRepository from '../../../repository/copies';

export const ACTIONS = {
  SET_PATCH_COPY_START: 'COPIES/SET_PATCH_COPY_START',
  SET_PATCH_COPY_SUCCESS: 'COPIES/SET_PATCH_COPY_SUCCESS',
  SET_PATCH_COPY_FAILURE: 'COPIES/SET_PATCH_COPY_FAILURE'
};

export const SET_PATCH_COPY_START = () => ({
  type: ACTIONS.SET_PATCH_COPY_START
});

export const SET_PATCH_COPY_SUCCESS = copy => ({
  type: ACTIONS.SET_PATCH_COPY_SUCCESS,
  copy
});

export const SET_PATCH_COPY_FAILURE = err => ({
  type: ACTIONS.SET_PATCH_COPY_FAILURE,
  err
});

export const submitCopy = copyToPatch => async dispatch => {
  dispatch(SET_PATCH_COPY_START());
  try {
    const copy = await CopiesRepository.postCopy(copyToPatch);
    dispatch(SET_PATCH_COPY_SUCCESS(copy));
  } catch (err) {
    dispatch(SET_PATCH_COPY_FAILURE(err));
  }
};
