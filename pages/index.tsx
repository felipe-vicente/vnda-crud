import React, {useState, useEffect} from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import UserList from '../components/UserList';
import Link from 'next/link';
import useStyles from '../styles/HomeStyles';
import { withStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import token from '../token';
axios.defaults.headers.common['Authorization'] = `Token token="${token}"`;
import axios from 'axios';




const Home = ({classes}) => {
    const [ users, setUsers ] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        setIsloading(true);
        try {
            const fetch = await axios('https://cors-anywhere.herokuapp.com/https://demo.vnda.com.br/api/v2/users');
            const usersData = fetch.data;
            setUsers(usersData);
        }catch(e) {
            console.log(e);
        }
        setIsloading(false);

    }

    const onDeleteUser = (id: number): void => {
        axios.delete(`https://cors-anywhere.herokuapp.com/https://demo.vnda.com.br/api/v2/users/${id}`);
        const filteredUsers = users.filter((user) => {
            return user.id !== id;
        })
        setUsers(filteredUsers)
    }

    return (
        <React.Fragment>
            <div className={classes.buttonBox}>
                <Typography variant='h4'>Usuários</Typography>
                <Link href={`/adduser`} >
                    <Button className={classes.button}>Novo Usuário</Button>
                </Link>

            </div>
            <List className={classes.root}>
                <ListItem className={classes.titles}>
                    <h1></h1>
                    <ListItemText primary='E-mail' className={classes.title}></ListItemText>
                    <ListItemText primary='Nome' className={classes.title}></ListItemText>
                    <ListItemText primary='Código Externo' className={classes.title}></ListItemText>
                </ListItem>
                <Divider />
                {isLoading 
                    ? <div className={classes.spinner}><CircularProgress /></div>
                    : <UserList users={users} onDeleteUser={onDeleteUser} />
                }
            </List>
        </React.Fragment>
    );
}


export default withStyles(useStyles as any)(Home);