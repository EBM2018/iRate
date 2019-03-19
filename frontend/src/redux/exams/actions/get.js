import * as ExamsRepository from '../../../repository/exams';

export const ACTIONS = {
    SET_GET_EXAMS_START: 'EXAMS/SET_GET_EXAMS_START',
    SET_GET_EXAMS_SUCCESS: 'EXAMS/SET_GET_EXAMS_SUCCESS',
    SET_GET_EXAMS_FAILURE: 'EXAMS/SET_GET_EXAMS_FAILURE',
};
export const SET_GET_EXAMS_START = () => ({
    type: ACTIONS.SET_GET_EXAMS_START,
});

export const SET_GET_EXAMS_SUCCESS = exams => ({
    type: ACTIONS.SET_GET_EXAMS_SUCCESS,
    exams,
});

export const SET_GET_EXAMS_FAILURE = err => ({
    type: ACTIONS.SET_GET_EXAMS_FAILURE,
    err,
});

export const getExams = (query = {}, withTS = false) => async dispatch => {
    dispatch(SET_GET_EXAMS_START());

    try {
        const exams = await ExamsRepository.getExams(query, withTS);
        dispatch(SET_GET_EXAMS_SUCCESS(exams));
    } catch (err) {
        dispatch(SET_GET_EXAMS_FAILURE(err));
    }
};

export const getExamsForStudent = (userId) => async dispatch => {
    dispatch(SET_GET_EXAMS_START());
    // TODO: Get the module and session from the user and build up the query
    const query = {
        /* correction: false,
        user */
    };

    try {
        const exams = await ExamsRepository.getExams(query);
        dispatch(SET_GET_EXAMS_SUCCESS(exams));
    } catch (err) {
        dispatch(SET_GET_EXAMS_FAILURE(err));
    }
}
