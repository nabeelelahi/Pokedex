import { AppBar, makeStyles } from '@material-ui/core';
import React from 'react'


 const useStyles = makeStyles({
     bar:{
         backgroundColor: 'black',
         height: '50px',
         justifyContent: 'center'
     }
 })

function Navbar() {
    const classes = useStyles();
    return (
        <AppBar className={classes.bar}>
          <h3 style={{color:'wheat',fontFamily:'cursive',textAlign:'center',fontWeight: 'lighter'}}>        
              Gotta Catch'em All
          </h3>  
        </AppBar>
    )
}

export default Navbar;
