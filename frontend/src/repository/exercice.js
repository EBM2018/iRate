import axios from 'axios';

export const postExercice = async (id, exercice) => {
    const { data } = await axios.post('http://localhost:4000/api/' + id + '/exercices', {
        ...exercice
    });
    return data;
};
