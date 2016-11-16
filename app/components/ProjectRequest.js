import React from 'react';
import SKSideNavToolbar from './SKSideNavToolbar';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Row, Col, Grid} from 'react-flexbox-grid/lib/index';
import ResourceRequest from './ResourceRequest';
import Theme from '../material-ui.theme';

const styles = {
    tabs: {
        backgroundColor: Theme.palette.primary2Color
    },
    card: {
        margin: '4px 0px 4px 0px'
    },
    grid: {
        margin: '4px 8px 4px 8px'
    }
};

const ProjectRequest = () => {
    const request = {
        title: 'Mail Gateway',
        customer: 'Lundalogik',
        location: 'Lund',
        status: 'Förfrågan',
        startdate: '2016-12-01',
        enddate: '2016-12-01',
        hours: '800',
        numberPeople: '2',
        resourceRequests: [
            {
                person: {
                    idperson: 1,
                    name: 'Jonatan Kåhrström',
                    title: 'Application Consultant',
                    image: '../resources/images/jka.png',
                    tags: [
                        {
                            text: 'Javascript'
                        },
                        {
                            text: 'C#'
                        },
                        {
                            text: 'Project management'
                        }
                    ]
                },
                status: 'Accepted'
            },
            {
                person: {
                    idperson: 2,
                    name: 'Andreas Åström',
                    title: 'Developer',
                    image: '../resources/images/aas.png',
                    tags: [
                        {
                            text: 'Javascript'
                        },
                        {
                            text: 'C#'
                        },
                        {
                            text: 'SQL'
                        }
                    ]
                },
                status: 'Accepted'
            },
            {
                person: {
                    idperson: 3,
                    name: 'Jenny Svensson',
                    title: 'CEO',
                    tags: [
                        {
                            text: 'Project management'
                        },
                        {
                            text: 'Business'
                        }
                    ]
                },
                status: 'Declined'
            }
        ]
    };
    return (
        <div>
            <SKSideNavToolbar>
                <Grid>
                    <Row center="xs" style={{marginTop: '32px'}}>
                        <Col xs={12}>
                            <div style={{color: 'white', textAlign: 'center', fontSize: '48px'}}>{request.title}</div>
                        </Col>
                    </Row>
                    <Row center="xs" style={{marginTop: '8px'}}>
                        <Col xs={12}>
                            <div style={{color: 'white', textAlign: 'center', fontSize: '18px'}}>{request.customer}, {request.location}</div>
                        </Col>
                    </Row>
                     <Row center="xs" style={{marginTop: '8px', marginBottom: '24px'}}>
                        <Col xs={12}>
                            <div style={{color: 'white', textAlign: 'center', fontSize: '14px'}}>{request.status}</div>
                        </Col>
                    </Row>
                </Grid>
            </SKSideNavToolbar>
            <Grid>
                <Row center="xs">
                    <Col md="6">
                        <Grid style={styles.grid}>
                            <Row start="xs">
                                <Col xs={12} md={4} lg={4}>
                                    <Card style={styles.card}>
                                        <CardHeader title="Om"/>
                                        <CardText >
                                            Bacon ipsum dolor amet ham brisket andouille, porchetta tri-tip ham hock kevin t-bone. Corned beef cupim tail chuck sausage meatball ribeye shoulder beef t-bone pork chop spare ribs.
                                        </CardText>
                                    </Card>
                                </Col>
                                <Col xs={12} md={4} lg={4}>
                                    <Card style={styles.card}>
                                        <CardHeader title="Taggar"/>
                                        <CardText >
                                            Bacon ipsum dolor amet ham brisket andouille, porchetta tri-tip ham hock kevin t-bone. Corned beef cupim tail chuck sausage meatball ribeye shoulder beef t-bone pork chop spare ribs.
                                        </CardText>
                                    </Card>
                                </Col>
                                <Col xs={12} md={4} lg={4}>
                                    <Card style={styles.card}>
                                        <CardHeader title="Projektdetaljer"/>
                                        <CardText >
                                            <List>
                                                <ListItem primaryText={<Row><Col xs={9}><div>Antal timmar:</div></Col><Col xs={3}><div>800</div></Col></Row>}/>
                                                <ListItem primaryText={<Row><Col xs={9}><div>Antal personer:</div></Col><Col xs={3}><div>3</div></Col></Row>}/>
                                                <ListItem primaryText={<Row><Col xs={9}><div>Plats:</div></Col><Col xs={3}><div>Lund</div></Col></Row>}/>
                                                <ListItem primaryText={<Row><Col xs={9}><div>Startdatum:</div></Col><Col xs={3}><div>2016-12-01</div></Col></Row>}/>
                                                <ListItem primaryText={<Row><Col xs={9}><div>Slutdatum:</div></Col><Col xs={3}><div>2016-03-18</div></Col></Row>}/>
                                            </List>
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
                                            <Tab style={styles.tabs} label="Förfrågningar">
                                                <List>
                                                    <ResourceRequest person={request.resourceRequests[0].person} />
                                                    <ResourceRequest person={request.resourceRequests[1].person} />
                                                    <ResourceRequest person={request.resourceRequests[2].person} />
                                                </List>
                                            </Tab>
                                            <Tab style={styles.tabs} label="Intresserade">
                                            test
                                            </Tab>
                                        </Tabs>
                                    </Card>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default ProjectRequest;
