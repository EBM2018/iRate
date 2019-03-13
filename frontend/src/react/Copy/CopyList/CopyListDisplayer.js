import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class CopyListDisplayer extends Component {
    render() {
        return (
            <div className="columns is-variable is-multiline is-8">
                <div className="column is-one-third">
                    <div className="box">
                        <div className="title">Examen en cours</div>
                    </div>
                {this.props.exams.length && this.props.exams.map((exam) =>
                exam.isPassing ? <div key={exam._id} className="content"> <div className="card">
                            <header className="card-header">
                                <p className="card-header-title has-no-margin-bottom">Examen: {exam.title}</p>
                                <div className="card-header-icon">
                                    <Link to={`copy/${exam._id}`} className="tag is-warning tooltip" data-tooltip="Cliquez ici pour passer l'épreuve">En cours</Link>
                                </div>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <p className="content">Groupe: <strong>{exam.group ? exam.group.name : "Pas de groupe assigné"}</strong></p>
                                    <p className="content">{exam.session ? "Le" : null} <strong>{exam.session ? exam.session.date : "Pas de session assignée"}</strong></p>
                                    <p className="content">{exam.session ? "De " : null} <strong>{exam.session ? exam.session.startTime.split(":").slice(0,2).join(":") : null}</strong> {exam.session ? " à " : null} <strong>{exam.session ? exam.session.endTime.split(":").slice(0,2).join(":") : "Pas d'heures assignées"}</strong></p>
                                </div>
                            </div>
                </div> </div>: null
                    )}
                </div>
                <div className="column is-one-third">
                    <div className="box">
                        <div className="title">Examens à passer</div>
                    </div>
                    {this.props.exams.length && this.props.exams.map((exam) =>
                        !exam.isPassing && !exam.isOver ? <div key={exam._id} className="content"> <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">Examen: {exam.title}</p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <p className="content">Groupe: <strong>{exam.group ? exam.group.name : "Pas de groupe assigné"}</strong></p>
                                    <p className="content">{exam.session ? "Le" : null} <strong>{exam.session ? exam.session.date : "Pas de session assignée"}</strong></p>
                                    <p className="content">{exam.session ? "De " : null} <strong>{exam.session ? exam.session.startTime.split(":").slice(0,2).join(":") : null}</strong> {exam.session ? " à " : null} <strong>{exam.session ? exam.session.endTime.split(":").slice(0,2).join(":") : "Pas d'heures assignées"}</strong></p>
                                </div>
                            </div>
                        </div> </div>: null
                    )}
                </div>
                <div className="column is-one-third">
                    <div className="box">
                        <div className="title">Examens passés</div>
                    </div>
                    {this.props.exams.length && this.props.exams.map((exam) =>
                        exam.isOver ? <div key={exam._id} className="content">
                            <div className="card is-disabled">
                            <header className="card-header">
                                <p className="card-header-title">Examen: {exam.title}</p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <p className="content">Groupe: <strong>{exam.group ? exam.group.name : "Pas de groupe assigné"}</strong></p>
                                    <p className="content">{exam.session ? "Le" : null} <strong>{exam.session ? exam.session.date : "Pas de session assignée"}</strong></p>
                                    <p className="content">{exam.session ? "De " : null} <strong>{exam.session ? exam.session.startTime.split(":").slice(0,2).join(":") : null}</strong> {exam.session ? " à " : null} <strong>{exam.session ? exam.session.endTime.split(":").slice(0,2).join(":") : "Pas d'heures assignées"}</strong></p>
                                </div>
                            </div>
                        </div>
                        </div>: null
                    )}
                </div>
            </div>
        );
    }
}
