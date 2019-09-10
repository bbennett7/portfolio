import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';


export default class MenuBar extends Component {
    render() {
        return(
            <div className="Menu">
                <h4>Home</h4>
                <h4>About</h4>
                <h4>Erin Boyle Design</h4>
                <h4>WikiTrash</h4>
                <h4>CodeCoach</h4>
                <h4>Bucketlist</h4>
                <h4>Contact</h4>
                <SocialIcon url="https://www.linkedin.com/in/bryncbennett/" target="_blank"/>
                <SocialIcon url="https://github.com/bbennett7" target="_blank"/>
                <SocialIcon url="https://medium.com/@bryn.bennett" target="_blank"/>
                <SocialIcon url="https://twitter.com/BrynBennett7"  target="_blank"/>
             </div>
        )
    }
}