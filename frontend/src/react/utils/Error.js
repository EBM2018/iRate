import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Error extends Component {

    state = {
        errorMessage: '',
        status: ''
    };

    static propTypes = {
        errors: PropTypes.object.isRequired,
        close: PropTypes.func
    };

    componentDidMount() {
        this.parseError();
    }

    parseError = () => {
        const { message, response } = this.props.errors;
        this.setState({
            ...this.state,
            errorMessage: message ? message : 'Not found',
            status: response ? response.status : '404'
        });
    };

    close = () => {
        this.props.close();
    };

    render() {
        const { errorMessage, status } = this.state;
        return (
            <>
                <div className="notification is-danger">
                    <button className="delete" onClick={this.close}></button>
                    {errorMessage}
                </div>
                <div className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <div class="has-text-centered">
                                <h2 className="subtitle">{status}</h2>
                                <span class="icon is-large has-text-warning py-2">
                                    <i class="fas fas fa-exclamation-triangle fa-3x"></i>
                                </span>
                            </div>
                            <div className="has-text-centered py-2">
                                <a className="button is-primary" href="/">Back Home</a>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}