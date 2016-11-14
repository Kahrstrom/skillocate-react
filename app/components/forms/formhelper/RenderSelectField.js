import React, {PropTypes} from 'react';
import SelectField from 'material-ui/SelectField';
import Theme from '../../../material-ui.theme';

const styles = {
    underlineStyle: {
        borderColor: Theme.palette.accent1Color
    }
};

const RenderSelectField = ({ input, label, meta, children }) => {
    return(
        <SelectField
            floatingLabelText={label}
            underlineFocusStyle={styles.underlineStyle}
            errorText={meta.touched && meta.error}
            {...input}
            onChange={(event, index, value) => input.onChange(value)}
            children={children}/>
    );
};

RenderSelectField.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    meta: PropTypes.object,
    children: PropTypes.array
};

export default RenderSelectField;
