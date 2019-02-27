import axios from 'axios';

export const postExercice = async (id, exercice) => {
<<<<<<< HEAD
<<<<<<< HEAD
    const { data } = await axios.post('http://localhost:4000/api/exams/' + id + '/exercices', {
        ...exercice
    });
    return data;
};


export const patchExercice = async (idExam, idExercice, exercice) => {
    const { data } = await axios.patch('http://localhost:4000/api/exams/' + idExam + '/exercices/' + idExercice, {
=======
    const { data } = await axios.post('http://localhost:4000/api/' + id + '/exercices', {
>>>>>>> fetch master
=======
    const { data } = await axios.post('http://localhost:4000/api/exams/' + id + '/exercices', {
>>>>>>> start rdux for exercice
        ...exercice
    });
    return data;
};
