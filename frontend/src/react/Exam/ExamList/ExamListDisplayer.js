import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ExamListDisplayer extends Component {
    render() {
        return (
            <div className="columns is-variable is-multiline is-8">
                {this.props.exams.length && this.props.exams.map((exam) =>
                    <div key={exam._id} className="column is-one-third">
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">Examen: {exam.title}</p>
                                <div className="card-header-icon">
                                    <div className="tags has-addons">
                                        <span className="tag is-white">Finalisé</span>
                                        {exam.isFinalised ? <span className="tag is-success">Oui</span> : <span className="tag is-warning">Non</span>}
                                    </div>
                                </div>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <p className="content">Groupe: <strong>{exam.group ? exam.group.name : "Pas de groupe assigné"}</strong></p>
                                    <p className="content">{exam.session ? "Le" : null} <strong>{exam.session ? exam.session.date : "Pas de session assignée"}</strong></p>
                                    <p className="content">{exam.session ? "De " : null} <strong>{exam.session ? exam.session.startTime.split(":").slice(0,2).join(":") : null}</strong> {exam.session ? " à " : null} <strong>{exam.session ? exam.session.endTime.split(":").slice(0,2).join(":") : "Pas d'heures assignées"}</strong></p>
                                    <p className="content">Barème: <strong>/{exam.scale}</strong></p>
                                    <p className="content">Temps estimé: <strong>{exam.estimatedTime}</strong></p>
                                </div>
                            </div>
                            {exam.isFinalised ?
                                <footer className="card-footer">
                                    <div className="card-footer-item">Finalisé</div>
                                    <div className="card-footer-item"><Link to={"/exam/" + exam._id} target={"_blank"}>Voir</Link></div>
                                </footer> : <footer className="card-footer">
                                    <div className="card-footer-item"><Link
                                        to={`/newexam/${exam._id}/exercices`}>Modifier</Link></div>
                                    <div className="card-footer-item is-a-link"
                                         onClick={this.props.toggleFinalise(exam._id)}>Finaliser
                                    </div>
                                </footer>
                            }
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ExamListDisplayer;
