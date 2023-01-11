let allPokemon;
let everyPokemon;
let pokemonNames;
let offset = 0;

async function init() {
    await loadAllPokemons();
    loadAllPokemonNames();
}

async function loadAllPokemons() {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=40`;
    let response = await fetch(url);
    allPokemon = await response.json();
    for (let i = 0; i < allPokemon['results'].length; i++) {
        const pokemon = allPokemon['results'][i];
        await loadEveryPokemon(pokemon['name']);

    }

    removeloader();

}

async function loadEveryPokemon(pokemonNames) {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonNames}/`;
    let response = await fetch(url);
    everyPokemon = await response.json();

    document.getElementById('all-pokemon').innerHTML += /*html*/`
    <div onclick="loadPokemon('${pokemonNames}')" class="container-every-pokemon">
        <div id="every-pokemon${everyPokemon['id']}" class="every-pokemon">
        
            <img id = "imageid" class="poke-pic" src='${everyPokemon['sprites']['other']['official-artwork']['front_default']}'>
            
        </div>
        <div class="every-pokemon-text">
            <span>${charToUpperCase(everyPokemon['forms'][0]['name'])}</span>
            <span>#${pokemonIDFillWithZeros(everyPokemon['id'])}</span>
        </div>
    </div>
    `;
    // getBase64Image();
    let everyPokemonType = document.getElementById(`every-pokemon${everyPokemon['id']}`);
    everyPokemonType.style.backgroundColor = changeEveryBgColor(everyPokemon['types'][0]['type']['name']);
}



function changeEveryBgColor(pokemonType) {
    switch (pokemonType) {
        case 'normal':
            return '#757C82';

        case 'fighting':
            return '#AE2A24';

        case 'flying':
            return '#4D4A59';

        case 'poison':
            return '#BB44BB';

        case 'ground':
            return '#CB6328';

        case 'rock':
            return '#7F6E34';

        case 'bug':
            return '#6EB700';

        case 'ghost':
            return '#7D74C7';

        case 'steel':
            return '#2C768E';

        case 'fire':
            return '#FF9730';

        case 'water':
            return '#76C9DF';

        case 'grass':
            return '#067D4A';

        case 'electric':
            return '#FFCC2C';

        case 'psychic':
            return '#2C768E';

        case 'ice':
            return '#61CEC3';

        case 'dragon':
            return '#1C66BA';

        case 'dark':
            return '#4D4A59';

        case 'fairy':
            return '#E975C8';
    }
}


async function searchPokemon() {
    let pokemonSearch = document.getElementById('pokemon-search');
    searchInput = pokemonSearch.value.toLowerCase();
    document.getElementById('all-pokemon').innerHTML = ''; //clear pokemon stack
    for (let i = 0; i < pokemonNames['results'].length; i++) {
        const pokemonName = pokemonNames['results'][i]['name'];

        if (pokemonName.includes(searchInput)) {
            await loadEveryPokemon(pokemonName);
        }

    }
    // replace show more button with show all 
    document.getElementById('show-more').classList.add('d-none');
    document.getElementById('show-all').classList.remove('d-none');
    removeloader();
}

async function loadAllPokemonNames() {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=903`;
    let response = await fetch(url);
    pokemonNames = await response.json();

}


function showMorePokemon() {
    offset += 40;
    loadAllPokemons();
}

function showAllPokemon() {
    document.getElementById('all-pokemon').innerHTML = ''; //clear pokemon stack
    document.getElementById('show-more').classList.remove('d-none');
    document.getElementById('show-all').classList.add('d-none');
    offset = 0;
    loadAllPokemons();

}


function showLoader() {
    document.getElementById('loader-container').classList.remove('d-none');


}

function removeloader() {
    document.getElementById('loader-container').classList.add('d-none');

    document.getElementById('show-more').addEventListener('click', showLoader);
    document.getElementById('show-all').addEventListener('click', showLoader);
    document.getElementById('submit-search').addEventListener('click', showLoader);
}


//tab title change

let tabTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come back :(";
})
window.addEventListener("focus", () => {
    document.title = tabTitle;
})



