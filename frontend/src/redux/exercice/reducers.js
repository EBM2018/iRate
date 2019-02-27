import {ACTIONS as ACTIONS_POST} from './actions/post';
import {combineReducers} from 'redux';

const initialState = {
<<<<<<< HEAD
<<<<<<< HEAD
    exercices: []
};

const ACTIONS = {
    ...ACTIONS_POST,
    'RESET_ERROR_MESSAGE': 'RESET_ERROR_MESSAGE'
};

export default combineReducers({
    exercices: (state = initialState, action) => {
        switch (action.type) {
            case ACTIONS.SET_POST_EXERCICE_SUCCESS:
                return {
                    ...state,
                    exercices: action.result
                };
            case ACTIONS.SET_PATCH_EXERCICE_SUCCESS:
                return {
                    ...state,
                    exercices: action.result
                };
            default:
                return state;
        }
    },

    loading: (state = false, action) => {
        switch (action.type) {
            case ACTIONS.SET_POST_EXERCICE_START:
            case ACTIONS.SET_PATCH_EXERCICE_START:
                return true;
            case ACTIONS.SET_POST_EXERCICE_SUCCESS:
            case ACTIONS.SET_PATCH_EXERCICE_SUCCESS:
            case ACTIONS.SET_POST_EXERCICE_FAILURE:
            case ACTIONS.SET_PATCH_EXERCICE_FAILURE:
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
        const {type, err} = action;

        if (type === ACTIONS.RESET_ERROR_MESSAGE) {
            return null;
        } else if (err) {
            return err;
        }

        return state;
    }
=======
    exercice: []
=======
    exercices: []
>>>>>>> start rdux for exercice
};

const ACTIONS = {
  ...ACTIONS_POST,
  'RESET_ERROR_MESSAGE': 'RESET_ERROR_MESSAGE'
};

export default combineReducers({
  exercices: (state = initialState, action) => {
    switch (action.type) {
      case ACTIONS.SET_POST_EXERCICE_SUCCESS:
          return {
              ...state,
              exercices: action.result
          };
        default:
        return state;
    }
  },

  loading: (state = false, action) => {
    switch(action.type) {
      case ACTIONS.SET_POST_EXERCICE_START:
        return true;
      case ACTIONS.SET_POST_EXERCICE_SUCCESS:
      case ACTIONS.SET_POST_EXERCICE_FAILURE:
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
>>>>>>> fetch master
});
