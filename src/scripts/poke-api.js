//Fazendo uma requisição http para consumir a poke-api

const pokeApi = {}
pokeApi.getDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then((pokemonDetail) => {
            return fetch(pokemonDetail.species.url)
                .then((res) => res.json())
                .then((speciesDetail) => {
                    pokemonDetail.color = speciesDetail.color.name;
                    return pokemonDetail;
                })
        })
}

pokeApi.getPokemons = () =>{
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    return fetch(url)//Buscando a lista de pokemons no servidor
        .then((response) => response.json())//Transformando a lista que recebemos da url em uma lista JSON
        .then((data) => data.results)
        .then((pokemons) => pokemons.map(pokeApi.getDetails))//Transformando a lista de pokemons em uma lista de promises das urls details
        .then((detailRequest) => Promise.all(detailRequest))//Usando o promise all para esperar todas os requests serem cumpridos
        .then((pokemonDetails) => pokemonDetails)
        .then((details) =>{
            console.log(details);
            return details;
        })
}