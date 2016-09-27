import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import './styles/main.scss';
import theme from './material-ui.theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <AppContainer>
            <Root store={store} history={history} />
        </AppContainer>
    </MuiThemeProvider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const NewRoot = require('./containers/Root').default;
        render(
            <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
                <AppContainer>
                    <NewRoot store={store} history={history} />
                </AppContainer>
            </MuiThemeProvider>,
            document.getElementById('root')
        );
    });
}
