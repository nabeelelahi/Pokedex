import { Container, Grid, Paper } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import PaperCards from './papercards'

function Body() {
  const [data, setData] = useState({})


  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
    .then(response => response.json())
    .then((data) => {
         const { results } = data;
         console.log(results)
        const newpokemondata = {}
        results.forEach((pokemon, index) => {
            newpokemondata[index + 1] = {
              id: index + 1,
              name: pokemon.name,
              sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
            }
          })      
          setData(newpokemondata)
        })  
        
      }, [])

 
   
          return(
            
              <Container>
            <Grid container spacing={2}>
            <Grid item lg={3} md={4} sm={6} xs={12}>  
            <PaperCards />
            </Grid>
            </Grid>
            </Container>
    
     
          )
    
}



export default Body
