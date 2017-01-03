import RenderTextField from './formhelper/RenderTextField';
import RenderDatePicker from './formhelper/RenderDatePicker';
import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Row, Col } from 'react-flexbox-grid/lib/index';

const SKProjectRequestForm = ({request}) => {
    return(
        <form>
            <Row>
                <Col xs="6">
                    <Field name="hours" component={RenderTextField} type="text" label="Antal timmar" input={request.hours}  fullWidth="true"/>
                </Col>
                <Col xs="6">
                    <Field name="number" component={RenderTextField} type="text" label="Antal personer" input={request.numberPeople}  fullWidth="true"/>
                </Col>
            </Row>
            <Row>
                <Col xs="6">
                    <Field name="startdate" input={new Date(request.startdate)} label="Startdatum" mode="landscape" component={RenderDatePicker} container="inline"  fullWidth="true"/>
                </Col>
                <Col xs="6">
                    <Field name="enddate" input={new Date(request.enddate)} label="Slutdatum" mode="landscape" component={RenderDatePicker} container="inline"  fullWidth="true"/>
                </Col>
            </Row>
        </form>
    );
};

SKProjectRequestForm.propTypes = {
    request: PropTypes.object
};

export default reduxForm({
    form: 'SKProjectRequestForm'
})(SKProjectRequestForm);
