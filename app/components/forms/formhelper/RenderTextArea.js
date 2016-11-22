import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';

const RenderTextArea = ({ input, type, label, meta, rows, ...custom }) => {
    return (
        <TextField floatingLabelText={label}
            multiLine={true}
            errorText={meta.touched && meta.error}
            value={input}
            type={type}
            rows={rows}
            {...input}
            {...custom}
        />
    );
};

RenderTextArea.propTypes = {
    input: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    rows: PropTypes.number,
    meta: PropTypes.object,
    custom: PropTypes.object
};

export default RenderTextArea;
