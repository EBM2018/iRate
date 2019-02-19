import React from 'react'
import {Route, Switch as RouterSwitch} from 'react-router';

import Instructions from '../Instructions/Instructions';
import CreateExam from '../Exam/CreateExam';
import DisplayExam from '../Exam/DisplayExam';
import LayoutApp from '../Layout/LayoutApp';

// TODO: move this guy in his own file
const privateRoutes = {
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
    DisplayExam: {
        path: '/exam/:id',
        component: DisplayExam,
        title: 'Voici les détails du sujet'
    }
};

const Router = () => (
            <>
                <RouterSwitch>
                    { Object.keys(privateRoutes).map((route, key) => {
                        const { component, path, title } = privateRoutes[route];
                        return (
                            <Route
                                exact
                                path={path}
                                key={key}
                                render={ (route) =>
                                    <LayoutApp
                                        component={component}
                                        route={route}
                                        title={title}
                                    />
                                }
                            />
                        )
                    })}
                </RouterSwitch>
            </>
        );

export default Router;
