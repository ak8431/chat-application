import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { browserHistory } from 'browser-history';
import './index.css';
// import App from './App';
// import Base1 from './basics/base1';
// import About from './basics/about';
// import Settings from './basics/settings';
// import Contact from './basics/contact';
// import Profile from './basics/profile';
// import Notifications from './basics/notifications';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';

ReactDOM.render(
	<BrowserRouter history={browserHistory} >
		{routes}
	</BrowserRouter>, 
	document.getElementById('root')
);
registerServiceWorker();
