import React from 'react';
import ExerciceDisplayer from './ExerciceDisplayer';

export default class Exercice extends React.PureComponent {

  state = {
    question:[
      {"questionTitle": '', "questionScale": null, "questionContent": ''},
    ]
  };

  /**
   * Put input value in state with name of the input as name of the variable
   * @param {Object} e
   */
  handleInput = (e) => {
    this.setState({[e.target.name]:e.target.value});
  };

  addQuestion = () => {
    const question = [...this.state.question];
    question.push({"questionTitle": '', "questionScale": null, "questionContent": ''});
    this.setState({question});
  };

  delQuestion = (v) => {
    console.log(v.target.value);
    const question = [...this.state.question];
    delete question[v.target.value];
    this.setState({question});
  };

  render() {
    return (
      <ExerciceDisplayer handleInput={this.handleInput}
                         addQuestion={this.addQuestion}
                         delQuestion={this.delQuestion}
                         question={this.state.question}
                         index={this.props.index}/>
    );
  }
}
