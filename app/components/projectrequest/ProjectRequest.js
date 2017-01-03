import React from 'react';
// Material
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import { List } from 'material-ui/List';
import { Tabs, Tab } from 'material-ui/Tabs';
import ChipInput from 'material-ui-chip-input';
// Flexbox
import { Row, Col, Grid} from 'react-flexbox-grid/lib/index';
// Skillocate components
import SKPageHeader from '../common//SKPageHeader';
import SKResourceListItem from '../common/SKResourceListItem';
import SKProjectRequestForm from '../forms/SKProjectRequestForm';
import Theme from '../../material-ui.theme';
// Static
import request from '../../resources/json/request.json';

const styles = {
    tabs: {
        backgroundColor: Theme.palette.primary2Color
    },
    card: {
        margin: '4px 0px 4px 0px'
    },
    row: {
        margin: '50px 8px 0px 8px'
    },
    footer: {
        height: '120px',
        marginTop: '50px',
        paddingTop: '12px',
        paddingBottom: '24px'
    },
    footerNumber: {
        color: Theme.palette.accent1Color,
        fontSize: '56px'
    },
    footerText: {
        fontSize: '24px'
    },
    cardFooter: {
        paddingTop: '16px',
        paddingBottom: '16px'
    },
    cardTitle: {
        fontSize: '18px'
    },
    list: {
        marginLeft: '16px',
        marginRight: '16px'
    }
};

const ProjectRequest = () => {
    let tags = [];
    const suggestions = [];
    const interested = [];

    request.tags.forEach((tag) => tags.push(tag.text));
    request.suggestions.forEach((req, index) => suggestions.push(<SKResourceListItem person={req.person} index={index} projectTags={tags} />));
    request.interested.forEach((req, index) => interested.push(<SKResourceListItem person={req.person} index={index} projectTags={tags} />));
    return (
        <div>
            <SKPageHeader header1={request.title} header2={request.customer + ', ' + request.location} header3={request.status} />
            <Grid>
                <Row start="xs" style={styles.row}>
                    <Col xs={12} md={4} lg={4}>
                        <Card style={styles.card}>
                            <CardHeader title="Om" titleStyle={styles.cardTitle}/>
                            <CardText >
                                {request.about}
                            </CardText>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <Card style={styles.card}>
                            <CardHeader title="Taggar" titleStyle={styles.cardTitle}/>
                            <CardText >
                                <ChipInput
                                    value={tags}
                                    fullWidth={true}
                                    onRequestAdd={(chip) => {
                                        tags.push(chip);
                                    }}
                                    onRequestDelete={(chip) => {
                                        tags = tags.filter((t) => t !== chip);
                                    }}
                                    />
                            </CardText>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <Card style={styles.card}>
                            <CardHeader title="Projektdetaljer" titleStyle={styles.cardTitle}/>
                            <CardText >
                                <SKProjectRequestForm request={request} />
                            </CardText>
                        </Card>
                    </Col>
                </Row>
                <Row style={styles.row}>
                    <Col xs={12}>
                        <Card style={styles.card}>
                            <Tabs>
                                <Tab style={styles.tabs} label="Förslag">
                                    <List style={styles.list}>
                                        {suggestions}
                                    </List>
                                </Tab>
                                <Tab style={styles.tabs} label="Intresserade">
                                    <List style={styles.list}>
                                        {interested}
                                    </List>
                                </Tab>
                            </Tabs>
                            <CardActions style={styles.cardFooter}>
                                <Row end="xs">
                                    <FlatButton label="Skicka förfrågan" />
                                    <FlatButton label="Bemanna!" />
                                </Row>
                            </CardActions>
                        </Card>
                    </Col>
                </Row>
            </Grid>
            <Paper style={styles.footer}>
                <Row center="xs">
                    <Col xs={3} md={2}>
                        <div style={styles.footerNumber}>{request.suggestions.length}</div>
                        <div style={styles.footerText}>Förslag</div>
                    </Col>
                    <Col xs={3} md={2}>
                        <div style={styles.footerNumber}>0</div>
                        <div style={styles.footerText}>Svar</div>
                    </Col>
                    <Col xs={3} md={2}>
                        <div style={styles.footerNumber}>{request.interested.length}</div>
                        <div style={styles.footerText}>Intresserade</div>
                    </Col>
                </Row>
            </Paper>
        </div>
    );
};

export default ProjectRequest;
