import {ACTIONS as ACTIONS_GET} from './actions/get';
import {ACTIONS as ACTIONS_POST} from './actions/post';
import {ACTIONS as ACTIONS_GET_SINGLE} from './actions/getSingle';
import {combineReducers} from 'redux';

const initialState = {
  exams: []
};

const ACTIONS = {
  ...ACTIONS_GET,
  ...ACTIONS_POST,
  ...ACTIONS_GET_SINGLE,
  'RESET_ERROR_MESSAGE': 'RESET_ERROR_MESSAGE'
};

export default combineReducers({
  exams: (state = initialState, action) => {
    switch (action.type) {
      case ACTIONS.SET_GET_EXAMS_SUCCESS:
        return action.exams;
      case ACTIONS.SET_GET_EXAM_SUCCESS:
        return action.exam;
      case ACTIONS.SET_POST_EXAM_SUCCESS:
        return [
            ...state,
            {
              title: action.exam.title,
            }
          ];
      default:
        return state;
    }
  },

  loading: (state = false, action) => {
    switch(action.type) {
      case ACTIONS.SET_GET_EXAMS_START:
      case ACTIONS.SET_GET_EXAM_START:
      case ACTIONS.SET_POST_EXAM_START:
        return true;
      case ACTIONS.SET_GET_EXAMS_SUCCESS:
      case ACTIONS.SET_GET_EXAM_SUCCESS:
      case ACTIONS.SET_POST_EXAM_SUCCESS:
      case ACTIONS.SET_GET_EXAMS_FAILURE:
      case ACTIONS.SET_GET_EXAM_FAILURE:
      case ACTIONS.SET_POST_EXAM_FAILURE:
        return false;

      default:
        return state;
    }
  },

  /**
   * Updates error message to notify about the failed fetches
   * By default: Redux doesn't return the error, it gets stuck
   * @link https://stackoverflow.com/a/34482258
   */
  errorMessage: (state = null, action) => {
    const { type, err } = action;

    if (type === ACTIONS.RESET_ERROR_MESSAGE) {
      return null;
    } else if (err) {
      return err;
    }

    return state;
  }
});
