import React, {Component} from 'react'
import Instructions from "../instructions/Instructions";

export default class Exam extends Component {
    render() {
        return (
            <>
                <div className="tile is-parent">
                    <div className="tile is-child">
                        <Instructions/>
                    </div>
                </div>
            </>
        );
    }
}
