import React, { Component } from 'react';
import {ReactComponent as Github} from '../../assets/icons8-github.svg';
import {ReactComponent as Web} from '../../assets/icons8-website.svg';
import PropertiiHome from '../../assets/PropertiiHome.png';
import PropertiiAccount from '../../assets/PropertiiAccount.png';
import PropertiiMgmtHome from '../../assets/PropertiiBuildingMgmtHome.png';

export default class Propertii extends Component {
    render() {
        return(
            <div className="Propertii">
                <div className='componentHeaderWrapper'>
                <h2 className="Page-header">Propertii</h2>
                <a href="https://propertii.us/" className="App-link" target="blank"><Web className='linkIcon' /></a>

                <a href="https://github.com/bbennett7/properti-web-app" target="blank"><Github className='linkIcon' /> (Frontend)</a>
                <a href="https://github.com/bbennett7/properti-server" target="blank"><Github className='linkIcon' /> (Backend)</a>

                </div>
                <p>React, Express, PostgreSQL, Yelp API, Firebase</p>
                <p>Propertii is a web application that allows building managers and residents to connect on and track building repairs. Built using React, Express, and PostgreSQL, residents can open up tasks that need tending to and add notes about what exactly is wrong.</p>
                <p>Once this has been added, the building manager will see it on their list of open tasks. The building manager can then search for a local service (through integration with the Yelp API), change the status of the repair, and contact the resident.</p>

                <img src={PropertiiHome} className="projectImg" />
                <img src={PropertiiAccount} className="projectImg" />
                <img src={PropertiiMgmtHome} className="projectImg" />
            </div>
        )
    }
}