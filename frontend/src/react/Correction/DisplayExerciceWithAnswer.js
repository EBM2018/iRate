import React, {Component} from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';

import Question from '../Copy/AnswerExercice/AnswerQuestion/Question';

export default class DisplayExerciceWithAnswer extends Component {
    static propTypes = {
        exercice: PropTypes.object.isRequired
    };

    render() {
        const { exercice, copy } = this.props;
        return (
            <div className="box is-paddingless">
                <div className="columns px-1">
                    <div className="column is-two-thirds">
                        <span className="title is-5">{exercice.title}</span>
                    </div>
                    <div className="column is-one-third has-text-right">
                        <div>
                            <div className="tags has-addons d-block">
                                <span className="tag is-dark">Temps est.</span>
                                <span className="tag is-info">{moment.utc(exercice.estimatedTime*1000).format('mm:ss')}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {exercice.questions && exercice.questions.map(question =>
                    <div key={question._id}>
                        <Question key={question._id} id={question._id} question={question} idQuestion={question._id}
                        index={question._id} answer={copy.answers.filter(answer => answer.refQuestion === question._id).pop()} copy={copy} readOnly={true} />
                    </div>
                )}
            </div>
        );
    }
}
