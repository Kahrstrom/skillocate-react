import React from 'react';
import { Link } from 'react-router';
import Toolbar from 'material-ui/Toolbar';
import SKUserDetailForm from './forms/SKUserDetailForm';
import Theme from '../material-ui.theme';
import SKSideNav from './SKSideNav';

const styles = {
    toolbar: {
        backgroundColor: Theme.palette.primary2Color,
        height: '20%'
    }
};

const UserDetails = () => {
    let education = {firstname: 'Jonatan', lastname: 'Kåhrström', email: 'jonatan.kahrstrom@gmail.com', birthdate: new Date('1988-01-22')};

    return (
        <div>
            <SKSideNav>
                <Toolbar style={styles.toolbar} />
                <SKUserDetailForm education={education}/>
            </SKSideNav>
            <h1>My details</h1>
            <Link to="/">Home</Link>
        </div>
    );
};

export default UserDetails;
