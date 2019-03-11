import {apiRequest} from '../services/api';
import {encodeQueryData} from '../helpers/query';
import {addTimeAndScale} from '../helpers/exam';

/**
 *
 * @param {Object} query
 * @param {Boolean} withTS - whether the exams should include the est. timing and scale
 */
export const getExams = async (query = {}, withTS = false) => {
    const data = await apiRequest('exams', 'get', {
        params: query && encodeQueryData(query)
    });

    if (withTS) {
        for (let i = 0; i < data.length; i++) {
            data[i] = addTimeAndScale(data[i]);
        };
        return data;
    }

    return data;
};

export const getExam = async (id) => {
    if (!id) return;
    const data = await apiRequest(`/exams/${id}`, 'get');
    return data;
};

export const patchExam = async (exam) => {
    const data = await apiRequest(`/exams/` + exam._id, 'patch', {
        ...exam
    });
    return data;
};

export const postExam = async (exam) => {
    const data = await apiRequest(`/exams`, 'post', {
        ...exam
    });
    return data;
};
