import { createStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blueGrey';

const useStyles = createStyles({
    list: {
        display: 'grid',
        gridTemplateColumns: '11% 33% 36% 30%'
    
    },
    email: {
        color: blue[700]
    },
    delete: {
        '& span': {
            fontWeight: 'bold',
            fontSize: '1.1rem',
            marginLeft: '2rem'
        }
    }
  });

  export default useStyles;