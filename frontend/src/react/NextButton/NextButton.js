import React from 'react';
import {Link} from 'react-router-dom';

const NextButton = (props) => (
    <Link to={props.route} classname="button is-info is-medium">
        <div className='button is-info is-medium'>
            Créer mon examen
        </div>
    </Link>
);

export default NextButton;
