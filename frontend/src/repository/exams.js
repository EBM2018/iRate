import axios from 'axios';

export const getExams = async () => {
    const { data } = await axios.get('http://localhost:4000/api/exams');
    return data;
};

export const postExam = async (exam) => {
    const { data } = await axios.post('http://localhost:4000/api/exams', {
        ...exam
    });
    return data;
}