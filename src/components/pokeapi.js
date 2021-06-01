



export default  function fetchKantoPokemon(){
   for( var num = 1; num<=152; num++){
        fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
       .then(response => response.json())
       .then(allpokemon => console.log(allpokemon))
     } 
    }
    