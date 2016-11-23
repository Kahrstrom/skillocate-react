import React, { PropTypes } from 'react';
import {ListItem} from 'material-ui/List';
import Chip from 'material-ui/Chip';
import Checkbox from 'material-ui/Checkbox';
import { Row } from 'react-flexbox-grid/lib/index';
import Theme from '../material-ui.theme';

const styles = {
    row: {
        float: 'right',
        marginRight: '16px'
    }
};

const SKResourceListItem = ({person, index, projectTags}) => {
    const tags = [];
    person.tags.forEach((tag) => {
        const backgroundColor = (projectTags.findIndex(function(item) {return item === tag.text;}) > -1) ? Theme.palette.accent1Color : Theme.palette.primaryGreyColor;
        tags.push(<Chip labelColor={'white'} style={{margin: 4, backgroundColor: backgroundColor}} key={tag.text}>{tag.text}</Chip>);
    });
    return (
        <ListItem
        style={index % 2 === 0 ? {backgroundColor: '#F5F2F2'} : {backgroundColor: '#FFF'}}
        primaryText={person.name}
        leftCheckbox={<Checkbox />}
        secondaryText={person.title}
        onTouchTap={() => {console.log('123123');}}
        children={<Row style={styles.row}>{tags}</Row>}
      />
    );
};

SKResourceListItem.propTypes = {
    person: PropTypes.object,
    index: PropTypes.number,
    projectTags: PropTypes.array
};
export default SKResourceListItem;
