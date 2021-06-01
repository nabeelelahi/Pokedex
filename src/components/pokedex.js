import { Grid } from '@material-ui/core'
import React from 'react'
import Navbar from './navbar'
import Background from "../assets/background.jpg"
import Body from './body'

function Pokedex() {
    return (
        <>
       <Navbar />
       <Grid container >
           <Grid item lg={12} xs={12}>
             <img src={Background}/>
           </Grid>
       </Grid>
           <Body />
       </>
    )
}

export default Pokedex
