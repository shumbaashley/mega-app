import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import StoreIcon from '@material-ui/icons/Store';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    }
  }));

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="relative">
        <Toolbar>
          <StoreIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Mega Store
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default Header
