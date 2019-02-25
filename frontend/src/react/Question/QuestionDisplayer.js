import React from 'react';
import PropTypes from 'prop-types';

export default class QuestionDisplayer extends React.Component {
<<<<<<< HEAD
    static propTypes = {
        handleInput: PropTypes.func.isRequired,
        deleteQuestion: PropTypes.func.isRequired,
        question: PropTypes.array.isRequired,
        id: PropTypes.number.isRequired,
    };
=======
  static propTypes = {
    handleInput: PropTypes.func.isRequired,
    deleteQuestion: PropTypes.func.isRequired,
    question: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
  };
>>>>>>> Delete question & Delete Exercice Done

    static defaultProps = {};

    render() {
        return (
            <div className="box">
                <div className="columns">
                    <div className="column is-11">
                        <div className="columns">
                            <div className="column is-half"><span className="title is-5">Intitulé question :</span>
                            </div>
                            <div className="column is-half"><input className="input"
                                                                   name="questionTitle"
                                                                   id={this.props.id}
                                                                   onChange={this.props.handleInput}
                                                                   type="text"
                                                                   placeholder="Nouvelle Question"/></div>
                        </div>
                        <div className="columns">
                            <div className="column is-half"><span className="title is-5">Barème :</span></div>
                            <div className="column is-half"><input className="input"
                                                                   name="questionScale"
                                                                   id={this.props.id}
                                                                   onChange={this.props.handleInput}
                                                                   type="number"
                                                                   min="0"
                                                                   step="0.25"
                            /></div>
                        </div>
                        <div className="columns">
                            <div className="column is-half"><span className="title is-5">Contenu question :</span></div>
                            <div className="column is-half"><textarea className="textarea"
                                                                      name="questionContent"
                                                                      id={this.props.id}
                                                                      onChange={this.props.handleInput}
                                                                      type="text"
                                                                      placeholder="Question..."
                            /></div>
                        </div>
                    </div>
                    <div className="column is-1">
                        <button className="delete is-large" value={this.props.id} onClick={this.props.deleteQuestion}/>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
        );
    }
=======
            <div className="columns">
              <div className="column is-half"><span className="title is-5">Barème :</span></div>
              <div className="column is-half"><input className="input"
                                                     name="questionScale"
                                                     onChange={this.props.handleInput}
                                                     type="number"
                                                     min="0"
                                                     step="0.25"
                                                     /></div>
            </div>
            <div className="columns">
              <div className="column is-half"><span className="title is-5">Contenu question :</span></div>
              <div className="column is-half"><textarea className="textarea"
                                                        name="questionContent"
                                                        onChange={this.props.handleInput}
                                                        type="text"
                                                        placeholder="Question..."
                                                        /></div>
            </div>
          </div>
          <div className="column is-1">
            <button className="delete is-large" value={this.props.id} onClick={this.props.deleteQuestion}/>
          </div>
        </div>
      </div>
    );
  }
>>>>>>> Delete question & Delete Exercice Done
}
