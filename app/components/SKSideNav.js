import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';

const styles = {
    drawer: {
        top: 64,
        width: 500
    }
};

const SKSideNav = ({children}) => {
    return (
        <Drawer containerStyle={styles.drawer}>
            {children}
        </Drawer>
    );
};

SKSideNav.propTypes = {
    children: PropTypes.array
};
export default SKSideNav;
