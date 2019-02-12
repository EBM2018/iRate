import {ACTIONS} from './actions/get';
import {combineReducers} from 'redux';

const initialState = {
  exams: []
};

export default combineReducers({
  exams: (state = initialState, action) => {
    switch (action.type) {
      case ACTIONS.SET_GET_EXAMS_SUCCESS:
        return action.exams;
      case ACTIONS.SET_POST_EXAM_SUCCESS:
        return {
          ...state,
          //[action.exams]: ..,
        };
      default:
        return state;
    }
  },

  loading: (state = false, action) => {
    switch(action.type) {
      case ACTIONS.SET_GET_EXAMS_START:
        return true;
      case ACTIONS.SET_GET_EXAMS_SUCCESS:
      case ACTIONS.SET_GET_EXAMS_FAILURE:
        return false;

      default:
        return state;
    }
  },
});
