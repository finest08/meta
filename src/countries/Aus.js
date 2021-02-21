import React from 'react';
import './Title.css';
import RowCard from '../RowCard';
import requests from '../requests';
import Grid from '@material-ui/core/Grid';
import Alt from '../Alt';
import Bottom from '../Bottom';
import Typography from '@material-ui/core/Typography';
import Logo from '../Logo';
import ButtonRow from '../ButtonRow';

function Aus() {
  return (
    <div className="App">
      <div>
        <Grid>
          <Alt />
        </Grid> 
        <Grid direction="column" align="center">
          <Logo className="logo"/>
          <ButtonRow />     
        </Grid>
        <Typography className="country" variant="h1">
          Australia
        </Typography>
          <Grid item={2} >
          <Grid container direction="row" justify="space-evenly" align="center" className="side">
            <RowCard title="Australia" fetchUrl={requests.fetchAu} />
          </Grid>
          <Grid direction="column" align="center">
            <ButtonRow />
            <Bottom />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Aus;
