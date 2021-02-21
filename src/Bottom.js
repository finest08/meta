import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Bottom.css';
import Grid from '@material-ui/core/Grid';


import finest from './imgs/finest.png'

export default function Bottom() {

  return (
      <div className="root">
      <Grid container direction="column">
        <Typography className="meta" variant="h4" align="center">
          metahub.
        </Typography>
        <Grid align="center" className="meta">
          <img src={finest} alt="pinkM logo" className="signature"/>
        </Grid>
        </Grid>
        <AppBar position="static">
        <Toolbar variant="dense" alignItems="center">
          </Toolbar>
        </AppBar>
    </div>
  );
}