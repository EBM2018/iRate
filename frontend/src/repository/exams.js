import axios from 'axios';

export const getExams = async () => {
    const { data } = await axios.get('http://localhost:4000/api/exams');
    return data;
};

export const getExamsWithScaleAndTime = async () => {
    const {data} = await axios.get('http://localhost:4000/api/exams');
    let examScale = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].exercices.length; j++) {
            for (let k = 0; k < data[i].exercices[j].questions.length; k++) {
                examScale = examScale + data[i].exercices[j].questions[k].scale;
            }
        }
        data[i].scale = examScale;
        examScale = 0;
    }
    return data;
};

export const postExam = async (exam) => {
    const { data } = await axios.post('http://localhost:4000/api/exams', {
        ...exam
    });
    return data;
};


