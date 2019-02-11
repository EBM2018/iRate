import React, {Component} from 'react'
import ExerciceList from "../ExerciceList/ExerciceList";

export default class Exam extends Component {
    render() {
        return (
            <>
                <div className="tile is-parent">
                    <div className="tile is-child">
                        <ExerciceList/>
                    </div>
                </div>
            </>
        );
    }
}
