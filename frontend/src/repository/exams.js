import axios from 'axios';

export const getExams = async () => {
    const exams = await axios.get('http://localhost:4000/api/exams');
    return exams;
};

export const postExam = async (exam) => {
    const { data } = await axios.post('http://localhost:4000/api/exams', {
        ...exam
    });
    return data;
}