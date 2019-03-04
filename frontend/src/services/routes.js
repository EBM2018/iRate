import Instructions from '../react/Instructions/Instructions';
import CreateExam from '../react/Exam/CreateExam';
import DisplayExam from '../react/Exam/DisplayExam';
import ExamList from '../react/Exam/ExamList/ExamList';
export const privateRoutes = {
    Instructions: {
        path: '/newexam/instructions',
        component: Instructions,
        title: 'Indiquez les détails du sujet'
    },
    CreateExam: {
        path: '/newexam/exercices',
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
    }
};