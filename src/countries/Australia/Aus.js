import React from 'react';
import RowCard from '../../components/RowCard';
import requests from '../../requests';
import Grid from '@material-ui/core/Grid';
import Alt from '../../components/Alt';
import Bottom from '../../components/Bottom';
import Typography from '@material-ui/core/Typography';
import Logo from '../../components/Logo';
import CountryRow from '../../components/CountryRow';
import CategoryRow from './AuCategoryRow';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  App: {
    margin: 0,
    backgroundColor: 'rgb(1, 14, 39)',
    "& > *": {
      margin: theme.spacing(10)
    }
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
    paddingBottom: 80,
  
  },

  country: {
  textAlign: 'center',
  color: 'white',
    paddingTop: 100,
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
}));



function Aus() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <div>
        <Grid >
          <Alt />
        </Grid> 
        <Grid direction="column" align="center">
          <Logo className="logo"/>
          <CountryRow />     
        </Grid>
        <Typography className={classes.country} variant="h1">
          Australia
        </Typography>
        <Grid className={classes.category}>
          <CategoryRow />
        </Grid>
          <Grid item spacing={6}>
          <Grid container direction="row" justify="space-evenly" alignItems="center" className={classes.side}>
            <RowCard title="Australia" fetchUrl={requests.fetchAu} />
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

export default Aus;