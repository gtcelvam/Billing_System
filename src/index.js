import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from "react-router-dom";
import './index.css';
import App from './App';
import Result from "./Result"

ReactDOM.render(
        <React.StrictMode>
          <Router>
            <Route path="/" exact component={App}/>
            <Route path="/invoice" exact component={Result}/>
          </Router>
        </React.StrictMode>,
        document.getElementById('root'));
