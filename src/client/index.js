import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import 'normalize.css';
import './assests/css/app.css';

const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod((
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	), document.getElementById('root')
);