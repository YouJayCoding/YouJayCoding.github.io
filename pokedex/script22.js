const poke_container = document.getElementById('poke-container')

const pokemon_count = 150


const fetchPokemons = async () => {
    // let i;
    // while ( i <= pokemon_count) {
    //     i++;
    // // if (i == 16) {i += 3 };
    // await getPokemon(i)
    //   }
    
    
    for(let i = 1;  i <= pokemon_count; i++) 
    {
        if (i === 16) {
            continue;
          } 
        await getPokemon(i)
    }
}



const getPokemon = async (id) => {
//const url = `https://pokeres.bastionbot.org/images/pokemon/${id}`
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    
        createPokemonCard(data)
}


const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    const name = pokemon.name 
    //const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    //const id = pokemon.id.toString().padStart(3, '0')
    const id = pokemon.id 
    //const poke_types = pokemon.types.map(type => type.type.name)
    //const type = main_types.find(type => poke_types.indexOf(type) > -1)
    //const color = colors[type]

    //pokemonEl.style.backgroundColor = color

    const pokemonInnerHTML = `
    <div class="mywrapper">
    <div class="img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${id}.png" alt="">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        
    </div>

    
    <div class="abilities">
    Ability: 
    ${pokemon.abilities.map((ability) => {
          return `<span> ${ability.ability.name}</span>`;
        })
        .join(",")}
    
    <div>
    
    <div class="card">
           
    <p>|| Height: ${pokemon.height} || Weight: ${pokemon.weight} ||</p>
    </div>
    
    
    <div class="stats">
        <h4> ${name} Statistics </h4>
      ${pokemon.stats.map((stat) => {
          return `<p>${stat.stat.name}: ${stat.base_stat}</p>`;


        }).join("")}
    
    </div>

    </div>
    
    `


    pokemonEl.innerHTML = pokemonInnerHTML

    poke_container.appendChild(pokemonEl)

    

}






fetchPokemons()
