import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import {BrowserRouter, Route,Switch,Link} from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <Switch>
        <Route path='/' component={App}/>
        <Route path='/page1' component={Page1}/>
        <Route path='/page2' component={Page2}/>
        <Route path='/page3' component={Page3}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
