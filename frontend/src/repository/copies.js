//import {apiRequest} from '../services/api';

export const postCopy = async (copy) => {
    /*const data = await apiRequest(`/copies`, 'post', {
        ...copy
    });*/
    //return data;
    // TODO: connect to the backend
    return {
        '_id': 122222222
    };
};

export const postAnswer = async (copyId,questionId,answerContent) => {
    /*const data = await apiRequest(`/copies/${copyId}`, 'post', {
        'content': answerContent,
        'refQuestion': questionId,
    });
    return data*/
    return {
        '_id': "hihi je t'ai eu",
        'content': "Coucou cié moi"
    }
};

export const patchAnswer = async (copyId,questionId,answerId,answerContent) => {
    /*const data = await apiRequest(`/copies/${copyId}/answers/${answerId}`, 'patch', {
        '_id': answerId,
        'content': answerContent,
        'refQuestion': questionId
    });
    return data*/
    return {
        '_id': "hihi jt'ai bien patché",
        'content': "Cié encore moé"
    }
};
