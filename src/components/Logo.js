import React from 'react'
import Grid from '@material-ui/core/Grid';
import Meeta from '../imgs/Meeta.png';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  logo: {
    alignContent: 'center',
    height: 150,  //600
    width: 250, //1150
    objectFit: 'contain',
    
    },
    space: {
        paddingTop: 50, 
        
    }
});

function Logo() {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.space} >
                <img src={Meeta} alt="metaNews logo" className={classes.logo} />
            </Grid>
        </div>
    )
}

export default Logo;
