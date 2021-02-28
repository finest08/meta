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
        fontSize: 18,
        color: 'white',

    }
}));


function CategoryRow() {
    const classes = useStyles();
    return (
        <Grid classes={classes.root}>
            <Button size="large" component={RouterLink} to={`/germany`}>
                <Typography className={classes.font}>
                    General
                </Typography>
            </Button>
            <Button color="secondary" component={RouterLink} to={`/gr/business`}>
                <Typography className={classes.font}>
                    Business
                </Typography>
            </Button>
            <Button size="large" color="primary" component={RouterLink} to={`/gr/entertainment`}>
                <Typography className={classes.font}>
                    Entertainment
                </Typography>
            </Button>
            
            <Button size="large" color="secondary" component={RouterLink} to={`/gr/health`}>
                <Typography className={classes.font}>
                    Health
                </Typography>
            </Button>
            <Button size="large" color="secondary" component={RouterLink} to={`/gr/technology`}>
                <Typography className={classes.font}>
                    Technology
                </Typography>
            </Button>
            <Button size="large" color="secondary" component={RouterLink} to={`/gr/sports`}>
                <Typography className={classes.font}>
                    Sports
                </Typography>
            </Button>
            <Button size="large" color="secondary" component={RouterLink} to={`/gr/science`}>
                <Typography className={classes.font}>
                    Science
                </Typography>
            </Button>
            <div>
            
        </div>
        </Grid>
        
    )
}

export default CategoryRow;