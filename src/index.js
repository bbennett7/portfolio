import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import EBDesign from './components/EBDesign';
import WikiTrash from './components/WikiTrash';
import CodeCoach from './components/CodeCoach';
import Bucketlist from './components/Bucketlist';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Render } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <React.Fragment>
            <Route path="/" component={App} />
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/erinboyledesign" component={EBDesign} />
            <Route exact path="/wikitrash" component={WikiTrash} />
            <Route exact path="/codecoach" component={CodeCoach} />
            <Route exact path="/bucketlist" component={Bucketlist} />
            <Route exact path="/contact" component={Contact} />
        </React.Fragment>
    </Router>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
