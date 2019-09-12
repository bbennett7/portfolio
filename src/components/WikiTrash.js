import React, { Component } from 'react';
import MainContent from '../components/MainContent.js'
import YouTube from 'react-youtube';

export default class WikiTrash extends Component {
    render() {
        return(
            <div className="Wiki-trash">
                <h1>WikiTrash</h1>
                <MainContent />
                <YouTube videoId="jskcDg8LbUo"/>
            </div>
        )
    }
}