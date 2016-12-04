import React, {PropTypes} from 'react';
import SKPageHeader from '../common/SKPageHeader';
import { Card, CardHeader, CardText } from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Row, Col, Grid} from 'react-flexbox-grid/lib/index';
import Theme from '../../material-ui.theme';
import ChipInput from 'material-ui-chip-input';
import profile from '../../resources/json/profile.json';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import SKProjectListItem from '../common/SKProjectListItem';
import SKEducationListItem from '../common/SKEducationListItem';
import SKCertificateListItem from '../common/SKCertificateListItem';

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
    row: {
        margin: '50px 8px 0px 8px'
    },
    cardTitle: {
        fontSize: '18px'
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
    list: {
        marginLeft: '16px',
        marginRight: '16px'
    }
};

const Profile = ({isFetching, userDetails}) => {
    let tags = [];
    profile.tags.forEach((tag) => tags.push(tag.text));
    const projects = profile.projects.map((item, index) => <SKProjectListItem project={item} index={index}/>);
    const educations = profile.educations.map((item, index) => <SKEducationListItem education={item} index={index}/>);
    const certificates = profile.certificates.map((item, index) => <SKCertificateListItem certificate={item} index={index}/>);
    const hours = profile.projects.map(project => project.hours).reduce((a, b) => a + b, 0);

    if(!isFetching) {
        return (
            <div>
                <SKPageHeader header1={userDetails.firstname + ' ' + userDetails.lastname} header2={profile.title} header3={profile.city} />
                <Grid>
                    <Row start="xs" style={styles.row}>
                        <Col xs={12} md={7} lg={7}>
                            <Card style={styles.card}>
                                <CardHeader children={<Row><Col xs={4} /><Col xs={8}><span style={{fontSize: '24px'}}>{profile.firstname + ' ' + profile.lastname}</span></Col></Row>}/>
                                <CardText>
                                    <Row>
                                        <Col style={{textAlign: 'center'}} xs={4}>
                                            <Avatar
                                                icon={<FontIcon className="material-icons">person</FontIcon>}
                                                size={180}
                                                />
                                        </Col>
                                        <Col xs={8}>
                                            <ListItem
                                                leftIcon={<FontIcon className="material-icons">mail_outline</FontIcon>}
                                                primaryText={profile.email}
                                            />
                                            <ListItem
                                                leftIcon={<FontIcon className="material-icons">smartphone</FontIcon>}
                                                primaryText={profile.mobilephone}
                                            />
                                            <ListItem
                                                leftIcon={<FontIcon className="material-icons">phone</FontIcon>}
                                                primaryText={profile.workphone}
                                            />
                                            <ListItem
                                                leftIcon={<FontIcon className="material-icons">location_on</FontIcon>}
                                                primaryText={profile.address + ' ' + profile.zipcode + ', ' + profile.city}
                                            />
                                        </Col>
                                    </Row>
                                </CardText>
                            </Card>
                        </Col>
                        <Col xs={12} md={5} lg={5}>
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
                    </Row>
                    <Row start="xs" style={styles.row}>
                        <Col xs={12}>
                            <Card style={styles.card}>
                                <CardHeader title="Projekt" titleStyle={styles.cardTitle}/>
                                <CardText >
                                    {projects}
                                </CardText>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={styles.row}>
                        <Col xs={12}>
                            <Card style={styles.card}>
                                sdfsdf
                            </Card>
                        </Col>
                    </Row>
                    <Row style={styles.row}>
                        <Col xs={12}>
                            <Card style={styles.card}>
                                <Tabs>
                                    <Tab style={styles.tabs} label="Utbildningar">
                                        <List style={styles.list}>
                                            {educations}
                                        </List>
                                    </Tab>
                                    <Tab style={styles.tabs} label="Kurser/Certifikat">
                                        <List style={styles.list}>
                                            {certificates}
                                        </List>
                                    </Tab>
                                </Tabs>
                            </Card>
                        </Col>
                    </Row>
                    <Row start="xs" style={styles.row}>
                        <Col xs={12} md={6} lg={6}>
                            <Card style={styles.card}>
                                <CardHeader title="Om" titleStyle={styles.cardTitle}/>
                                <CardText>
                                    {profile.about}
                                </CardText>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <Card style={styles.card}>
                                <CardHeader title="Drivkraft" titleStyle={styles.cardTitle}/>
                                <CardText >
                                    {profile.driveforce}
                                </CardText>
                            </Card>
                        </Col>
                    </Row>
                </Grid>

                <Paper style={styles.footer}>
                    <Row center="xs">
                        <Col xs={3} md={2}>
                            <div style={styles.footerNumber}>{profile.projects.length}</div>
                            <div style={styles.footerText}>Antal projekt</div>
                        </Col>
                        <Col xs={3} md={2}>
                            <div style={styles.footerNumber}>{hours}</div>
                            <div style={styles.footerText}>Projekttimmar</div>
                        </Col>
                        <Col xs={3} md={2}>
                            <div style={styles.footerNumber}>92%</div>
                            <div style={styles.footerText}>Kundnöjdhet</div>
                        </Col>
                    </Row>
                </Paper>
            </div>
        );
    }
    return (<div>Loading...</div>);
};

Profile.propTypes = {
    userDetails: PropTypes.object,
    isFetching: PropTypes.boolean
};

export default Profile;
