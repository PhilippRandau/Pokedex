let currentPokemonName = '4';
let currentPokemon;
let currentPokemonSpecies;
let currentPokemonEvolution;
let evolutionSpeciesBasePokemon;


async function loadPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/${currentPokemonName}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    await loadPokemonSpecies();
    await loadPokemonEvolution();

    showDetailsPokemon();
}


async function loadPokemonSpecies() {
    let url = `${currentPokemon['species']['url']}`;
    let response = await fetch(url);
    currentPokemonSpecies = await response.json();
}


function showDetailsPokemon() {


    let pokemonName = document.getElementById('pokemon-name');
    pokemonName.innerHTML = `${charToUpperCase(currentPokemon['forms'][0]['name'])}`;

    let pokemonID = document.getElementById('pokemon-id');
    pokemonID.innerHTML = `#${pokemonIDFillWithZeros(currentPokemon['id'])}`

    let pokemonType = document.getElementById('pokemon-type');
    pokemonType.innerHTML = `${charToUpperCase(currentPokemon['types'][0]['type']['name'])}`;

    let pokemonSprite = document.getElementById('pokemon-sprite')
    pokemonSprite.src = `${currentPokemon['sprites']['other']['official-artwork']['front_default']}`;

    let pokemonDescription = document.getElementById('description');
    
    pokemonDescription.innerHTML = /*html*/`<span>${removeSignFromText()}</span>`;

    changeBgColor(pokemonType);

    //show standard about stats
    loadAbout();
}


function removeSignFromText(){
    return currentPokemonSpecies['flavor_text_entries'][0]['flavor_text'].replace('', ' ');
}


function changeBgColor(pokemonType) {
    let bgDetails = document.getElementById('bg-details');

    switch (currentPokemonSpecies['color']['name']) {
        case 'brown':
            //Normal
            bgDetails.style.backgroundColor = '#98714e85';
            pokemonType.style.backgroundColor = '#CAB89B';
            break;

        //Fighting
        case 'white':
            bgDetails.style.backgroundColor = 'white';
            break;

        //Flying
        case 'white':
            bgDetails.style.backgroundColor = 'white';
            break;

        // Poison
        case 'white':
            bgDetails.style.backgroundColor = 'white';
            break;

        // Ground
        case 'white':
            bgDetails.style.backgroundColor = 'white';
            break;

        // Rock
        case 'white':
            bgDetails.style.backgroundColor = 'white';
            break;

        // Bug
        case 'white':
            bgDetails.style.backgroundColor = 'white';
            break;

        // Ghost
        case 'white':
            bgDetails.style.backgroundColor = 'white';
            break;

        // Steel
        case 'white':
            bgDetails.style.backgroundColor = 'white';
            break;

        // Fire
        case 'red':
            bgDetails.style.backgroundColor = '#FC6C6D';
            pokemonType.style.backgroundColor = '#ff9696';
            break;

        // Water
        case 'blue':
            bgDetails.style.backgroundColor = '#76C9DF';
            pokemonType.style.backgroundColor = '#A2DAE7';
            break;

        // Grass
        case 'white':
            bgDetails.style.backgroundColor = 'white';
            break;

        // Electric
        case 'white':
            bgDetails.style.backgroundColor = 'white';
            break;

        // Psychic
        case 'white':
            bgDetails.style.backgroundColor = 'white';
            break;

        // Ice
        case 'white':
            bgDetails.style.backgroundColor = 'white';
            break;

        // Dragon
        case 'white':
            bgDetails.style.backgroundColor = 'white';
            break;

        // Dark
        case 'white':
            bgDetails.style.backgroundColor = 'white';
            break;

        // Fairy
        case 'white':
            bgDetails.style.backgroundColor = 'white';
            break;

        default:
            bgDetails.style.backgroundColor = 'white';
            break;
    }
}


function charToUpperCase(text) {
    let firstCharUpperCase = text.charAt(0).toUpperCase() + text.slice(1);
    return firstCharUpperCase;
}


function pokemonIDFillWithZeros(pokemonID) {
    if (pokemonID > 99) {
        return (pokemonID + "").padStart(1, "0");

    } else if (pokemonID > 9) {
        return (pokemonID + "").padStart(2, "0");

    } else {
        return (pokemonID + "").padStart(3, "0");
    }
}


function unloadAllStats() {
    document.getElementById('pokemon-details-about').classList.add('d-none');
    document.getElementById('pokemon-details-basestats').classList.add('d-none');
    document.getElementById('pokemon-details-evolution').classList.add('d-none');
    document.getElementById('pokemon-details-moves').classList.add('d-none');
}
