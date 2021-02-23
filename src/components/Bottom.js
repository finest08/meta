import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import finest from '../imgs/finest.png'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
    
  meta: {
    color: 'white',
    padding: 110,
    alignItems: 'center',
  },

  center: {
    alignItems: 'center',
    flexGrow: 1,
},

  bottom: {
    alignContent: 'center',
    height: 50,
    width: 50,

  },
  signature: {
    height: 130,
    objectFit: 'contain',
    
    
    
},
});

export default function Bottom() {
  const classes = useStyles();
  return (
      <div className={classes.root}>
      <Grid container direction="column">
        <Typography className={classes.meta} variant="h4" align="center">
          metahub.
        </Typography>
        <Grid align="center" className={classes.meta}>
          <img src={finest} alt="pinkM logo" className={classes.signature}/>
        </Grid>
        </Grid>
        <AppBar position="static">
        <Toolbar variant="dense" alignItems="center">
          </Toolbar>
        </AppBar>
    </div>
  );
}