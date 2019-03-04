import moment from 'moment';
import {apiRequest} from '../services/api';
export const getExams = async () => {
    const data = await apiRequest('exams', 'get');
    return data;
};

export const getExam = async (id) => {
    if (!id) return;
    const data = await apiRequest(`/exams/${id}`, 'get');
    return data;
};

export const getExamsWithScaleAndTime = async () => {
    const data = await apiRequest(`/exams`, 'get');
    let examScale = 0;
    let examTime = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].exercices.length; j++) {
            for (let k = 0; k < data[i].exercices[j].questions.length; k++) {
                if(data[i].exercices[j].questions[k].scale) examScale = examScale + data[i].exercices[j].questions[k].scale;
                if(data[i].exercices[j].questions[k].estimatedTime) examTime = examTime + data[i].exercices[j].questions[k].estimatedTime;
            }
        }
        data[i].scale = examScale;
        data[i].estimatedTime = moment.utc(examTime * 1000).format('HH:mm:ss');
        examScale = 0;
        examTime = 0;
    }
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
