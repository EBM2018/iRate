import axios from 'axios';

export const postQuestion = async (id, idExercice, question) => {
    const { data } = await axios.post('http://localhost:4000/api/exams/' + id + '/exercices/' +idExercice + '/questions', {
        ...question
    });
    return data;
};

export const deleteQuestion = async (idExam, idExercice, IdQuestion, question) => {
    const { data } = await axios.delete('http://localhost:4000/api/exams/' + idExam + '/exercices/' + idExercice + '/questions/' + IdQuestion, {
        ...question
    });
    return data;
};


export const patchQuestion = async (idExam, idExercice, IdQuestion, question) => {
    console.log(question);
    const { data } = await axios.patch('http://localhost:4000/api/exams/' + idExam + '/exercices/' + idExercice + '/questions/' + IdQuestion, {
        ...question
    });
    return data;
};
