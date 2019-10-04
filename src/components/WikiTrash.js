import React, { Component } from 'react';

export default class WikiTrash extends Component {
    render() {
        return(
            <div className="Wiki-trash">
                <h2 className="Page-header">Wikitrash</h2>
                <h4><a href="https://wikitrash.herokuapp.com" className="App-link">Visit WikiTrash</a></h4>
                <h4><a href="https://github.com/bbennett7/wikitrash" className="App-link">GitHub Repository (Front End)</a></h4>
                <h4><a href="https://github.com/bbennett7/developer-wikitrash" className="App-link">GitHub Repository (API)</a></h4>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/jskcDg8LbUo" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}