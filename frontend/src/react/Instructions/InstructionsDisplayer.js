import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class InstructionsDisplayer extends Component {
    static propTypes = {
        triggerDropdown: PropTypes.func.isRequired,
        dropdownModule: PropTypes.bool,
        handleInput: PropTypes.func.handleInput,
        dropdownClass: PropTypes.bool,
    };

    render() {
        return (
            <section className="section">
                <div className="box notification is-info"><p className="title">Instructions</p></div>
                <div className="box">
                    <div className="columns">
                        <div className="column is-two-thirds">
                            <span className="title is-5">Module de l'épreuve:</span>
                        </div>
                        <div className="column is-one-third has-text-right">
                            <div className={this.props.dropdownModule ? "dropdown is-active is-right" : "dropdown is-right"} onClick={this.props.triggerDropdown("dropdownModule")}>
                                <div className="dropdown-trigger">
                                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                        <span>Dropdown button</span>
                                        <span className="icon is-small"><i className="fas fa-angle-down" aria-hidden="true"/></span>
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <div className="dropdown-item">test</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-two-thirds">
                            <span className="title is-5">Sélectionner une séance:</span>
                        </div>
                        <div className="column is-one-third has-text-right">
                            <div className={this.props.dropdownClass ? "dropdown is-active is-right" : "dropdown is-right"} onClick={this.props.triggerDropdown("dropdownClass")}>
                                <div className="dropdown-trigger">
                                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                        <span>Choisir</span>
                                        <span className="icon is-small"><i className="fas fa-angle-down" aria-hidden="true"/></span>
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <div className="dropdown-item">test</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-half"><span className="title is-5">Intitulé de l'examen:</span></div>
                        <div className="column is-half"><input className="input"
                                                               name="title"
                                                               onChange={this.props.handleInput}
                                                               type="text"
                                                               placeholder="Epreuve..."/></div>
                    </div>
                    <div className="columns">
                        <div className="column is-half"><span className="title is-5">Rappels:</span></div>
                        <div className="column is-half"><textarea className="textarea"
                                                                  name="reminder"
                                                                  onChange={this.props.handleInput}
                                                                  placeholder="Rappels..."/></div>
                    </div>
                    <div className="columns">
                        <div className="column is-half"><span className="title is-5">Consignes:</span></div>
                        <div className="column is-half"><textarea className="textarea"
                                                                  name="instruction"
                                                                  onChange={this.props.handleInput}
                                                                  placeholder="Consignes..."/></div>
                    </div>
                </div>
            </section>
        );
    }
}
