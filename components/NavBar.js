import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useStyles from '../styles/NavBarStyles';
import Link from 'next/link';

const NavBar = ({children}) => {
  const [user, setUser] = useState('reis');
  const classes = useStyles();
  const handleChange = (e) => {
    setUser(e.target.value);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.menuBox}>
            <IconButton>
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'Search' }}
              />
            </div>
          </div>
          <Link href='/'>
            <Typography variant="h4" noWrap className={classes.logo}>
              Vnda
            </Typography>
          </Link>
          <div className={classes.avatarBox}>
            <Avatar alt="Remy Sharp" src="/static/pp.jpg" />
            <Select
              className={classes.select}
              value={user}
              onChange={handleChange}
            >
              <MenuItem value={'reis'}>reis@vnda.com.br</MenuItem>
            </Select>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {
          ///////// CONTENT //////////
        }
          {children}
        {
          ///////// CONTENT //////////
        }
      </main>
    </div>
  );
}

export default NavBar;
