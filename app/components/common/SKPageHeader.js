import React, { PropTypes } from 'react';
import Theme from '../../material-ui.theme';

const styles = {
    header1: {
        color: 'white',
        fontSize: '48px'
    },
    header2: {
        color: 'white',
        fontSize: '18px'
    },
    header3: {
        color: Theme.palette.accent3Color,
        fontSize: '18px'
    },
    pageHeaderContainer: {
        backgroundColor: Theme.palette.primary2Color,
        height: '230px',
        position: 'relative',
    },
    pageHeader: {
        position: 'absolute',
        textAlign: 'center',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
};

const SKPageHeader = ({header1, header2, header3}) => {
    return (
        <div style={styles.pageHeaderContainer}>
            <div style={styles.pageHeader}>
                <h1 style={styles.header1}>{header1}</h1>
                <h2 style={styles.header2}>{header2}</h2>
                <h3 style={styles.header3}>{header3}</h3>
            </div>
        </div>
    );
};

SKPageHeader.propTypes = {
    header1: PropTypes.string,
    header2: PropTypes.string,
    header3: PropTypes.string
};

export default SKPageHeader;
