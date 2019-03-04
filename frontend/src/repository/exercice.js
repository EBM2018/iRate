import axios from 'axios';

export const postExercice = async (id, exercice) => {
    console.log(exercice);
    const { data } = await axios.post('http://localhost:4000/api/exams/' + id + '/exercices', {
        ...exercice
    });
    return data;
};

export const deleteExercice = async (idExam, idExercice, exercice) => {
    const { data } = await axios.delete('http://localhost:4000/api/exams/' + idExam + '/exercices/' + idExercice, {
        ...exercice
    });
    return data;
};


export const patchExercice = async (idExam, idExercice, exercice) => {
    const { data } = await axios.patch('http://localhost:4000/api/exams/' + idExam + '/exercices/' + idExercice, {
        ...exercice
    });
    return data;
};
