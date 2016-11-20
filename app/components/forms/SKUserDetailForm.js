import RenderTextField from './formhelper/RenderTextField';
import RenderDatePicker from './formhelper/RenderDatePicker';
import RenderTextArea from './formhelper/RenderTextArea';
import React, { PropTypes } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Field, reduxForm } from 'redux-form';
import Theme from '../../material-ui.theme';

const styles = {
    tabs: {
        backgroundColor: Theme.palette.primary2Color
    }
};

const text = 'Bacon ipsum dolor amet leberkas doner biltong tenderloin tail chicken tri-tip. Flank shank tongue, brisket jerky jowl kevin turducken spare ribs sausage boudin beef ribs short ribs drumstick swine. Kevin alcatra kielbasa ground round short loin. Landjaeger frankfurter fatback, t-bone ham hock pork chop ball tip kielbasa pig beef ribs swine spare ribs picanha turducken. Jowl leberkas pig ground round frankfurter. Beef shoulder prosciutto capicola shankle ham pork chop burgdoggen shank. Chicken shank shankle ground round biltong shoulder.';


const SKUserDetailForm = ({details}) => {
    return(
        <form>
            <Tabs>
                <Tab style={styles.tabs} label="About">
                    <section style={{padding: 8}}>
                        <div>
                            <Field name="description" input={details.description} label="About me" component={RenderTextArea} fullWidth="true" input={text}/>
                        </div>
                        <div>
                            <Field name="position" component={RenderTextField} type="text" input={details.position} label="Position"  fullWidth="true"/>
                        </div>
                    </section>
                </Tab>
                <Tab style={styles.tabs} label="Details">
                    <section style={{padding: 8}}>
                        <div>
                            <Field name="birthdate" input={details.birthdate} label="Birthdate" mode="landscape" component={RenderDatePicker} container="inline"  fullWidth="true"/>
                        </div>
                        <div>
                            <Field name="firstname" component={RenderTextField} type="text" label="First name" input={details.firstname}  fullWidth="true"/>
                        </div>
                        <div>
                            <Field name="lastname" component={RenderTextField} type="text" input={details.lastname} label="Last name"  fullWidth="true"/>
                        </div>
                        <div>
                            <Field name="mobilephone" component={RenderTextField} type="text" input={details.mobilephone} label="Mobile number"  fullWidth="true"/>
                        </div>
                        <div>
                            <Field name="address" component={RenderTextField} type="text" input={details.address} label="Home address"  fullWidth="true"/>
                        </div>
                        <div>
                            <Field name="zipcode" component={RenderTextField} type="text" input={details.zipcode} label="Home zipcode"  fullWidth="true"/>
                        </div>
                        <div>
                            <Field name="city" component={RenderTextField} type="text" input={details.city} label="Home city"  fullWidth="true"/>
                        </div>
                    </section>
                </Tab>
            </Tabs>
        </form>
    );
};

SKUserDetailForm.propTypes = {
    details: PropTypes.object
};

export default reduxForm({
    form: 'SKUserDetailForm'
})(SKUserDetailForm);
