import React, { PropTypes } from 'react';
import SKNavBar from './common/SKNavBar';
// import {AppBar} from 'material-ui';

const App = ({ children }) => {
    return(
        <div>
            <SKNavBar />
            { children }
        </div>
    );
};
App.propTypes = {
    children: PropTypes.object
};

export default App;
