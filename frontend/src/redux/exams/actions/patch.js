import * as ExamsRepository from "../../../repository/exams";

export const ACTIONS = {
  SET_PATCH_EXAMS_START: "EXAMS/SET_PATCH_EXAMS_START",
  SET_PATCH_EXAMS_SUCCESS: "EXAMS/SET_PATCH_EXAMS_SUCCESS",
  SET_PATCH_EXAMS_FAILURE: "EXAMS/SET_PATCH_EXAMS_FAILURE"
};
export const SET_PATCH_EXAMS_START = () => ({
  type: ACTIONS.SET_PATCH_EXAMS_START
});

export const SET_PATCH_EXAMS_SUCCESS = exams => ({
  type: ACTIONS.SET_PATCH_EXAMS_SUCCESS,
  exams
});

export const SET_PATCH_EXAMS_FAILURE = err => ({
  type: ACTIONS.SET_PATCH_EXAMS_FAILURE,
  err
});

export const patchExam = examToAdd => async dispatch => {
  dispatch(SET_PATCH_EXAMS_START());

  try {
    const exams = await ExamsRepository.patchExam(examToAdd);
    dispatch(SET_PATCH_EXAMS_SUCCESS(exams));
  } catch (err) {
    dispatch(SET_PATCH_EXAMS_FAILURE(err));
  }
};
