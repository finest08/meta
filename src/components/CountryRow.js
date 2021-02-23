import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
        },
      
    },
    margin: {
    margin: theme.spacing(1),
    },
    font: {
        fontSize: 25
    }
}));

function CountryRow() {
    const classes = useStyles();
    return (
        <Grid classes={classes.root}>
            <Button component={RouterLink} to={`/au`}>
                <Typography color="secondary" className={classes.font}>
                    Australia
                </Typography>
            </Button>
            <Button size="large" color="secondary" component={RouterLink} to={`/italy`}>
                <Typography className={classes.font}>
                    Italy
                </Typography>
            </Button>
            <Button size="large" color="secondary" component={RouterLink} to={`/thai`}>
                <Typography className={classes.font}>
                    Thailand
                </Typography>
            </Button>
            <Button size="large" color="secondary" component={RouterLink} to={`/uk`}>
                <Typography className={classes.font}>
                    United Kingdom
                </Typography>
            </Button>
            <Button size="large" color="secondary" component={RouterLink} to={`/germany`}>
                <Typography className={classes.font}>
                    Germany
                </Typography>
            </Button>
            <Button size="large" color="secondary" component={RouterLink} to={`/usa`}>
                <Typography className={classes.font}>
                    United States
                </Typography>
            </Button>
            <Button size="large" color="secondary" component={RouterLink} to={`/slovakia`}>
                <Typography className={classes.font}>
                    Slovakia
                </Typography>
            </Button>
            <Button size="large" color="secondary" component={RouterLink} to={`/brazil`}>
                <Typography className={classes.font}>
                    Brazil
                </Typography>
            </Button>
            <Button size="large" color="secondary" component={RouterLink} to={`/nz`}>
                <Typography className={classes.font}>
                    New Zealand
                </Typography>
            </Button>
            <div>
            
        </div>
        </Grid>
        
    )
}

export default CountryRow;