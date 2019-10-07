import React, { Component } from 'react';

export default class Bucketlist extends Component {
    render() {
        return(
            <div className="Bucketlist">
                <h2 className="Page-header">Bucketlist</h2>
                <h4><a href="https://my-bucketlist-app.herokuapp.com/" className="App-link" target="blank">Visit Bucketlist</a></h4>
                <h4><a href="https://github.com/bbennett7/sinatra-bucketlist-project" className="App-link" target="blank">GitHub Repository</a></h4>
                <p>Ruby, Sinatra</p>
                <p></p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/tmVBfThwrXA" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}