import React from 'react';
import RowCard from '../../components/RowCard';
import requests from '../../requests';
import Grid from '@material-ui/core/Grid';
import Alt from '../../components/Alt';
import Bottom from '../../components/Bottom';
import Typography from '@material-ui/core/Typography';
import Logo from '../../components/Logo';
import CountryRow from '../../components/CountryRow';
import CategoryRow from './CategoryRow';
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
    paddingTop: 30,
    fontSize: 70,
  },
  
  logo: {
    justifyContent: 'center',
    height: 200,
    objectFit: 'contain',
    width: 400,
  },

  category: {
    textAlign: 'center',
  

  },
});






function UsTechnology() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <div>
        <Grid>
          <Alt />
        </Grid> 
        <Grid direction="column" align="center">
          <Logo className="logo"/>
          <CountryRow />     
        </Grid>
        <Typography className={classes.country} variant="h1">
          United States Technology
        </Typography>
        <Grid className={classes.category}>
          <CategoryRow />
        </Grid>
          <Grid item={2} >
          <Grid container direction="row" justify="space-evenly" align="center" className={classes.side}>
            <RowCard title="Sk" fetchUrl={requests.fetchUsTechnology} />
          </Grid>
          <Grid direction="column" align="center">
            <CountryRow />
            <Bottom />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default UsTechnology;
