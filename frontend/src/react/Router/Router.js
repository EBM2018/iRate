import React from 'react'
import {Route, Switch as RouterSwitch} from 'react-router';
import Instructions from "../Instructions/Instructions";
import CreateExam from "../Exam/CreateExam";
import DisplayExam from "../Exam/DisplayExam/DisplayExam";

const Router = () => (
            <div className="hero is-fullheight">
                <RouterSwitch>
                    <Route path="/newexam/instructions" component={Instructions} />
                    <Route path="/newexam/exercices" component={CreateExam} />
                    <Route path="/exam" component={DisplayExam}/>
                </RouterSwitch>
            </div>
        );

export default Router;
