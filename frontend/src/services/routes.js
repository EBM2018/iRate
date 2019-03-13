import Instructions from '../react/Instructions/Instructions';

import CreateExam from '../react/Exam/CreateExam';
import DisplayExam from '../react/Exam/DisplayExam/DisplayExam';
import ExamList from '../react/Exam/ExamList/ExamList';
import Copy from '../react/Copy/Copy';
import CopyList from '../react/Copy/CopyList';

export const privateRoutes = {
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
    CopyList: {
        path: '/copies',
        component: CopyList,
        title: 'Liste des copies associées à un élève'
    }
};
