import React, { PropTypes } from 'react';
import {ListItem} from 'material-ui/List';
import Theme from '../../material-ui.theme';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';

const SKCertificateListItem = ({certificate, index}) => {
    return (
        <ListItem
        style={index % 2 === 0 ? {backgroundColor: '#F5F2F2'} : {backgroundColor: '#FFF'}}
        primaryText={certificate.title + ' - ' + certificate.type}
        leftAvatar={<Avatar
                        backgroundColor={Theme.palette.certificateColor}
                        icon={<FontIcon className="material-icons">star</FontIcon>}
                        />}
        secondaryText={certificate.date + ', ' + certificate.school}
      />
    );
};

SKCertificateListItem.propTypes = {
    certificate: PropTypes.object,
    index: PropTypes.number
};
export default SKCertificateListItem;
