import {apiRequest} from '../services/api';
import {encodeQueryData} from '../helpers/query';
import {addTimeAndScale} from '../helpers/exam';
import axios from 'axios';

/**
 *
 * @param {Object} query
 * @param {Boolean} withTS - whether the exams should include the est. timing and scale
 */
export const getExams = async (query = {}, withTS = false) => {
  const exams = await apiRequest("exams", "get", {
    params: query && encodeQueryData(query)
  });

  if (withTS) {
    for (let i = 0; i < exams.length; i++) {
      exams[i] = addTimeAndScale(exams[i]);
    }
  }

  const callResponse = await axios.get('https://teamy.ebm.nymous.io/api/groups');

  if (callResponse.status === 200) {
    const {data} = callResponse;
    return exams.map(exam => {
      let group = [];
      let session = {};
      if (exam.group) {
        group = data.find(group => {
          return group._id === exam.group;
        });
        exam.group = group;
      }
      if (exam.session) {
        session = group.seances.find(seance => {
          return seance._id === exam.session;
        });
        exam.session = session;
      }
      return exam;
    });
  } else {
    return exams
  }
};

/**
 *
 * @param {int} id - examID
 * @param {Boolean} withTS - whether the exam should include the est. timing and scale
 */
export const getExam = async (id, withTS = false) => {
  if (!id) return;
  const exam = await apiRequest(`/exams/${id}`, 'get');

  const callResponse = await axios.get('https://teamy.ebm.nymous.io/api/groups');
  if (callResponse.status === 200) {
    const {data} = callResponse;
    if (exam.group) {
      exam.group = data.find(aGroup => {
        return aGroup._id === exam.group;
      });
    }
    if (exam.session) {
      exam.session = exam.group.seances.find(seance => {
        return seance._id === exam.session;
      });
    }
  }

  return withTS ? addTimeAndScale(exam) : exam;
};

export const patchExam = async exam => {
  return await apiRequest(`/exams/` + exam._id, "patch", {
    ...exam
  });
};

export const postExam = async exam => {
  return await apiRequest(`/exams`, "post", {
    ...exam
  });
};
