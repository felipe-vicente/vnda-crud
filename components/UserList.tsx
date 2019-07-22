import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/styles';
import useStyles from '../styles/UserListStyles';


const UserList = ({users, onDeleteUser, classes}) => {
    return (
        <div>
        {users.map(user => (
            <React.Fragment key={user.id}>
                <ListItem button key={user.id} className={classes.list}>
                    <ListItemText className={classes.delete} onClick={() => onDeleteUser(user.id)}>x</ListItemText>
                        <Link href={`/edituser?id=${user.id}`} as={`/edituser/${user.id}`}>
                            <ListItemText primary={user.email} className={classes.email}></ListItemText>
                        </Link>
                    <ListItemText primary={user.name} className={classes.listText}></ListItemText>
                    <ListItemText primary={user.external_code} className={classes.listText}></ListItemText>
                </ListItem>
                <Divider />
            </React.Fragment>
        ))}
        </div>
    );
}

export default withStyles(useStyles as any)(UserList);