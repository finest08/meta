import React from 'react';
import RowCard from '../components/RowCard';
import requests from '../requests';
import Grid from '@material-ui/core/Grid';
import Alt from '../components/Alt';
import Typography from '@material-ui/core/Typography';
import Bottom from '../components/Bottom';
import Logo from '../components/Logo';
import CountryRow from '../components/CountryRow';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  App: {
    margin: 0,
    backgroundColor: 'rgb(1, 14, 39)',
  },


  title: {
  textAlign: 'center',
  color: 'white',
  paddingBottom: 60,

  },

  side: {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingBottom: 60,
  },

  country: {
  textAlign: 'center',
  color: 'white',
  padding: 120,
  },
  
  logo: {
    justifyContent: 'center',
    height: 200,
    objectFit: 'contain',
    width: 400,
},
});


function Brazil() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <div>
        <Grid>
          <Alt />
        </Grid>
        <Grid direction="column" align="center">
          <Logo />
          <CountryRow />
        </Grid>
        <Typography className={classes.country} variant="h1">
          Brazil
        </Typography>
        <Grid item={4} >
          <Grid container direction="row" justify="space-evenly" alignItems="center" className="side">
            <RowCard className={classes.side} title="Brazil" fetchUrl={requests.fetchBr} />
          </Grid>
        </Grid>
        <Grid direction="column" align="center">
          <CountryRow />
          <Bottom />
        </Grid>
      </div>
    </div>
  );
}

export default Brazil;
