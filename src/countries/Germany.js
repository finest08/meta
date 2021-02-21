import React from 'react';
import './Title.css';
import RowCard from '../RowCard';
import requests from '../requests';
import Grid from '@material-ui/core/Grid';
import Alt from '../Alt';
import Typography from '@material-ui/core/Typography';
import Bottom from '../Bottom';
import Logo from '../Logo';
import ButtonRow from '../ButtonRow';

function Germany() {
  return (
    <div className="App">
      <div>
        <Grid>
          <Alt />
        </Grid>
        <Grid direction="column" align="center">
          <Logo />
          <ButtonRow />
        </Grid>
        <Typography className="country" variant="h1">
         Germany
        </Typography>
        <Grid item={12} >
          <Grid container direction="row" justify="space-evenly" alignItems="center" className="side">
            <RowCard className="side" title="Germany" fetchUrl={requests.fetchGr} />
          </Grid>
        </Grid>
        <Grid direction="column" align="center">
          <ButtonRow />
          <Bottom />
        </Grid>
      </div>  
    </div>
  );
}

export default Germany;
