import { fade, makeStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      overflowX: 'hidden',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: blue[800]
    },
    toolBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: blue[50],
      position: 'absolute'
  
    },
    menuBox: {
      display: 'flex',
      alignItems: 'center',
      width: '10rem',
      '& svg': {
        fill: blue[100],
      }
    },

    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      borderRadius: '100px',
  
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '70%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& svg': {
        fill: blue[800]
      }
    },
    inputRoot: {
      color: 'inherit',
  
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 120,
      },
    },
    logo: {
      justifySelf: 'center',
      color: blue[100],
    },
    avatarBox: {
      display: 'flex'
    },
    select: {
      marginLeft: '1rem',
      color: blue[100],
      '&:before': {
        display: 'none'
      },
      '& svg': {
        fill: blue[100]
      }
    },
  
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      backgroundColor: grey[100],
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },
    
    toolbar: theme.mixins.toolbar,
  
  }));

  export default useStyles;