import React, { PropTypes } from 'react';
import {ListItem} from 'material-ui/List';
import Chip from 'material-ui/Chip';
import { Row } from 'react-flexbox-grid/lib/index';
import Theme from '../material-ui.theme';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';

const styles = {
    row: {
        float: 'right',
        marginRight: '16px'
    }
};

const SKProjectListItem = ({project, index}) => {
    const tags = [];
    project.tags.forEach((tag) => {
        const backgroundColor = Theme.palette.accent1Color;
        tags.push(<Chip labelColor={'white'} style={{margin: 4, backgroundColor: backgroundColor}} key={tag.text}>{tag.text}</Chip>);
    });
    return (
        <ListItem
        style={index % 2 === 0 ? {backgroundColor: '#F5F2F2'} : {backgroundColor: '#FFF'}}
        primaryText={project.title + ' - ' + project.customer}
        leftAvatar={<Avatar
                        backgroundColor={Theme.palette.projectColor}
                        icon={<FontIcon className="material-icons">assignment</FontIcon>}
                        />}
        secondaryText={project.startdate + ' - ' + project.enddate + ', ' + project.location}
        children={<Row style={styles.row}>{tags}</Row>}
      />
    );
};

SKProjectListItem.propTypes = {
    project: PropTypes.object,
    index: PropTypes.number
};
export default SKProjectListItem;
