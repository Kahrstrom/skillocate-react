import React from 'react';
import { Link } from 'react-router';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import EventPluginHub from 'react/lib/EventPluginHub';
import TapEventPlugin from 'react/lib/TapEventPlugin';


const SKNavbar = () => {
    EventPluginHub.injection.injectEventPluginsByName({ TapEventPlugin });

    return (
        <AppBar
            title="Skillocate"
            iconElementLeft={
                <IconMenu
                iconButtonElement={<IconButton><FontIcon className="material-icons icon-white">menu</FontIcon></IconButton>}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}>
                    <MenuItem
                        containerElement={<Link to="/" />}
                        primaryText="Home"
                        leftIcon={
                            <FontIcon className="material-icons">home</FontIcon>
                        } />
                    <MenuItem
                        containerElement={<Link to="/userdetails" />}
                        primaryText="My details"
                        leftIcon={
                            <FontIcon className="material-icons">person</FontIcon>
                        } />
                    <MenuItem
                        containerElement={<Link to="/userdetails" />}
                        primaryText="My profiles"
                        leftIcon={
                            <FontIcon className="material-icons">folder_special</FontIcon>
                        } />
                    <MenuItem
                        containerElement={<Link to="/userdetails" />}
                        primaryText="My projects"
                        leftIcon={
                            <FontIcon className="material-icons">assignment</FontIcon>
                        } />
                    <MenuItem
                        containerElement={<Link to="/userdetails" />}
                        primaryText="Customers"
                        leftIcon={
                            <FontIcon className="material-icons">business</FontIcon>
                        } />
                    <MenuItem
                        containerElement={<Link to="/requests" />}
                        primaryText="Resource requests"
                        leftIcon={
                            <FontIcon className="material-icons">priority_high</FontIcon>
                        } />
                </IconMenu>}
            iconElementRight={
                <IconButton tooltip="Sign out">
                    <FontIcon className="material-icons">exit_to_app</FontIcon>
                </IconButton>
            }
        />
    );
};


export default SKNavbar;
