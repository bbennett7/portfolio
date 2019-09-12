import React, { Component } from 'react';
import Menu from '../components/Menu.js'
import MainContent from '../components/MainContent.js'

export default class Main extends Component {
    render() {
        return(
            <div className="Main">
                <Menu />
                <MainContent />
            </div>
        )
    }
}