import React from 'react';
import Alt from './components/Alt';
import { Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Bottom from './components/Bottom';
import { Link as RouterLink } from 'react-router-dom';
import Logo from './components/Logo';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    App: {
    
    justifyContent: 'center',
    backgroundColor: 'rgb(1, 14, 39)',
    },

    ButtonPad: {
    
    width: 'auto',
    fontSize: 25,
    display: 'grid',
    justifyContent: 'center',
    padding: 5,
    
    
    },
    pad: {
    padding: 100,
    
    },

    font: {
    textAlign: 'center',
    },

    color: {
    color: 'white',
    },

    logo: {
    justifyContent: 'center',
    height: 200,
    objectFit: 'contain',
    width: 400,
    },
});


function Menu() {
    const classes = useStyles();
    return (
        <Grid className={classes.App}>
            <Alt />
            <Grid direction="column" align="center">
                <Grid className={classes.pad}>
                    <Logo />
                </Grid>
                <Typography className={classes.color} variant="h4" align="center">
                    choose:
                </Typography>
            </Grid>
            <Grid container direction="column" >
                <Grid className={classes.ButtonPad}>
                    <Button variant="contained" color="primary" component={RouterLink} to={`/au`}>
                        <Typography className={classes.ButtonPad}>
                             Australia
                        </Typography>
                    </Button>
                </Grid>
                <Grid className={classes.ButtonPad}>
                    <Button variant="contained" color="primary" component={RouterLink} to={`/italy`}>
                        <Typography className={classes.ButtonPad}>
                            Italy
                        </Typography>
                    </Button>
                </Grid>
                <Grid className={classes.ButtonPad}>
                    <Button variant="contained" color="primary" component={RouterLink} to={`/thai`}>
                        <Typography className={classes.ButtonPad}>
                           Thailand
                        </Typography>
                    </Button>
                </Grid>
                <Grid className={classes.ButtonPad}>
                    <Button variant="contained" color="primary" component={RouterLink} to={`/uk`}>
                        <Typography className={classes.ButtonPad}>
                            United Kingdom
                        </Typography>
                    </Button>
                </Grid>
                <Grid className={classes.ButtonPad}>
                    <Button variant="contained" color="primary" component={RouterLink} to={`/germany`}>
                        <Typography className={classes.ButtonPad}>
                            Germany
                        </Typography>
                    </Button>
                <Grid className={classes.ButtonPad}>
                    <Button variant="contained" color="primary" component={RouterLink} to={`/usa`}>
                        <Typography className={classes.ButtonPad}>
                            United States
                        </Typography>
                    </Button>
                </Grid>
                <Grid className={classes.ButtonPad}>
                    <Button variant="contained" color="primary" component={RouterLink} to={`/slovakia`}>
                        <Typography className={classes.ButtonPad}>
                            Slovakia
                        </Typography>
                    </Button>
                </Grid>
                </Grid>
                <Grid className={classes.ButtonPad}>
                    <Button variant="contained" color="primary" component={RouterLink} to={`/brazil`}>
                        <Typography className={classes.ButtonPad}>
                            Brazil
                        </Typography>
                    </Button>
                </Grid>
                <Grid className={classes.ButtonPad} >
                    <Button variant="contained" color="primary" component={RouterLink} to={`/nz`}>
                        <Typography className={classes.ButtonPad}>
                            New Zealand
                        </Typography> 
                    </Button>
                </Grid>
                <Grid>
                    <Bottom />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Menu;
