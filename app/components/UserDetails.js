import React from 'react';
import { Link } from 'react-router';
import SKUserDetailForm from './forms/SKUserDetailForm';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import SKSideNav from './SKSideNav';


const UserDetails = () => {
    let education = {firstname: 'Jonatan', lastname: 'Kåhrström', email: 'jonatan.kahrstrom@gmail.com', birthdate: new Date('1988-01-22'), position: 'Application consultant'};

    return (
        <div>
            <SKSideNav>
                <h4 style={{color: 'white', textAlign: 'center'}}>Jonatan Kåhrström</h4>
                <Avatar
                    icon={<FontIcon className="material-icons">portrait</FontIcon>}
                    size={160}
                    />
                <SKUserDetailForm details={education}/>
            </SKSideNav>
            <h1>My details</h1>
            <Link to="/">Home</Link>
        </div>
    );
};

export default UserDetails;
