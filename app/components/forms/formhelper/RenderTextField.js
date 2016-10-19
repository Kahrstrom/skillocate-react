import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import Theme from '../../../material-ui.theme';

const styles = {
    underlineStyle: {
        borderColor: Theme.palette.accent1Color
    }
};

const RenderTextField = ({ input, type, label, meta, ...custom }) => {
    return (
        <TextField hintText={label}
            floatingLabelText={label}
            underlineFocusStyle={styles.underlineStyle}
            errorText={meta.touched && meta.error}
            value={input}
            type={type}
            {...custom}
        />
    );
};

RenderTextField.propTypes = {
    input: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    meta: PropTypes.object,
    custom: PropTypes.object
};

export default RenderTextField;
