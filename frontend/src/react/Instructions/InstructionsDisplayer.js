import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class InstructionsDisplayer extends Component {
    static propTypes = {
        triggerActive: PropTypes.func.isRequired,
        triggerInactive: PropTypes.func.isRequired,
        dropdownGroup: PropTypes.object,
        dropdownSession: PropTypes.object,
        handleInput: PropTypes.func,
        handleSelect: PropTypes.func,
        groups: PropTypes.array,
    };

    render() {
        const {
            dropdownSession,
            dropdownGroup,
            triggerActive,
            triggerInactive,
            handleInput,
            handleSelect,
            groups
        } = this.props;
        return (
            <section className="section">
                <div className="box notification is-info"><p className="title">Instructions</p></div>
                <div className="box">
                    <div className="columns">
                        <div className="column is-one-third">
                            <span className="title is-5">Module et séance:</span>
                        </div>
                        <div className="column is-two-thirds has-text-right">
                            <div className="columns">
                                <div className="column is-half">
                                    <div className="dropdown is-right is-hoverable">
                                        <div className="dropdown-trigger">
                                            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                                <span>{dropdownGroup.value}</span>
                                                <span className="icon is-small"><i className="fas fa-angle-down" aria-hidden="true"/></span>
                                            </button>
                                        </div>
                                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                            <div className="dropdown-content">
                                                {groups && groups.length ? groups.map((group) =>
                                                    <button className="dropdown-item is-a-link-custom"
                                                            key={group._id}
                                                            onMouseOver={triggerActive}
                                                            onMouseOut={triggerInactive}
                                                            onClick={handleSelect(group.name,group._id,"dropdownGroup")}>{group.name}</button>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-half">
                                    <div className={dropdownSession.value === "Sélectionner d'abord un groupe." ? "dropdown is-right" : "dropdown is-right is-hoverable"}>
                                        <div className="dropdown-trigger">
                                            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                                <span>{dropdownSession.value}</span>
                                                <span className="icon is-small"><i className="fas fa-angle-down" aria-hidden="true"/></span>
                                            </button>
                                        </div>
                                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                            <div className="dropdown-content">
                                                {dropdownSession.value !== "Sélectionner d'abord un groupe." ?
                                                    groups.find((aGroup) => {return aGroup.name === dropdownGroup.value}).classes.map((aClass) =>
                                                        <button className="dropdown-item is-a-link-custom"
                                                                key={aClass._id}
                                                                onMouseOver={triggerActive}
                                                                onMouseOut={triggerInactive}
                                                                onClick={handleSelect(aClass.date + " " + aClass.startTime + " to " + aClass.endTime,aClass._id,"dropdownSession")}>{aClass.date + " " + aClass.startTime + " to " + aClass.endTime}</button>
                                                    ) : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-one-third"><span className="title is-5">Intitulé de l'examen:</span></div>
                        <div className="column is-two-thirds"><input className="input"
                                                                     name="title"
                                                                     onChange={handleInput}
                                                                     type="text"
                                                                     placeholder="Epreuve..."/></div>
                    </div>
                    <div className="columns">
                        <div className="column is-one-third"><span className="title is-5">Rappels:</span></div>
                        <div className="column is-two-thirds"><textarea className="textarea"
                                                                        name="reminder"
                                                                        rows="6"
                                                                        onChange={handleInput}
                                                                        placeholder="Rappels..."/></div>
                    </div>
                    <div className="columns">
                        <div className="column is-one-third"><span className="title is-5">Consignes:</span></div>
                        <div className="column is-two-thirds"><textarea className="textarea"
                                                                        name="instruction"
                                                                        rows="10"
                                                                        onChange={handleInput}
                                                                        placeholder="Consignes..."/></div>
                    </div>
                </div>
            </section>
        );
    }
}
