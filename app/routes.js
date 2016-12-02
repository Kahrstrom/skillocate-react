import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import ProfileContainer from './containers/ProfileContainer';
import ProjectRequest from './components/ProjectRequest';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="userdetails" component={ProfileContainer} />
		<Route path="projectrequests" component={ProjectRequest} />
	</Route>
);
