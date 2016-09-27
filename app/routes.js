import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import UserDetails from './components/UserDetails';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="userdetails" component={UserDetails} />
	</Route>
);
