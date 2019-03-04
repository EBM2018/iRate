import {
    createStore,
    applyMiddleware,
    combineReducers,
    compose,
} from 'redux';

import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

import examsReducer from './exams/reducers';
import exerciceReducer from './exercice/reducers';

// Do not refactor this into !['production', 'test'].includes(process.env.NODE_ENV)
// Because uglify cannot statically analyze this.
const isDevEnvironment = (
    process.env.NODE_ENV !== 'production'
    && process.env.NODE_ENV !== 'test'
);

// Create root reducer
const reducers = combineReducers({
    exams: examsReducer,
    exercices: exerciceReducer
});

const middlewares = [
    thunk,
];

if (isDevEnvironment) {
    middlewares.push(createLogger({
        collapsed: true,
        diff: true,
        duration: true,
    }));
}

const composer = isDevEnvironment ? composeWithDevTools : compose;

const enhancers = composer(
    applyMiddleware(...middlewares),
);

const initialState = {};

export default createStore(reducers, initialState, enhancers);
