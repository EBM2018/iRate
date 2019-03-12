import React, { Component } from 'react';

export default class CopyListDisplayer extends Component {
    render() {
        return (
            <div className="columns is-variable is-multiline is-8">
                {this.props.exams.length && this.props.exams.map((exam) =>
                    <div key={exam._id} className="column is-one-third">
                        <div className={exam.isOver ? "card is-disabled":"card"}>
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
                    </div>)}
            </div>
        );
    }
}

/*

 */