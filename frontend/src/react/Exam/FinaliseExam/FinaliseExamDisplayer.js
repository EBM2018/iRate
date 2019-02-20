import React from 'react'

const FinaliseExamDisplayer = ({toggleFinalise,id,toggleScaleCheck,didChecked}) => {
    return (
        <div className="modal is-active">
            <div className="modal-background"/>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Finaliser l'examen</p>
                    <button className="delete" aria-label="close"/>
                </header>
                <section className="modal-card-body">
                    <p className="content">
                        Vous vous apprêtez à finaliser l'examen afin de pouvoir le faire passer aux élèves.
                        Attention ! Cette opération bloquera toute modification possible de celui-ci, vérifiez bien toutes les questions de votre examen avant de continuer.
                    </p>
                    <div className="field" onClick={toggleScaleCheck}>
                        <input type="checkbox" name="switchScale" className="switch is-info" checked={didChecked}/>
                            <label>Souhaitez-vous afficher le barème ?</label>
                    </div>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success">Finaliser l'examen</button>
                    <button onClick={toggleFinalise('')} className="button">Annuler</button>
                </footer>
            </div>
        </div>
    )
};

export default FinaliseExamDisplayer;
