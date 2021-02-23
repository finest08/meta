import React from 'react';
import RowCard from '../RowCard';
import requests from '../requests';
import Grid from '@material-ui/core/Grid';
import Alt from '../Alt';
import Bottom from '../Bottom';
import Typography from '@material-ui/core/Typography';
import Logo from '../Logo';
import ButtonRow from '../ButtonRow';


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






function Aus() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <div>
        <Grid>
          <Alt />
        </Grid> 
        <Grid direction="column" align="center">
          <Logo className="logo"/>
          <ButtonRow />     
        </Grid>
        <Typography className={classes.country} variant="h1">
          Australia
        </Typography>
          <Grid item={2} >
          <Grid container direction="row" justify="space-evenly" align="center" className={classes.side}>
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
