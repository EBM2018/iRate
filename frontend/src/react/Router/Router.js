import React from 'react'
import {Switch,Route} from 'react-router';
import Instructions from "../Instructions/Instructions";
import CreateExam from "../Exam/CreateExam";
import {Switch as RouterSwitch} from "react-router-dom";

const Router = () => (
            <div className="hero is-fullheight">
                <RouterSwitch>
                    <Route path="/newexam/instructions" component={Instructions} />
                    <Route path="/newexam/exercices" component={CreateExam} />
                </RouterSwitch>
            </div>
        );

export default Router;
