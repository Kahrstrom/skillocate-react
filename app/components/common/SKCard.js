import React, { PropTypes } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const styles = {
    test: {
        backgroundColor: 'green'
    }
};

const SKCard = ({title, body, subtitle}) => {
    return (
        <Card>
            <CardHeader
            title={title}
            subtitle={subtitle}
            />
            <CardText>
            {body}
            </CardText>
        </Card>
        asdasddasd
        <div style={styles.test}>LOL</div>
    );
};

SKCard.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    subtitle: PropTypes.string
};
export default SKCard;
