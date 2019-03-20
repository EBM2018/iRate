import {apiRequest} from "../services/api";

export const postExercice = async (id, exercice) => {
    return await apiRequest(`exams/${id}/exercices`, 'post', {
        ...exercice
    });
}

export const deleteExercice = async (idExam, idExercice, exercice) => {
    return await apiRequest(`exams/${idExam}/exercices/${idExercice}`, 'delete', {
        ...exercice
    });
};


export const patchExercice = async (idExam, idExercice, exercice) => {
    return await apiRequest(`exams/${idExam}/exercices/${idExercice}`, 'patch', {
        ...exercice
    });
};
