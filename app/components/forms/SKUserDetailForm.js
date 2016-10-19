import RenderTextField from './formhelper/RenderTextField';
import RenderDatePicker from './formhelper/RenderDatePicker';
import RenderTextArea from './formhelper/RenderTextArea';
import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const SKUserDetailForm = ({education}) => {
    return(
        <form>
            <div>
                <Field name="firstname" component={RenderTextField} type="text" label="First name" input={education.firstname}  fullWidth="true"/>
            </div>
            <div>
                <Field name="lastname" component={RenderTextField} type="text" input={education.lastname} label="Last name"  fullWidth="true"/>
            </div>
            <div>
                <Field name="position" component={RenderTextField} type="text" input={education.position} label="Position"  fullWidth="true"/>
            </div>
            <div>
                <Field name="mobilephone" component={RenderTextField} type="text" input={education.mobilephone} label="Mobile number"  fullWidth="true"/>
            </div>
            <div>
                <Field name="address" component={RenderTextField} type="text" input={education.address} label="Home address"  fullWidth="true"/>
            </div>
            <div>
                <Field name="zipcode" component={RenderTextField} type="text" input={education.zipcode} label="Home zipcode"  fullWidth="true"/>
            </div>
            <div>
                <Field name="city" component={RenderTextField} type="text" input={education.city} label="Home city"  fullWidth="true"/>
            </div>
            <div>
                <Field name="birthdate" input={education.birthdate} label="Birthdate" mode="landscape" component={RenderDatePicker} container="inline"  fullWidth="true"/>
            </div>
            <div>
                <Field name="description" input={education.description} label="About me" component={RenderTextArea} fullWidth="true"/>
            </div>
        </form>
    );
};

SKUserDetailForm.propTypes = {
    education: PropTypes.object
};

export default reduxForm({
    form: 'SKUserDetailForm'
})(SKUserDetailForm);
