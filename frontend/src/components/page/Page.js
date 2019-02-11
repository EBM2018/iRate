import React from 'react';
// import PropTypes from 'prop-types';
import {Layout} from 'antd';
import ExerciceDisplayer from "../exercice/ExerciceDisplayer";
import QuestionDisplayer from "../question/QuestionDisplayer";

const {
  Header, Content,
} = Layout;

export default class Page extends React.PureComponent {
  static propTypes = {};


  state = {
    questions: [{number: 1, intitule: 'aaaaaaaaaa', contenu: ''}]
  };


  static defaultProps = {};

  onChangeSave = (value) => {
    console.log(value);
  }

  render() {
    return (
      <div>
        <Layout>
          <Header style={{marginBottom: "10px", backgroundColor: "grey", color: "white", fontSize: "30px"}}>Hello World
            !</Header>
          <Content><ExerciceDisplayer/></Content>
          {this.state.questions.map((value, index) => (
            <Content key={index}><QuestionDisplayer number={value.number} intitule={value.intitule} contenu={value.contenu}
                                                    fctSave={this.onChangeSave}/></Content>
          ))}
        </Layout>
      </div>
    );
  }
}
