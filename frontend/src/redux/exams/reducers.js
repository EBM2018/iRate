import {ACTIONS as ACTIONS_GET} from './actions/get';
import {ACTIONS as ACTIONS_POST} from './actions/post';
import {combineReducers} from 'redux';

const initialState = {
  exams: [],
  loading: false
};

const ACTIONS = { ...ACTIONS_GET, ...ACTIONS_POST };

export default combineReducers({
  exams: (state = initialState, action) => {
    switch (action.type) {
      case ACTIONS.SET_GET_EXAMS_SUCCESS:
        return action.exams;
      case ACTIONS.SET_POST_EXAM_SUCCESS:
        console.log(state);
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
        return true;
      case ACTIONS.SET_GET_EXAMS_SUCCESS:
      case ACTIONS.SET_GET_EXAMS_FAILURE:
        return false;

      default:
        return state;
    }
  },
});
