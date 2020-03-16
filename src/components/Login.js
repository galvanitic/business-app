import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const Login = (props) => {
  const classes = useStyles();

  return (
    <div className='login-container'>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField className='login-item' id="outlined-basic" label="email" variant="outlined" />
      <TextField type='password' className='login-item' id="outlined-basic" label="password" variant="outlined" />
      <Button className='login-item' variant="outlined" color="primary" onClick={props.login}>
        Login
      </Button>
      </form>
    </div>
  );
}

export default Login;