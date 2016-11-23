import React, { PropTypes } from 'react';
import {ListItem} from 'material-ui/List';
import Theme from '../material-ui.theme';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';

const SKEducationListItem = ({education, index}) => {
    return (
        <ListItem
        style={index % 2 === 0 ? {backgroundColor: '#F5F2F2'} : {backgroundColor: '#FFF'}}
        primaryText={education.title + ' - ' + education.education}
        leftAvatar={<Avatar
                        backgroundColor={Theme.palette.educationColor}
                        icon={<FontIcon className="material-icons">school</FontIcon>}
                        />}
        secondaryText={education.startdate + ' - ' + education.enddate + ', ' + education.school}
      />
    );
};

SKEducationListItem.propTypes = {
    education: PropTypes.object,
    index: PropTypes.number
};
export default SKEducationListItem;
