import { createStyles, withStyles, fade } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import blue from '@material-ui/core/colors/blueGrey';

export const useStyles = createStyles({
    root: {
       '& label': {
           marginTop: '1.2rem',
           fontWeight: 'bold',
           fontSize: '1.2rem',
           color: blue[800]
       }
    },
    button: {
        alignSelf: 'flex-start',
        backgroundColor: blue[700],
        color: blue[100],
        marginTop: '1.5rem',
        '&:hover': {
            backgroundColor: blue[500],
        }
    },
    titleBox: {
        display: 'flex',
        margin: '1rem 0'
    },
    separation: {
        margin: '0 .5rem',
        fontWeight: 'bold',
        color: blue[400]
    },
    usersTitle: {
        color: blue[400],
        fontWeight: 300,
        cursor: 'pointer',
        '&:hover': {
            color: blue[600]
        }
    },
    email: {
        color: blue[700]
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    input: {
        backgroundColor: '#fff',
        border: 'solid 1px lightgrey',
        height: '2.7rem'
    }
});

export const BootstrapInput = withStyles(theme => ({
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: '100%',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(InputBase);