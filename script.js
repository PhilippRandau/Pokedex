let allPokemon;
let everyPokemon;
let pokemonNames;
let offset = 0;
let maxGenValue;
let limit = 20;

async function init() {
    loadAllPokemonNames();
    showSelectedGeneration(0, 151);
    document.getElementById('select-generations1').classList.add('bg-gen-buttons');
    document.getElementById('show-all').addEventListener("click", function () { document.getElementById('select-generations1').classList.add('bg-gen-buttons') });

    markSelectedGeneration();
}


async function loadAllPokemons() {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
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
        
            <img class="poke-pic" src='${everyPokemon['sprites']['other']['official-artwork']['front_default']}'>
            
        </div>
        <div class="every-pokemon-text">
            <span>${charToUpperCase(everyPokemon['forms'][0]['name'])}</span>
            <span>#${pokemonIDFillWithZeros(everyPokemon['id'])}</span>
        </div>
    </div>
    `;
    let everyPokemonType = document.getElementById(`every-pokemon${everyPokemon['id']}`);
    everyPokemonType.style.backgroundColor = changeEveryBgColor(everyPokemon['types'][0]['type']['name']);
}


function showSelectedGeneration(generationOffset, maxGenerationOffset) {
    maxGenValue = maxGenerationOffset;
    clearMarkedGenButtons();
    showLoader();
    offset = generationOffset;
    document.getElementById('all-pokemon').innerHTML = ''; //clear pokemon stack
    document.getElementById('show-more').classList.remove('d-none');
    loadAllPokemons();
}


function clearMarkedGenButtons() {
    for (let i = 1; i < 9; i++) {
        const element = document.getElementById(`select-generations${i}`);
        element.classList.remove('bg-gen-buttons');
    }
}


function showMorePokemon() {
    showLoader();
    offset += 20;
    if ((maxGenValue - offset) < 20) {
        limit = maxGenValue - offset;
        document.getElementById('show-more').classList.add('d-none');
        document.getElementById('show-generation-end').classList.remove('d-none');
    }
    loadAllPokemons();
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
    showLoader();
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
    document.getElementById('show-generation-end').classList.add('d-none');
    clearMarkedGenButtons();
    removeloader();
}


async function loadAllPokemonNames() {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=903`;
    let response = await fetch(url);
    pokemonNames = await response.json();
}


function showAllPokemon() {
    showLoader();
    document.getElementById('all-pokemon').innerHTML = ''; //clear pokemon stack
    document.getElementById('show-more').classList.remove('d-none');
    document.getElementById('show-all').classList.add('d-none');
    clearMarkedGenButtons();
    document.getElementById('select-generations1').classList.add('bg-gen-buttons'); //button generations 1 mark

    offset = 0;
    loadAllPokemons();

}


function markSelectedGeneration() {
    for (let i = 1; i < 9; i++) {
        const element = document.getElementById(`select-generations${i}`);
        element.addEventListener("click", function () { element.classList.add('bg-gen-buttons') });

    }
}


function showLoader() {
    document.getElementById('loader-container').classList.remove('fadeOutAndHide');
    document.getElementById('loader-container').classList.add('fadeInAndShow');
    document.getElementById('body').style.overflow = "hidden";
}


function removeloader() {
    document.getElementById('loader-container').classList.remove('fadeInAndShow');
    document.getElementById('loader-container').classList.add('fadeOutAndHide');
    document.getElementById('body').style.overflow = "scroll";
}


//tab title change
let tabTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come back :(";
})
window.addEventListener("focus", () => {
    document.title = tabTitle;
})



