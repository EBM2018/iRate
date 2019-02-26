import React from 'react';

const NotFound = ({location}) => (
    <section className="hero">
        <div className="hero-head"></div>
        <div className="hero-body has-text-centered">
            <div className="container">
                <h1 className="title">Nothing found for this location: {location.pathname}</h1>
                <button className="button is-primary">Back to Homepage</button>
            </div>
        </div>
        <div className="hero-foot"></div>
    </section>
);

export default NotFound;