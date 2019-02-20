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
                    <div className="field" onClick={toggleScaleCheck}>
                        <input type="checkbox" name="switchScale" className="switch is-info" checked={didChecked}/>
                            <label>Afficher le barème ?</label>
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
