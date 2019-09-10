import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

export default class Header extends Component {
    render() {
        return(
            <div className="App-header">
                <div className="Title">
                    <h1 id="Header">Bryn Catherine Bennett</h1>
                    <h3 id="Sub-header">Full-Stack Software Developer - Problem Solver - Adventurer</h3>
                </div>

                <div className="Social-icons">
                    <SocialIcon url="https://www.linkedin.com/in/bryncbennett/" target="_blank"/>
                    <SocialIcon url="https://github.com/bbennett7" target="_blank"/>
                    <SocialIcon url="https://medium.com/@bryn.bennett" target="_blank"/>
                    <SocialIcon url="https://twitter.com/BrynBennett7"  target="_blank"/>
                </div>
            </div>
        )
    }
}