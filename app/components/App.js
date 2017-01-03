import React, { PropTypes } from 'react';
import SKNavBarTest from './SKNavBar/SKNavBarTest';
// import {AppBar} from 'material-ui';

const App = ({ children }) => {
    return(
        <div>
            <SKNavBarTest />
            { children }
        </div>
    );
};
App.propTypes = {
    children: PropTypes.object
};

export default App;
