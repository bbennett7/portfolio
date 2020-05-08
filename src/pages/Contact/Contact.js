import React, { Component } from 'react';
import Mountain from '../../assets/Mountain.jpg';


export default class Contact extends Component {
    render() {
        return(
            <div className="Contact">
                <h2 className="Page-header">Contact</h2>
                <h3 id="Contact-content">If you are interested in hiring a freelance web developer or just want to connect, you can send Bryn a note at <a href="mailto:bryn.bennett@gmail.com" id="Email">bryn.bennett@gmail.com</a></h3>
                <img className="Mountain" src={Mountain} />
            </div>
        )
    }
}