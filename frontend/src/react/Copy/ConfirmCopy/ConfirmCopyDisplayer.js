import React, { Component } from 'react'

export default class ConfirmCopyDisplayer extends Component {

  render() {
    const { timer,
            lessFiveMinutes,
            nbrOfQuestions,
            nbrOfAnswers,
            toggleLessFiveMinutes,} = this.props;
    return (
      <section className="section">
        <div className="box notification is-info">
          <p className="title">Etape de soumission</p>
        </div>
        {lessFiveMinutes ? <div className="notification is-danger">
          <button className="delete" onClick={toggleLessFiveMinutes(true)}/>
          Attention ! Il vous reste moins de 5 minutes pour soumettre.
        </div> : null}
        <div className="box">
          <div className="content">
            <div className="subtitle is-4">Il reste <strong>{timer}</strong> avant la fin de l'épreuve</div>
          </div>
          <div className="content">
            <div className="subtitle is-4">Nombre de questions répondues: <strong>{nbrOfAnswers} / {nbrOfQuestions}</strong></div>
          </div>
          <div className="columns">
            <div className="column is-right">
              <div className="buttons has-addons is-right">
                <button className="button is-medium is-info"
                        onClick={this.props.confirmCopy}>
                  Confirmer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
