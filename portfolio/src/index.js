import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import SobreMim from './pages/SobreMim';
import Projetos from './pages/Projetos';
import PageNotFound from './pages/PageNotFound';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
        <BrowserRouter basename="/">
          <Switch>
            <Route path='/' component={ Home } exact />
            <Route path='/projetos' component={ Projetos } />
            <Route path='/sobre' component={ SobreMim }  />
            <Route path='/*' component={ PageNotFound }  />
            <App />
          </Switch>
        </BrowserRouter>
          
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
