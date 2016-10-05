import React from 'react';
import { Row, Col, Grid } from 'react-flexbox-grid/lib/index';

const Home = () => {
    return (
        <Grid>
	        <Row>
	       		  <Col xs={12} sm={3} md={2} lg={1}>Jag hatar flex</Col>
	       		  <Col xs={6} sm={6} md={8} lg={10}>Jag med</Col>
	        </Row>

	        <Row>
	       		  <Col lgOffset={2} xs={12} sm={3} mdOffset={2} md={2} lg={1}>Jag hatar flex</Col>
	       		  <Col xs={6} sm={6} md={8} lg={6}>Jag med</Col>
	        </Row>
        </Grid>
    );
};

export default Home;
