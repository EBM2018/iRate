import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Error extends Component {

    state = {
        errorMessage: ''
    };

    static propTypes = {
        errors: PropTypes.object,
        close: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.parseError();
    }

    parseError = () => {
        const { message } = this.props.errors;
        this.setState({ errorMessage: message });
    }

    close = () => {
        this.props.close();
    }

    render() {
        const { errorMessage } = this.state;
        // TODO: make it looks better and handle closing/fade out
        return (
            <div className="notification is-danger">
                <button className="delete" onClick={this.close}></button>
                {errorMessage}
            </div>
        )
    }
}