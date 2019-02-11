import axios from 'axios';

export const getExams = async () => {

    const exams = await axios.get('http://localhost:4000/api/exam');
    return exams;

};

//export const create