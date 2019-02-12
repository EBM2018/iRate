import React,{Component} from 'react';

const NextButton = (props) =>  (
            <div to={props.route} className="button is-rounded is-info is-large">
                Suivant
            </div>);

export default NextButton;