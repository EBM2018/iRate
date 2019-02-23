import React, {Component} from 'react'
import PropTypes from 'prop-types';
import DisplayQuestion from './DisplayQuestion';

export default class DisplayExercice extends Component {
    static propTypes = {
        exercice: PropTypes.object.isRequired
    };

    render() {
        const { exercice } = this.props;
        return (
            <div className="box is-paddingless">
                <div className="columns px-1">
                    <div className="column is-two-thirds">
                        <span className="title is-5">{exercice.title}</span>
                    </div>
                    <div className="column is-one-third has-text-right">
                        <div>
                            <div>
                                Temps estimé: {exercice.estimatedTime} minutes
                            </div>
                        </div>
                    </div>
                </div>
                {exercice.questions && exercice.questions.map(question =>
                    <DisplayQuestion key={question._id} question={question} />
                )}
                <div className="columns px-1 pt-1">
                    <div className="column is-two-thirds">
                    </div>
                    <div className="column is-one-third has-text-right">
                        <div>
                            <div>
                                <button className="button is-primary">
                                    <span>Répondre</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}