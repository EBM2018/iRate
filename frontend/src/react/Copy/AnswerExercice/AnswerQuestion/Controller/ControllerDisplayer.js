import React, {Component} from 'react';

export default class ControllerDisplayer extends Component {
    render() {
        return (
            <div className="buttons">
               <button className="button is-medium is-info" onClick={this.props.handleControllerClick}>Save</button>
            </div>
        );
    }
}
