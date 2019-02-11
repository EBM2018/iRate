import React, {Component} from 'react'
import Exam from '../exam/Exam';

export default class LayoutApp extends Component {

    render() {
        return (
                <div className="hero is-fullheight">
                    <Exam/>
                </div>
        );
    }
}
