import './styles/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import store from './store/store';
import routes from './routes/routes';

ReactDOM.render(
	<Provider store={store}>
    <Router history={hashHistory} routes={routes}/>
	</Provider>
	, document.getElementById('main'));
