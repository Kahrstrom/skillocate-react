import React, { PropTypes } from 'react';
import {ListItem} from 'material-ui/List';
import Chip from 'material-ui/Chip';
import Checkbox from 'material-ui/Checkbox';
import { Row } from 'react-flexbox-grid/lib/index';
import Theme from '../material-ui.theme';

const styles = {
    chip: {
        margin: 4,
        backgroundColor: Theme.palette.accent1Color
    }
};

const ResourceRequest = ({person}) => {
    const tags = [];
    person.tags.forEach((tag) =>
        tags.push(<Chip style={styles.chip} key={tag.text}>{tag.text}</Chip>)
    );
    return (
        <ListItem
        primaryText={person.name}
        secondaryText={person.title}
        children={<Row style={{float: 'right'}}>{tags}</Row>}
        leftCheckbox={<Checkbox />}
      />
    );
};

ResourceRequest.propTypes = {
    person: PropTypes.object
};
export default ResourceRequest;
