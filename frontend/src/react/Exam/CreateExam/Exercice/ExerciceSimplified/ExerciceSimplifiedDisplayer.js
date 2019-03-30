import React from 'react';
import PropTypes from 'prop-types';

export default class ExerciceSimplifiedDisplayer extends React.PureComponent {
    static propTypes = {
        deleteExercice: PropTypes.func.isRequired,
        exercices: PropTypes.array.isRequired,
        id: PropTypes.string.isRequired,
        idQuestion: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired
    };

    static defaultProps = {};

    render() {
        return (
            <div className="section">
                <div className="box notification is-info">
                    <div className="content">
                        <div className="columns">
                            <div className="column is-11">
                                <p className="title">Exercice {this.props.idQuestion + 1}</p>
                            </div>
                            <div className="column is-1">
                                <button className="delete is-large" value={this.props.index}
                                        onClick={this.props.deleteExercice}/>
                                <i className="fas fa-sort fa-2x"
                                   style={{paddingLeft: "10px", color: "hsl(0, 0%, 96%)", cursor: "grabbing"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
