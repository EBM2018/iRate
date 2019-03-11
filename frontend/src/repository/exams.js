import {apiRequest} from '../services/api';
import {encodeQueryData} from '../helpers/query';
import {addTimeAndScale} from '../helpers/exam';
import {groupsArray} from "../helpers/mocks/group";

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
    }

    // TODO: move this part to the backend once we get the route from the other group
    const returnedData = data.map((exam) => {
        let group = [];
        let session = {};
        if (exam.group) {
            group = groupsArray.groups.find((aGroup) => {return aGroup._id === exam.group});
            exam.group = group;
        }
        if (exam.session) {
            session = group.classes.find((aClass) => {return aClass._id === exam.session});
            exam.session = session
        }
        return exam;
    });

    return returnedData;
}

/**
 *
 * @param {int} id - examID
 * @param {Boolean} withTS - whether the exam should include the est. timing and scale
 */
export const getExam = async (id, withTS = false) => {
    if (!id) return;
    const data = await apiRequest(`/exams/${id}`, 'get');
    return (withTS ? addTimeAndScale(data) : data);
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
