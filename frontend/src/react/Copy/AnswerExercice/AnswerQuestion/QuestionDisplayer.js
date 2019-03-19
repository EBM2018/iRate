import React, {Component} from 'react';
import moment from "moment";
import 'draft-js/dist/Draft.css';
//import {Editor} from 'draft-js';

export default class QuestionDisplayer extends Component {
    render() {
        let {
            title,
            scale,
            estimatedTime
        } = this.props.question;
        const { showScale,
            index } = this.props;

        estimatedTime = moment.utc(estimatedTime * 1000).format('mm:ss');

        return (
            <div className="box">
                <div className="level">
                    <span className="level-left">
                        <span className="title is-4">Question {index + 1}</span>
                    </span>
                    <div className="level-right">
                        <div className="field is-grouped is-grouped-multiline">
                            {showScale ? <div className="control">
                                <div className="tags has-addons">
                                    <span className="tag is-medium is-dark">Barème</span>
                                    <span className="tag is-medium is-info">{scale}</span>
                                </div>
                            </div> : null}

                            <div className="control">
                                <div className="tags has-addons">
                                    <span className="tag is-medium is-dark">Temps estimé</span>
                                    <span className="tag is-medium is-primary">{estimatedTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subtitle">{title}</div>
            </div>
        );
    }
}
