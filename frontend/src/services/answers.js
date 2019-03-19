import { apiRequest } from './api';

export const postAnswer = async (copyId, questionId, answerContent) => {
  return await apiRequest(`/copies/${copyId}/answers`, 'post', {
    content: answerContent,
    refQuestion: questionId
  });
};

export const patchAnswer = async (
  copyId,
  questionId,
  answerId,
  answerContent
) => {
  return await apiRequest(`/copies/${copyId}/answers/${answerId}`, 'patch', {
    _id: answerId,
    content: answerContent,
    refQuestion: questionId
  });
};

export const getCopy = async copyId => {
  return await apiRequest(`/copies/${copyId}`, 'get');
};
