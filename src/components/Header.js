import React, { Component } from 'react';
import Github from '../images/socialicons/github.png';
import Twitter from '../images/socialicons/twitter.png';
import Linkedin from '../images/socialicons/linkedin.png';
import Medium from '../images/socialicons/medium.png';

export default class Header extends Component {
    render() {
        return(
            <div className="Header">
                <div className="Title">
                    <h1 id="Header">Bryn Catherine Bennett</h1>
                    <h3 id="Sub-header">Full-Stack Software Developer - Problem Solver - Adventurer</h3>
                </div>

                <div className="Social-icons">
                    <a href="https://twitter.com/BrynBennett7" target="_blank"><img src={Twitter} className="social-icon" /></a>
                    <a href="https://medium.com/@bryn.bennett" target="_blank"><img src={Medium} className="social-icon" /></a>
                    <a href="https://github.com/bbennett7" target="_blank"><img src={Github} className="social-icon" /></a>
                    <a href="https://www.linkedin.com/in/bryncbennett/" target="_blank"><img src={Linkedin} className="social-icon" /></a>
                </div>
            </div>
        )
    }
}