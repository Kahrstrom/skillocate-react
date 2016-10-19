import React, {PropTypes} from 'react';
import DatePicker from 'material-ui/DatePicker';
import Theme from '../../../material-ui.theme';

const styles = {
    underlineStyle: {
        borderColor: Theme.palette.accent1Color
    }
};

const RenderDatePicker = ({input, container, label, mode, ...custom}) => {
    return (
        <DatePicker
            floatingLabelText={label}
            underlineFocusStyle={styles.underlineStyle}
            container={container}
            mode={mode}
            value={input}
            onChange={(event, date) => input.onChange(date)}
            {...custom} />
    );
};

RenderDatePicker.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    container: PropTypes.string,
    mode: PropTypes.string,
    custom: PropTypes.object
};

export default RenderDatePicker;
