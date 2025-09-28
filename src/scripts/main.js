
//Instanciando nossa lista html de pokemons
const PokemonList = document.getElementById('pkm-list')

//Função que transforma o objeto pokemon em um li para escrevermos no html
function convertPkmnToLi(pokemon){
    return`
        <li class="pkm ${pokemon.color}">
            <img src="${pokemon.sprites.front_default}">
            <h3 class="pkm-name">${pokemon.name}</h3>
            <span class="pkm-id">#${pokemon.id}</span>
            <ol class="pkm-types-list">
                ${convertTypesToLi(pokemon.types).join('')}
            </ol>
        </li>`
}

function convertTypesToLi(PkmTypes){
    return PkmTypes.map((typeSlot) => {
        return`
            <li class="pkm-type ${typeSlot.type.name}">${typeSlot.type.name}</li>`
    })
}


    pokeApi.getPokemons().then((pokemons) => {
        const listItens = [];
        for(let pokemon of pokemons){//Para cada objeto na lista que importamos
            LiPkm = convertPkmnToLi(pokemon);//Converte o objeto para li 
            listItens.push(LiPkm);
        }

        newHtml = listItens.join('');
        PokemonList.innerHTML = newHtml;


    });


