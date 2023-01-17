let evolutionSpeciesBasePokemon;
let evolutionSpecies1Pokemon;
let evolutionSpecies2Pokemon;

async function loadPokemonEvolution() {
    let url = `${currentPokemonSpecies['evolution_chain']['url']}`;
    let response = await fetch(url);
    currentPokemonEvolution = await response.json();
}


function loadEvolution() {
    buttonStyleDeAct();
    buttonStyleAct('stats-button2');
    unloadAllStats();
    showEvolution();
}


function showEvolution() {
    document.getElementById('pokemon-details-evolution').classList.remove('d-none');
    evolutionSpeciesBase();
    evolutionSpecies1();
    evolutionSpecies2();
}


async function evolutionSpeciesBase() {
    let evolutionBaseName = document.getElementById('evolution-base-name');
    evolutionBaseName.innerHTML = innerHTMLEvolutionSpeciesBase();
    loadingEvolutionPicture('evolution-base');
    await fetchEvolutionSpeciesBasePokemon();
    evolutionBaseName.innerHTML += innerHTMLEvolutionSpeciesBaseID();
    if (animationPokemonGIFEmpty(evolutionSpeciesBasePokemon) && basePokemonIMGEmpty(evolutionSpeciesBasePokemon)) {
        document.getElementById('evolution-base').src = pokemonDefaultIMG(evolutionSpeciesBasePokemon);
    } else if (animationPokemonGIFEmpty(evolutionSpeciesBasePokemon)) {
        document.getElementById('evolution-base').src = pokemonBlackAndWhiteIMG(evolutionSpeciesBasePokemon);
    }
    else {
        document.getElementById('evolution-base').src = pokemonBlackAndWhiteGIF(evolutionSpeciesBasePokemon);
    }
}


function animationPokemonGIFEmpty(evolutionSpeciesPokemon) {
    return evolutionSpeciesPokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] == null;
}


function basePokemonIMGEmpty(evolutionSpeciesPokemon) {
    return evolutionSpeciesPokemon['sprites']['versions']['generation-v']['black-white']['front_default'] == null
}




async function evolutionSpecies1() {
    let evolution1Name = document.getElementById('evolution-1-name');
    loadingEvolutionPicture('evolution-1');
    try {
        evolution1Name.innerHTML = innerHTMLEvolutionSpecies1();
        await fetchEvolutionSpecies1Pokemon();
        evolution1Name.innerHTML += innerHTMLEvolutionSpecies1ID();
        if (animationPokemonGIFEmpty(evolutionSpecies1Pokemon)) {
            document.getElementById('evolution-1').src = pokemonDefaultIMG(evolutionSpecies1Pokemon);
        } else {
            document.getElementById('evolution-1').src = pokemonBlackAndWhiteIMG(evolutionSpecies1Pokemon);
        }
    } catch (error) {
        document.getElementById('evolution-1').src = `./img/slash-circle.svg`;
        evolution1Name.innerHTML = 'no evolution';
    }

}


async function evolutionSpecies2() {
    let evolution2Name = document.getElementById('evolution-2-name');
    loadingEvolutionPicture('evolution-2');
    try {
        evolution2Name.innerHTML = innerHTMLEvolutionSpecies2();
        await fetchEvolutionSpecies2Pokemon();
        evolution2Name.innerHTML += innerHTMLEvolutionSpecies2ID();
        if (animationPokemonGIFEmpty(evolutionSpecies2Pokemon)) {
            document.getElementById('evolution-2').src = pokemonDefaultIMG(evolutionSpecies2Pokemon);
        } else {
            document.getElementById('evolution-2').src = pokemonBlackAndWhiteIMG(evolutionSpecies2Pokemon);
        }
    } catch (error) {
        document.getElementById('evolution-2').src = `./img/slash-circle.svg`;
        evolution2Name.innerHTML = 'no evolution';
    }
}


function loadingEvolutionPicture(evolutionStatus) {
    document.getElementById(evolutionStatus).src = `./img/arrow-clockwise.svg`;
}


async function fetchEvolutionSpeciesBasePokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/${currentPokemonEvolution['chain']['species']['name']}`;
    let response = await fetch(url);
    evolutionSpeciesBasePokemon = await response.json();
}

async function fetchEvolutionSpecies1Pokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/${currentPokemonEvolution['chain']['evolves_to'][0]['species']['name']}`;
    let response = await fetch(url);
    evolutionSpecies1Pokemon = await response.json();
}


async function fetchEvolutionSpecies2Pokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/${currentPokemonEvolution['chain']['evolves_to'][0]['evolves_to'][0]['species']['name']}`;
    let response = await fetch(url);
    evolutionSpecies2Pokemon = await response.json();
}


function pokemonDefaultIMG(evolutionSpeciesPokemon){
    return `${evolutionSpeciesPokemon['sprites']['front_default']}`;
}


function pokemonBlackAndWhiteIMG(evolutionSpeciesPokemon){
    return `${evolutionSpeciesPokemon['sprites']['versions']['generation-v']['black-white']['front_default']}`;
}

function pokemonBlackAndWhiteGIF(evolutionSpeciesPokemon){
    return `${evolutionSpeciesPokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']}`;
}
// --------------------------html---------------------------

function innerHTMLEvolutionSpeciesBase() {
    return `${charToUpperCase(currentPokemonEvolution['chain']['species']['name'])}`;
}


function innerHTMLEvolutionSpeciesBaseID() {
    return `<br> #${pokemonIDFillWithZeros(evolutionSpeciesBasePokemon['id'])}`;
}


function innerHTMLEvolutionSpecies1() {
    return `${charToUpperCase(currentPokemonEvolution['chain']['evolves_to'][0]['species']['name'])}`;
}


function innerHTMLEvolutionSpecies1ID() {
    return `<br> #${pokemonIDFillWithZeros(evolutionSpecies1Pokemon['id'])}`;
}


function innerHTMLEvolutionSpecies2() {
    return `${charToUpperCase(currentPokemonEvolution['chain']['evolves_to'][0]['evolves_to'][0]['species']['name'])}`
}


function innerHTMLEvolutionSpecies2ID() {
    return `<br> #${pokemonIDFillWithZeros(evolutionSpecies2Pokemon['id'])}`;
}