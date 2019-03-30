import React, {Component} from 'react';
import homepage from '../../images/homepage.png';
import {Link} from 'react-router-dom';

export default class Homepage extends Component {
  render() {
    return (
      <>
        <div className="hero-body">
          <div className="container">
            <div className="title has-text-info">Bienvenue sur iRate</div>
            <div className="subtitle">La plateforme dédiée au passage d'examens en ligne.</div>
            <div className="buttons">
              <Link to={"/exams"} className="button is-large is-info">Je suis professeur</Link>
              <Link to={"/copies"} className="button is-large is-inverted is-info">Je suis élève</Link>
            </div>
          </div>
        </div>
        <img src={homepage} alt="Homepage of irate, which is a desk with a lot of stuff on it." className="is-homepage"/>
      </>
    );
  }
}
