// let currentPokemonID = '4';
let currentPokemon;
let currentPokemonSpecies;
let currentPokemonEvolution;
let evolutionSpeciesBasePokemon;


async function loadPokemon(currentPokemonName) {
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
    pokemonType.innerHTML = '';
    for (let itype = 0; itype < currentPokemon['types'].length; itype++) {
        const type = currentPokemon['types'][itype]['type']['name'];
        pokemonType.innerHTML += `<span id="type-color${itype}" class="pokemon-type">${charToUpperCase(type)}</span>`;
        let typeColor = document.getElementById(`type-color${itype}`);
        changeCardColor(typeColor, type, itype);
    }


    let pokemonSprite = document.getElementById('pokemon-sprite')
    pokemonSprite.src = `${currentPokemon['sprites']['other']['official-artwork']['front_default']}`;

    let pokemonDescription = document.getElementById('description');

    pokemonDescription.innerHTML = /*html*/`<span>${removeSignFromText()}</span>`;


    //show pokemon details card
    document.getElementById('pokemon-details').classList.remove('d-none');
    document.getElementById('container').classList.add('blur');
    document.getElementById('header').classList.add('blur');
    document.getElementById('footer').classList.add('blur');

    //show standard about stats
    loadAbout();
}

function showEnglishFlavorText() {
    for (let i = 0; i < currentPokemonSpecies['flavor_text_entries'].length; i++) {
        const textLanguage = currentPokemonSpecies['flavor_text_entries'][i]['language']['name'];
        if (textLanguage == 'en') {
            return currentPokemonSpecies['flavor_text_entries'][i]['flavor_text'];
        }
    }
}

function removeSignFromText() {
    return showEnglishFlavorText().replace('', ' ');
}


function changeCardColor(typeColor, type, itype) {
    let bgDetails = document.getElementById('bg-details');

    switch (type) {
        case 'normal':
            if (itype > 0) {
                typeColor.style.backgroundColor = '#5C5C5C'; //background color of second type text
            } else {
                bgDetails.style.backgroundColor = '#757C82'; //background color of card
                typeColor.style.backgroundColor = '#5C5C5C'; //background color of type text
            }
            break;

        case 'fighting':
            if (itype > 0) {
                typeColor.style.backgroundColor = '#c8332b';
            } else {
                bgDetails.style.backgroundColor = '#AE2A24';
                typeColor.style.backgroundColor = '#c8332b';
            }
            break;

        case 'flying':
            if (itype > 0) {
                typeColor.style.backgroundColor = '#676377';
            } else {
                bgDetails.style.backgroundColor = '#4D4A59';
                typeColor.style.backgroundColor = '#676377';
            }
            break;

        case 'poison':
            if (itype > 0) {
                typeColor.style.backgroundColor = '#d24ed2';
            } else {
                bgDetails.style.backgroundColor = '#BB44BB';
                typeColor.style.backgroundColor = '#d24ed2';
            }
            break;

        case 'ground':
            if (itype > 0) {
                typeColor.style.backgroundColor = '#ee752f';
            } else {
                bgDetails.style.backgroundColor = '#CB6328';
                typeColor.style.backgroundColor = '#ee752f';
            }
            break;

        case 'rock':
            if (itype > 0) {
                typeColor.style.backgroundColor = '#9e8841';
            } else {
                bgDetails.style.backgroundColor = '#7F6E34';
                typeColor.style.backgroundColor = '#9e8841';
            }
            break;

        case 'bug':
            if (itype > 0) {
                typeColor.style.backgroundColor = '#7dcf01';
            } else {
                bgDetails.style.backgroundColor = '#6EB700';
                typeColor.style.backgroundColor = '#7dcf01';
            }
            break;

        case 'ghost':
            if (itype > 0) {
                typeColor.style.backgroundColor = '#8f84e3';
            } else {
                bgDetails.style.backgroundColor = '#7D74C7';
                typeColor.style.backgroundColor = '#8f84e3';
            }
            break;

        case 'steel':
            if (itype > 0) {
                typeColor.style.backgroundColor = '#3188a4';
            } else {
                bgDetails.style.backgroundColor = '#2C768E';
                typeColor.style.backgroundColor = '#3188a4';
            }
            break;

        case 'fire':
            if (itype > 0) {
                typeColor.style.backgroundColor = '#fc7d1c';
            } else {
                bgDetails.style.backgroundColor = '#FF9730';
                typeColor.style.backgroundColor = '#fc7d1c';
            }
            break;

        case 'water':
            if (itype > 0) {
                typeColor.style.backgroundColor = '#A2DAE7';
            } else {
                bgDetails.style.backgroundColor = '#76C9DF';
                typeColor.style.backgroundColor = '#A2DAE7';
            }
            break;

        case 'grass':
            if (itype > 0) {
                typeColor.style.backgroundColor = '#08995a';
            } else {
                bgDetails.style.backgroundColor = '#067D4A';
                typeColor.style.backgroundColor = '#08995a';
            }
            break;

        case 'electric':
            if (itype > 0) {
                typeColor.style.backgroundColor = '#348aa7';
            } else {
                bgDetails.style.backgroundColor = '#FFCC2C';
                typeColor.style.backgroundColor = '#348aa7';
            }
            break;

        case 'psychic':
            if (itype > 0) {
                typeColor.style.backgroundColor = '#348aa7';
            } else {
                bgDetails.style.backgroundColor = '#2C768E';
                typeColor.style.backgroundColor = '#348aa7';
            }
            break;

        case 'ice':
            if (itype > 0) {
                typeColor.style.backgroundColor = '#6ff7e9';
            } else {
                bgDetails.style.backgroundColor = '#61CEC3';
                typeColor.style.backgroundColor = '#6ff7e9';
            }
            break;

        case 'dragon':
            if (itype > 0) {
                typeColor.style.backgroundColor = '#0158bd';
            } else {
                bgDetails.style.backgroundColor = '#1C66BA';
                typeColor.style.backgroundColor = '#0158bd';
            }
            break;

        case 'dark':
            if (itype > 0) {
                typeColor.style.backgroundColor = '#000000';
            } else {
                bgDetails.style.backgroundColor = '#4D4A59';
                typeColor.style.backgroundColor = '#000000';
            }
            break;

        case 'fairy':
            if (itype > 0) {
                typeColor.style.backgroundColor = '#ffc6ef';
            } else {
                bgDetails.style.backgroundColor = '#E975C8';
                typeColor.style.backgroundColor = '#ffc6ef';
            }
            break;
    }
}


function charToUpperCase(text) {
    let firstCharUpperCase = text.charAt(0).toUpperCase() + text.slice(1);
    return firstCharUpperCase;
}


function pokemonIDFillWithZeros(pokemonID) {
    return (pokemonID + "").padStart(3, "0");
}


function unloadAllStats() {
    document.getElementById('pokemon-details-about').classList.add('d-none');
    document.getElementById('pokemon-details-basestats').classList.add('d-none');
    document.getElementById('pokemon-details-evolution').classList.add('d-none');
    document.getElementById('pokemon-details-moves').classList.add('d-none');
}

function closeCard() {
    document.getElementById('pokemon-details').classList.add('anim-fadeout');
    setTimeout(() => {
        document.getElementById('pokemon-details').classList.add('d-none');
        document.getElementById('pokemon-details').classList.remove('anim-fadeout');
        document.getElementById('container').classList.remove('blur');
        document.getElementById('header').classList.remove('blur');
        document.getElementById('footer').classList.remove('blur');
    }, 490);
}

function doNotCloseCard(event) {
    event.stopPropagation();
}