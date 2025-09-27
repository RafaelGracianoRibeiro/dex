//Fazendo uma requisição http para consumir a poke-api

//Definindo a url da api com os 151 primeiros pokemons
const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

//Instanciando nossa lista html de pokemons
const PokemonList = document.getElementById('pkm-list')

//Função que transforma o objeto pokemon em um li para escrevermos no html
function convertPkmnToLi(pokemon){
    return`
        <li class="pkm">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
            <h3 class="pkm-name">${pokemon.name}</h3>
            <span class="pkm-id">#001</span>
            <ol class="pkm-types-list">
                <li class="pkm-type">Grass</li>
                <li class="pkm-type">Poison</li>
            </ol>
        </li>`
}

//Fazendo o fetch, buscando dados da url informada, essa função me retorna uma PROMISE
//Uma promise significa que a busca não será imediate, a promise significa que depois de um tempo receberei os resultados
//Usamos o método then para que QUANDO os dados forem recebidos ele execute alguma coisa
fetch(url)
    .then((response) => response.json())
    .then((data) => data.results)
    .then((pokemons) => {
        console.log(pokemons)
        for(let pokemon of pokemons){//Para cada objeto na lista que importamos
            LiPkm = convertPkmnToLi(pokemon);//Converte o objeto para li 
            PokemonList.innerHTML += LiPkm;
        }
    });


