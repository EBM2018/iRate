import {apiRequest} from '../services/api';

/**
 * 
 * @param {String} examId 
 */
export const getCopiesOfExam = async (examId) => {
    const data = await apiRequest(`copies/exams/${examId}`, 'get');
    return data;
};

export const postCopy = async copy => {
  return await apiRequest(`copies`, 'post', {
    ...copy
  });
};

export const getCopy = async id => {
  if (!id) return;
  return await apiRequest(`/copies/${id}`, 'get');
};

export const postAnswer = async (copyId, questionId, answerContent) => {
  const data = await apiRequest(`/copies/${copyId}`, 'post', {
    content: answerContent,
    refQuestion: questionId
  });
  return data;
};

export const patchAnswer = async (
  copyId,
  questionId,
  answerId,
  answerContent
) => {
  /*const data = await apiRequest(`/copies/${copyId}/answers/${answerId}`, 'patch', {
        '_id': answerId,
        'content': answerContent,
        'refQuestion': questionId
    });
    return data*/
  return {
    _id: "hihi jt'ai bien patché",
    content: 'Cié encore moé'
  };
};
