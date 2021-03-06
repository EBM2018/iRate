import Instructions from '../react/Exam/CreateExam/Instructions/Instructions';

import CreateExam from '../react/Exam/CreateExam/CreateExam';
import DisplayExam from '../react/Exam/DisplayExam/DisplayExam';
import ExamList from '../react/Exam/DisplayExamList/ExamList';
import Copy from '../react/Copy/Copy';
import CopyList from '../react/Copy/CopyList/CopyList';
import ExamTopic from '../react/Copy/Instructions/GenerateTopic/ExamTopic';
import CopiesOfExam from '../react/Correction/CopiesOfExam';
import CopyCorrection from '../react/Correction/CopyCorrection';
import Homepage from '../react/Homepage/Homepage';

export const privateRoutes = {
  Homepage: {
    path: '/',
    component: Homepage,
    title: 'La page de garde'
  },
  Instructions: {
    path: '/newexam/instructions/:groupId?/:sessionId?',
    component: Instructions,
    title: 'Indiquez les détails du sujet'
  },
  CreateExam: {
    path: '/newexam/:examId/exercices',
    component: CreateExam,
    title: 'Créez votre examen'
  },
  ExamList: {
    path: '/exams',
    component: ExamList,
    title: 'Afficher tous les examens'
  },
  DisplayExam: {
    path: '/exam/:id',
    component: DisplayExam,
    title: 'Voici les détails du sujet'
  },
  Copy: {
    path: '/copy/:id',
    component: Copy,
    title: 'Voici les détails du sujet'
  },
  ExamTopic: {
    path: '/topic/:examId',
    component: ExamTopic,
    title: 'Voici le sujet'
  },
  CopyList: {
    path: '/copies',
    component: CopyList,
    title: 'Liste des copies associées à un élève'
  },
  Correction: {
    path: '/correction/:examId',
    component: CopiesOfExam,
    title: 'Liste des copies associées à un examen'
  },
  CopyCorrection: {
    path: '/correction/:examId/copy/:copyId',
    component: CopyCorrection,
    title: 'Corriger une copie'
  }
};
