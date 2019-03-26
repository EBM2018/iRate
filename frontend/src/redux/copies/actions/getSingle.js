import * as CopiesRepository from "../../../repository/copies";

export const ACTIONS = {
  SET_GET_COPY_START: "COPIES/SET_GET_COPY_START",
  SET_GET_COPY_SUCCESS: "COPIES/SET_GET_COPY_SUCCESS",
  SET_GET_COPY_FAILURE: "COPIES/SET_GET_COPY_FAILURE"
};
export const SET_GET_COPY_START = () => ({
  type: ACTIONS.SET_GET_COPY_START
});

export const SET_GET_COPY_SUCCESS = copy => ({
  type: ACTIONS.SET_GET_COPY_SUCCESS,
  copy
});

export const SET_GET_COPY_FAILURE = err => ({
  type: ACTIONS.SET_GET_COPY_FAILURE,
  err
});

export const getCopy = (id) => async dispatch => {
  dispatch(SET_GET_COPY_START());
  try {
    const copy = await CopiesRepository.getCopy(id);
    if (!copy) return;
    dispatch(SET_GET_COPY_SUCCESS(copy));
  } catch (err) {
    dispatch(SET_GET_COPY_FAILURE(err));
  }
};
