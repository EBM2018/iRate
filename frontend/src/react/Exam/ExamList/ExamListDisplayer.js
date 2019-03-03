import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ExamListDisplayer extends Component {
    render() {
        return (
            <div className="columns is-variable is-multiline is-8">
                {this.props.exams.length && this.props.exams.map((exam) =>
                    !exam.isFinalised ? <div key={exam._id} className="column is-one-third">
                            <div className="card">
                                <header className="card-header is-info"><p className="card-header-title">Examen: {exam.title}</p></header>
                                <div className="card-content">
                                    <div className="content">
                                        <p className="subtitle">Consignes</p>
                                        <p className="content">{exam.instruction || "Vous n'avez pas mis de consignes"}</p>
                                        <p className="subtitle">Rappels</p>
                                        <p className="content">{exam.reminder || "Vous n'avez pas mis de rappels"}</p>
                                        <p className="content">Barème: /{exam.scale}</p>
                                        <p className="content">Temps estimé: {exam.estimatedTime}</p>
                                    </div>
                                </div>
                                <footer className="card-footer">
                                    <div className="card-footer-item"><Link to={`/newexam/${exam._id}/exercices`}>Modifier</Link></div>
                                    <div className="card-footer-item is-a-link" onClick={this.props.toggleFinalise(exam._id)}>Finaliser</div>
                                </footer>
                            </div>
                        </div> : <div key={exam._id} className="column is-one-third">
                        <div className="card">
                            <header className="card-header"><p className="card-header-title">Examen: {exam.title}</p></header>
                            <div className="card-content">
                                <article className="message is-info is-small">
                                    <div className="message-body">
                                        Attention: cet examen est finalisé, vous ne pouvez plus le modifier !
                                    </div>
                                </article>
                                <div className="content">
                                    <p className="subtitle">Consignes</p>
                                    <p className="content">{exam.instruction || "Vous n'avez pas mis de consignes"}</p>
                                    <p className="subtitle">Rappels</p>
                                    <p className="content">{exam.reminder || "Vous n'avez pas mis de rappels"}</p>
                                    <p className="content">Barème: /{exam.scale}</p>
                                    <p className="content">Temps estimé: {exam.estimatedTime}</p>
                                </div>
                            </div>
                            <footer className="card-footer">
                                <div className="card-footer-item">Finalisé</div>
                                <div className="card-footer-item"><Link to={"/exam/" + exam._id} target={"_blank"}>Voir</Link></div>
                            </footer>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ExamListDisplayer;
