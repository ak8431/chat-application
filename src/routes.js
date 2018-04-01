import React from 'react';
import { Switch, Route } from 'react-router';
import App from './App';
import Home from './basics/home';
import About from './basics/about';
import Settings from './basics/settings';
import Contact from './basics/contact';
import Profile from './basics/profile';
import Notifications from './basics/notifications';
import ChatContainer from './chat/chatContainer';
// import { browserHistory } from 'browser-history';

var routes = (
		<div>
			<App>
				<Switch>
					{/* <Route path="/" component={Home} />				 */}
					<Route path="/home" component={Home} />
					<Route path="/chat" component={ChatContainer} />
					<Route path="/about" component={About} />
					<Route path="/contact-us" component={Contact} />
					<Route path="/profile" component={Profile} />
					<Route path="/settings" component={Settings} />
					<Route path="/notifications" component={Notifications} />
				</Switch>
			</App>
		</div>
		);

export default routes;