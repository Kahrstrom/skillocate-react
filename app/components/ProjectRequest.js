import React from 'react';
import SKPageHeader from './SKPageHeader';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import { List } from 'material-ui/List';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Row, Col, Grid} from 'react-flexbox-grid/lib/index';
import ResourceRequest from './ResourceRequest';
import Theme from '../material-ui.theme';
import SKProjectRequestForm from './forms/SKProjectRequestForm';
import ChipInput from 'material-ui-chip-input';
import request from '../resources/json/request.json';

const styles = {
    tabs: {
        backgroundColor: Theme.palette.primary2Color
    },
    card: {
        margin: '4px 0px 4px 0px'
    },
    grid: {
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
    }
};

const ProjectRequest = () => {
    const tags = [];
    const suggestions = [];
    const interested = [];

    request.tags.forEach((tag) => tags.push(tag.text));
    request.suggestions.forEach((req, index) => suggestions.push(<ResourceRequest person={req.person} index={index} />));
    request.interested.forEach((req, index) => interested.push(<ResourceRequest person={req.person} index={index} />));
    return (
        <div>
            <SKPageHeader header1={request.title} header2={request.customer + ', ' + request.location} header3={request.status} />
            <Grid>
                <Row center="lg">
                    <Col lg="6">
                        <Grid style={styles.grid}>
                            <Row start="xs">
                                <Col xs={12} md={4} lg={4}>
                                    <Card style={styles.card}>
                                        <CardHeader title="Om"/>
                                        <CardText >
                                            {request.about}
                                        </CardText>
                                    </Card>
                                </Col>
                                <Col xs={12} md={4} lg={4}>
                                    <Card style={styles.card}>
                                        <CardHeader title="Taggar"/>
                                        <CardText >
                                            <ChipInput
                                                value={tags}
                                                fullWidth={true}
                                                onRequestAdd={(chip) => tags.push(chip)}
                                                onRequestDelete={(chip) => tags.filter((t) => t !== chip)}
                                                />
                                        </CardText>
                                    </Card>
                                </Col>
                                <Col xs={12} md={4} lg={4}>
                                    <Card style={styles.card}>
                                        <CardHeader title="Projektdetaljer"/>
                                        <CardText >
                                            <SKProjectRequestForm request={request} />
                                        </CardText>
                                    </Card>
                                </Col>
                            </Row>
                        </Grid>
                        <Grid style={styles.grid}>
                            <Row>
                                <Col xs={12}>
                                    <Card style={{margin: '4px 0px 4px 0px'}}>
                                        <Tabs>
                                            <Tab style={styles.tabs} label="Förslag">
                                                <List>
                                                    {suggestions}
                                                </List>
                                            </Tab>
                                            <Tab style={styles.tabs} label="Intresserade">
                                                <List>
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
                    </Col>
                </Row>
            </Grid>
            <Paper style={styles.footer}>
                <Row center="xs">
                    <Col xs={2}>
                        <div style={styles.footerNumber}>4</div>
                        <div style={styles.footerText}>Förfrågningar</div>
                    </Col>
                    <Col xs={2}>
                        <div style={styles.footerNumber}>0</div>
                        <div style={styles.footerText}>Svar</div>
                    </Col>
                    <Col xs={2}>
                        <div style={styles.footerNumber}>2</div>
                        <div style={styles.footerText}>Intresserade</div>
                    </Col>
                </Row>
            </Paper>
        </div>
    );
};

export default ProjectRequest;
