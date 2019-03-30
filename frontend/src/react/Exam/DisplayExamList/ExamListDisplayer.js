import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

class ExamListDisplayer extends Component {
  render() {
    console.log(this.props.finalisedExams, this.props.createdExams);
    return (
      <>
        <div className="columns is-variable is-multiline is-8">
          <div className="column is-one-third">
            <div className="box">
              <div className="title">Examen finalisés</div>
            </div>
            {this.props.finalisedExams && this.props.finalisedExams.map((exam) => <div className="content"
                                                                                       key={exam._id}>
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title has-no-margin-bottom">Examen: {exam.title}</p>
                  <div className="card-header-icon" onClick={this.props.toggleFinalise(exam._id)}>
                    <div className="tags has-addons tooltip" data-tooltip="Cliquez ici pour finaliser l'examen !">
                      <span className="tag is-white">Finalisé</span>
                      <span className="tag is-success">Oui</span>
                    </div>
                  </div>
                </header>
                <div className="card-content">
                  <div className="content">
                    <p
                      className="content">Groupe: <strong>{exam.group ? exam.group.groupName : 'Pas de groupe assigné'}</strong>
                    </p>
                    <p className="content">
                      Le <strong>{moment(exam.session.startingDate).format('DD/MM/YYYY') + ' '}</strong>
                      de <strong>{moment(exam.session.startingDate).format('HH:mm') + ' '}</strong>
                      à <strong>{moment(exam.session.finishingDate).format('HH:mm')}</strong>
                    </p>
                    <p className="content">Barème: <strong>/{exam.scale}</strong></p>
                    <p className="content">Temps estimé: <strong>{exam.estimatedTime}</strong></p>
                  </div>
                </div>
                <footer className="card-footer">
                  <div className="card-footer-item"><Link to={'/exam/' + exam._id} target={'_blank'}>Voir</Link></div>
                </footer>
              </div>
            </div>)}
          </div>

          <div className="column is-one-third">
            <div className="box">
              <div className="title">Examen créés</div>
            </div>
            {this.props.createdExams && this.props.createdExams.map((exam) => <div className="content" key={exam._id}>
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title has-no-margin-bottom">Examen: {exam.title}</p>
                  <div className="card-header-icon" onClick={this.props.toggleFinalise(exam._id)}>
                    <div className="tags has-addons tooltip" data-tooltip="Cliquez ici pour finaliser l'examen !">
                      <span className="tag is-white">Finalisé</span>
                      <span className="tag is-warning">Non</span>
                    </div>
                  </div>
                </header>
                <div className="card-content">
                  <div className="content">
                    <p
                      className="content">Groupe: <strong>{exam.group ? exam.group.groupName : 'Pas de groupe assigné'}</strong>
                    </p>
                    <p className="content">
                      Le <strong>{moment(exam.session.startingDate).format('DD/MM/YYYY') + ' '}</strong>
                      de <strong>{moment(exam.session.startingDate).format('HH:mm') + ' '}</strong>
                      à <strong>{moment(exam.session.finishingDate).format('HH:mm')}</strong>
                    </p>
                    <p className="content">Barème: <strong>/{exam.scale}</strong></p>
                    <p className="content">Temps estimé: <strong>{exam.estimatedTime}</strong></p>
                  </div>
                </div>
                <footer className="card-footer">
                  <div className="card-footer-item">
                    <Link to={`/newexam/${exam._id}/exercices`}>Modifier</Link>
                  </div>
                </footer>
              </div>
            </div>)}
          </div>

          <div className="column is-one-third">
            <div className="box">
              <div className="title">Examen passés</div>
            </div>
            {this.props.passedExams && this.props.passedExams.map((exam) => <div className="content" key={exam._id}>
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title has-no-margin-bottom">Examen: {exam.title}</p>
                  <div className="card-header-icon" onClick={this.props.toggleFinalise(exam._id)}>
                    <div className="tags has-addons tooltip" data-tooltip="Cliquez ici pour finaliser l'examen !">
                      <span className="tag is-white">Finalisé</span>
                      <span className="tag is-success">Oui</span>
                    </div>
                  </div>
                </header>
                <div className="card-content">
                  <div className="content">
                    <p
                      className="content">Groupe: <strong>{exam.group ? exam.group.groupName : 'Pas de groupe assigné'}</strong>
                    </p>
                    <p className="content">
                      Le <strong>{moment(exam.session.startingDate).format('DD/MM/YYYY') + ' '}</strong>
                      de <strong>{moment(exam.session.startingDate).format('HH:mm') + ' '}</strong>
                      à <strong>{moment(exam.session.finishingDate).format('HH:mm')}</strong>
                    </p>
                    <p className="content">Barème: <strong>/{exam.scale}</strong></p>
                    <p className="content">Temps estimé: <strong>{exam.estimatedTime}</strong></p>
                  </div>
                </div>
                <footer className="card-footer">
                  <div className="card-footer-item">
                    <Link to={`/correction/${exam._id}`}>Corriger</Link>
                  </div>
                </footer>
              </div>
            </div>)}
          </div>
        </div>
      </>
    );
  }
}

export default ExamListDisplayer;
