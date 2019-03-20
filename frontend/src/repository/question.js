import axios from 'axios';
import {apiRequest} from "../services/api";

export const postQuestion = async (id, idExercice, question) => {
    return await apiRequest(`exams/${id}/exercices/${idExercice}/questions`, 'post', {
        ...question
    });
};

export const deleteQuestion = async (idExam, idExercice, idQuestion, question) => {
    return await apiRequest(`exams/${idExam}/exercices/${idExercice}/questions/${idQuestion}`, 'delete', {
        ...question
    });
};


export const patchQuestion = async (idExam, idExercice, idQuestion, question) => {
    return await apiRequest(`exams/${idExam}/exercices/${idExercice}/questions/${idQuestion}`, 'patch', {
        ...question
    });
};
