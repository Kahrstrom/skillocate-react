import { connect } from 'react-redux';
import Profile from '../components/Profile';
import React, { Component, PropTypes } from 'react';

class ProfileContainer extends Component {
    componentWillMount() {
        this.props.fetchUserDetails();
    }
    render() {
        return (
            <Profile userDetails={this.props.userDetails} />
        );
    }
}

const mapDispatchToProps = (dispath) => {
    return {
        fetchUserDetails: () => {
            dispath({type: 'GET_USER_DETAILS'});
        }
    };
};

const mapStateToProps = (state) => {
    return {
        userDetails: state.userDetails.userDetails
    };
};

ProfileContainer.propTypes = {
    userDetails: PropTypes.object,
    fetchUserDetails: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
