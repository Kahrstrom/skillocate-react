import React, { PropTypes } from 'react';
import {ListItem} from 'material-ui/List';
import Chip from 'material-ui/Chip';
import Checkbox from 'material-ui/Checkbox';
import { Row } from 'react-flexbox-grid/lib/index';
import Theme from '../material-ui.theme';
import FontIcon from 'material-ui/FontIcon';

const styles = {
    chip: {
        margin: 4,
        backgroundColor: Theme.palette.accent1Color
    },
    row: {
        float: 'right',
        marginRight: '16px'
    }
};

const ResourceRequest = ({person, index}) => {
    const tags = [];
    person.tags.forEach((tag) =>
        tags.push(<Chip labelColor={'white'} style={styles.chip} key={tag.text}>{tag.text}</Chip>)
    );
    return (
        <ListItem
        style={index % 2 === 0 ? {backgroundColor: '#F5F2F2'} : {backgroundColor: '#FFF'}}
        primaryText={person.name}
        secondaryText={person.title}
        rightIcon={<FontIcon className="material-icons">open_in_new</FontIcon>}
        children={<Row style={styles.row}>{tags}</Row>}
        leftCheckbox={<Checkbox />}
      />
    );
};

ResourceRequest.propTypes = {
    person: PropTypes.object,
    index: PropTypes.number
};
export default ResourceRequest;
