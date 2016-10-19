import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';

const SKSideNav = ({children}) => {
    return (
        <Drawer width="400" openSecondary="true">
            {children}
        </Drawer>
    );
};

SKSideNav.propTypes = {
    children: PropTypes.array
};
export default SKSideNav;
