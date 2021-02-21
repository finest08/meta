import React from 'react';
import Alt from './Alt';
import { Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './Menu.css';
import Bottom from './Bottom';
import { Link as RouterLink } from 'react-router-dom';
import Logo from './Logo';


function Menu() {
    return (
        <Grid className="App">
            <Alt />
            <Grid direction="column" align="center">
                <Grid className="pad">
                    <Logo />
                </Grid>
                <Typography className="color" variant="h4" align="center">
                    choose:
                </Typography>
            </Grid>
            <Grid container direction="column" >
                <Grid className="ButtonPad">
                    <Button variant="contained" color="primary" component={RouterLink} to={`/au`}>
                        <Typography className="ButtonPad">
                             Australia
                        </Typography>
                    </Button>
                </Grid>
                <Grid className="ButtonPad">
                    <Button variant="contained" color="primary" component={RouterLink} to={`/italy`}>
                        <Typography className="ButtonPad">
                            Italy
                        </Typography>
                    </Button>
                </Grid>
                <Grid className="ButtonPad">
                    <Button variant="contained" color="primary" component={RouterLink} to={`/thai`}>
                        <Typography className="ButtonPad">
                           Thailand
                        </Typography>
                    </Button>
                </Grid>
                <Grid className="ButtonPad">
                    <Button variant="contained" color="primary" component={RouterLink} to={`/uk`}>
                        <Typography className="ButtonPad">
                            United Kingdom
                        </Typography>
                    </Button>
                </Grid>
                <Grid className="ButtonPad">
                    <Button variant="contained" color="primary" component={RouterLink} to={`/germany`}>
                        <Typography className="ButtonPad">
                            Germany
                        </Typography>
                    </Button>
                <Grid className="ButtonPad">
                    <Button variant="contained" color="primary" component={RouterLink} to={`/usa`}>
                        <Typography className="ButtonPad">
                            United States
                        </Typography>
                    </Button>
                </Grid>
                <Grid className="ButtonPad">
                    <Button variant="contained" color="primary" component={RouterLink} to={`/slovakia`}>
                        <Typography className="ButtonPad">
                            Slovakia
                        </Typography>
                    </Button>
                </Grid>
                </Grid>
                <Grid className="ButtonPad">
                    <Button variant="contained" color="primary" component={RouterLink} to={`/brazil`}>
                        <Typography className="ButtonPad">
                            Brazil
                        </Typography>
                    </Button>
                </Grid>
                <Grid className="ButtonPad" >
                    <Button variant="contained" color="primary" component={RouterLink} to={`/nz`}>
                        <Typography className="ButtonPad">
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
