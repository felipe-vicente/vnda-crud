import blue from '@material-ui/core/colors/blueGrey';
import { createStyles } from '@material-ui/core/styles';


const useStyles = createStyles({
    root: {
        backgroundColor: '#fff',
        marginTop: '1rem',
        fontWeight: 'bold'
    },
    titles: {
        display: 'grid',
        gridTemplateColumns: '11% 33% 36% 30%',
    },
    title: {
        '& span': {
            fontWeight: 'bold',
            fontSize: '1.1rem'
        }
    },
    delete: {
        fontWeight: 'bold',
        marginLeft: '1.5rem'
    },
    button: {
        backgroundColor: '#fff',
        border: `solid 1px ${blue[200]}`,
        color: blue[900],
    },
    buttonBox: {
        display: 'flex',
        justifyContent: 'space-between',
        '& h4': {
            color: blue[600]
        }
    },
    spinner: {
        margin: '3rem 0',
        width: '100%',
        textAlign: 'center'

    }

});

export default useStyles;
