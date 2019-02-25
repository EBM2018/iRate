import axios from 'axios';
import moment from "moment";

export const getExams = async () => {
    const { data } = await axios.get('http://localhost:4000/api/exams');
    return data;
};

export const getExam = async (id) => {
            if (!id) return;
            const { data } = await axios.get(`http://localhost:4000/api/exams/${id}`);
            return data;
};

export const getExamsWithScaleAndTime = async () => {
    const {data} = await axios.get('http://localhost:4000/api/exams');
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
    const { data } = await axios.patch('http://localhost:4000/api/exams/' + exam._id, {
        ...exam
    });
    return data;
};

export const postExam = async (exam) => {
    const { data } = await axios.post('http://localhost:4000/api/exams', {
        ...exam
    });
    return data;
};
