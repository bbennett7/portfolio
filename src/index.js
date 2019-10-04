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
            <Route exact path="/About" component={About} />
            <Route exact path="/ErinBoyleDesign" component={EBDesign} />
            <Route exact path="/WikiTrash" component={WikiTrash} />
            <Route exact path="/CodeCoach" component={CodeCoach} />
            <Route exact path="/BucketList" component={Bucketlist} />
            <Route exact path="/Contact" component={Contact} />
        </React.Fragment>
    </Router>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
