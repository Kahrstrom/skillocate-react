import Toolbar from 'material-ui/Toolbar';
import React, { PropTypes } from 'react';
import Theme from '../material-ui.theme';

const styles = {
    toolbar: {
        backgroundColor: Theme.palette.primary2Color,
        height: '20%'
    }
};

const SKSideNavToolbar = ({children}) => {
    return (
        <Toolbar style={styles.toolbar}>
            {children}
        </Toolbar>
    );
};

SKSideNavToolbar.propTypes = {
    children: PropTypes.array
};

export default SKSideNavToolbar;
