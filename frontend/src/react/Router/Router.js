import React from 'react'
import {Switch,Route} from 'react-router';
import Instructions from "../Instructions/Instructions";
import CreateExam from "../Exam/CreateExam";

const Router = () => (
            <div>
                <Switch>
                    <Route path='/' Component={Instructions}/>
                    <Route exact path='newexam/exercices' Component={CreateExam}/>
                </Switch>
            </div>
        );

export default Router;
