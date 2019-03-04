import React from 'react';
import PropTypes from 'prop-types';

export default class ExerciceSimplifiedDisplayer extends React.PureComponent {
  static propTypes = {
    handleInput: PropTypes.func.isRequired,
    deleteExercice: PropTypes.func.isRequired,
    exercices: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
  };

  static defaultProps = {};

  render() {
    return (
      <div className="section">
        <div className="box notification is-info">
          <div className="content">
            <div className="columns">
              <div className="column is-11">
                <p className="title">Exercice {this.props.index + 1}</p>
              </div>
              <div className="column is-1">
                <button className="delete is-large" value={this.props.id} onClick={this.props.deleteExercice}/>
                <i className="fas fa-sort fa-2x" style={{paddingLeft: "10px", color: "hsl(0, 0%, 96%)", cursor:"grabbing"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
