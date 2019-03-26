import { ACTIONS as ACTIONS_POST } from './actions/post';
import { ACTIONS as ACTIONS_PATCH } from './actions/patch';
import { ACTIONS as ACTIONS_GET } from './actions/getSingle';
import { ACTIONS as ACTIONS_POST_ANSWER } from './actions/postAnswer';
import { combineReducers } from 'redux';

const ACTIONS = {
  ...ACTIONS_POST,
  ...ACTIONS_PATCH,
  ...ACTIONS_POST_ANSWER,
  ...ACTIONS_GET,
  RESET_ERROR_MESSAGE: 'RESET_ERROR_MESSAGE'
};

export default combineReducers({
  copies: (state = {}, action) => {
    switch (action.type) {
      case ACTIONS.SET_POST_COPY_SUCCESS:
        return {
          ...action.copy
        };
      case ACTIONS.SET_GET_COPY_SUCCESS:
        return action.copy;
      case ACTIONS.SET_PATCH_COPY_SUCCESS:
        return {
          ...action.copy
        };
      case ACTIONS.SET_POST_ANSWER_SUCCESS:
        const answers =
          state.copy && state.copy.answers.length
            ? [...state.copy.answers, action.answer]
            : [action.answer];
        return {
          ...state,
          answers
        };
      default:
        return state;
    }
  },

  loading: (state = false, action) => {
    switch (action.type) {
      case ACTIONS.SET_POST_COPY_START:
      case ACTIONS.SET_PATCH_COPY_START:
      case ACTIONS.SET_POST_ANSWER_START:
      case ACTIONS.SET_GET_COPY_START:
        return true;
      case ACTIONS.SET_POST_COPY_SUCCESS:
      case ACTIONS.SET_POST_COPY_FAILURE:
      case ACTIONS.SET_POST_ANSWER_SUCCESS:
      case ACTIONS.SET_POST_ANSWER_FAILURE:
      case ACTIONS.SET_PATCH_ANSWER_SUCCESS:
      case ACTIONS.SET_PATCH_ANSWER_FAILURE:
      case ACTIONS.SET_GET_COPY_SUCCESS:
      case ACTIONS.SET_GET_COPY_FAILURE:
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
