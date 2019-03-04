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
                            <div className="columns">
                                <div className="column is-half">
                                    <div className="dropdown is-right is-hoverable">
                                        <div className="dropdown-trigger">
                                            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                                <span>{this.props.dropdownModule}</span>
                                                <span className="icon is-small"><i className="fas fa-angle-down" aria-hidden="true"/></span>
                                            </button>
                                        </div>
                                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                            <div className="dropdown-content">
                                                <a className="dropdown-item"
                                                   onMouseOver={this.props.triggerActive}
                                                   onMouseOut={this.props.triggerInactive}
                                                   onClick={this.props.handleSelect("test","dropdownModule")}>test</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-half">
                                    <div className="dropdown is-right is-hoverable">
                                        <div className="dropdown-trigger">
                                            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                                <span>{this.props.dropdownClass}</span>
                                                <span className="icon is-small"><i className="fas fa-angle-down" aria-hidden="true"/></span>
                                            </button>
                                        </div>
                                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                            <div className="dropdown-content">
                                                <a className="dropdown-item" onMouseOver={this.props.triggerActive} onMouseOut={this.props.triggerInactive} onClick={this.props.handleSelect("test","dropdownClass")}>test</a>
                                            </div>
                                        </div>
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
