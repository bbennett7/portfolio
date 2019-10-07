import React, { Component } from 'react';

export default class Bucketlist extends Component {
    render() {
        return(
            <div className="Bucketlist">
                <h2 className="Page-header">Bucketlist</h2>
                <h4><a href="https://my-bucketlist-app.herokuapp.com/" className="App-link" target="blank">Visit Bucketlist</a></h4>
                <h4><a href="https://github.com/bbennett7/sinatra-bucketlist-project" className="App-link" target="blank">GitHub Repository</a></h4>
                <p>Ruby, Sinatra</p>
                <p>Whether you are excited for the change in seasons, curious to track your travels, or have big life plans that you want to keep on the horizon, Bucketlist is a web app that allows you to manage these lists.</p>
                <p>Built using the Sinatra framework, Bucketlist allows users to create an account and add experiences to seasonal and life bucketlists. User passwords are encrypted and authenticated using the Oauth gem. Users can update the status (done or need to do) of an experience, and get a travel list along with individualized Google maps dynamically created based on the locations of the difference experiences.</p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/tmVBfThwrXA" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}