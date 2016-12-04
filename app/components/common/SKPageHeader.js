import React, { PropTypes } from 'react';
import { Row, Col, Grid} from 'react-flexbox-grid/lib/index';
import Theme from '../../material-ui.theme';
import Toolbar from 'material-ui/Toolbar';

const styles = {
    header1: {
        color: 'white',
        textAlign: 'center',
        fontSize: '48px'
    },
    header2: {
        color: 'white',
        textAlign: 'center',
        fontSize: '18px'
    },
    header3: {
        color: Theme.palette.accent3Color,
        textAlign: 'center',
        fontSize: '18px'
    },
    toolbar: {
        backgroundColor: Theme.palette.primary2Color,
        height: '20%'
    }
};

const SKPageHeader = ({header1, header2, header3}) => {
    return (
        <Toolbar style={styles.toolbar}>
            <Grid>
                <Row center="xs" style={{marginTop: '32px'}}>
                    <Col xs={12}>
                        <div style={styles.header1}>{header1}</div>
                    </Col>
                </Row>
                <Row center="xs" style={{marginTop: '8px'}}>
                    <Col xs={12}>
                        <div style={styles.header2}>{header2}</div>
                    </Col>
                </Row>
                    <Row center="xs" style={{marginTop: '8px', marginBottom: '24px'}}>
                    <Col xs={12}>
                        <div style={styles.header3}>{header3}</div>
                    </Col>
                </Row>
            </Grid>
        </Toolbar>
    );
};

SKPageHeader.propTypes = {
    header1: PropTypes.string,
    header2: PropTypes.string,
    header3: PropTypes.string
};

export default SKPageHeader;
