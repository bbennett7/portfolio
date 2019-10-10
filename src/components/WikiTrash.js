import React, { Component } from 'react';

export default class WikiTrash extends Component {
    render() {
        return(
            <div className="Wiki-trash">
                <h2 className="Page-header">Wikitrash</h2>
                <h4><a href="https://wikitrash.herokuapp.com" className="App-link" target="blank">Visit WikiTrash</a></h4>
                <h4><a href="https://github.com/bbennett7/wikitrash" className="App-link" target="blank">GitHub Repository (Front End)</a></h4>
                <h4><a href="https://github.com/bbennett7/developer-wikitrash" className="App-link" target="blank">GitHub Repository (API)</a></h4>
                <p>Ruby on Rails, React, Redux</p>
                <p>WikiTrash is a resource that gathers and provides information on the responsible disposal of different materials. Users can contribute information on these responsible disposal guidelines, vote on the quality and accuracy of information provided by other users, and search the database for information.</p>
                <p>The front-end is built as a single-page web application using React and Redux, which consumes a separate Ruby on Rails back-end API. The application uses React components and containers, and the Redux store updates in sync with database updates, creating a fluid user experience.</p>

                <iframe src="https://www.youtube.com/embed/jskcDg8LbUo" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}