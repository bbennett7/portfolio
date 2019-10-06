import React, { Component } from 'react';
import Mountain from '../images/Mountain.jpg';


export default class Contact extends Component {
    render() {
        return(
            <div className="Contact">
                <h2 className="Page-header">Contact</h2>
                <h3 id="Contact-content">If you are interested in hiring a freelance web developer or just want to connect, shoot Bryn a note at <span id="Email">bryn.bennett@gmail.com</span></h3>
                <img className="Mountain" src={Mountain} />
            </div>
        )
    }
}