import React, { Component } from 'react';
import MainContent from '../components/MainContent.js'
import YouTube from 'react-youtube';

export default class WikiTrash extends Component {
    render() {
        return(
            <div className="Wiki-trash">
                <h2>Wikitrash</h2>
                <MainContent />
                <YouTube videoId="jskcDg8LbUo"/>
            </div>
        )
    }
}