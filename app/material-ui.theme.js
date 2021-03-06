import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';

export default {
    fontFamily: 'Gidole, Roboto, sans-serif',
    palette: {
        primary1Color: Colors.blueGrey600,
        primary2Color: Colors.blueGrey500,
        primary3Color: Colors.bluGrey400,
        accent1Color: Colors.pinkA200,
        accent2Color: Colors.pinkA400,
        accent3Color: Colors.pinkA700,
        textColor: Colors.darkBlack,
        alternateTextColor: Colors.white,
        canvasColor: Colors.white,
        borderColor: Colors.grey300,
        disabledColor: fade(Colors.darkBlack, 0.3),
        pickerHeaderColor: Colors.blueGrey500,
        clockCircleColor: fade(Colors.darkBlack, 0.07),
        shadowColor: Colors.fullBlack,
    },
};
