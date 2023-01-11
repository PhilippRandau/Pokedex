async function loadPokemonEvolution() {
    let url = `${currentPokemonSpecies['evolution_chain']['url']}`;
    let response = await fetch(url);
    currentPokemonEvolution = await response.json();
}


function loadEvolution() {
    buttonStyleDeAct();
    buttonStyleAct('stats-button2');
    unloadAllStats();
    document.getElementById('pokemon-details-evolution').classList.remove('d-none');
    showEvolution();
}


function showEvolution() {
    evolutionSpeciesBase();
    evolutionSpecies1();
    evolutionSpecies2();
}


async function evolutionSpeciesBase() {
    let evolutionBaseName = document.getElementById('evolution-base-name');
    document.getElementById('evolution-base').src = `./img/arrow-clockwise.svg`;
    evolutionBaseName.innerHTML = `${charToUpperCase(currentPokemonEvolution['chain']['species']['name'])}`;
    let url = `https://pokeapi.co/api/v2/pokemon/${currentPokemonEvolution['chain']['species']['name']}`;
    let response = await fetch(url);
    evolutionSpeciesBasePokemon = await response.json();
    evolutionBaseName.innerHTML += `<br> #${pokemonIDFillWithZeros(evolutionSpeciesBasePokemon['id'])}`;
    if (evolutionSpeciesBasePokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] == null && evolutionSpeciesBasePokemon['sprites']['versions']['generation-v']['black-white']['front_default'] == null) {
            document.getElementById('evolution-base').src = `${evolutionSpeciesBasePokemon['sprites']['front_default']}`;
        }else if(evolutionSpeciesBasePokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] == null){
            document.getElementById('evolution-base').src = `${evolutionSpeciesBasePokemon['sprites']['versions']['generation-v']['black-white']['front_default']}`;
        }
        else{
            document.getElementById('evolution-base').src = `${evolutionSpeciesBasePokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']}`;
        }
}


async function evolutionSpecies1() {
    let evolution1Name = document.getElementById('evolution-1-name');
    document.getElementById('evolution-1').src = `./img/arrow-clockwise.svg`;
    try {
        evolution1Name.innerHTML = `${charToUpperCase(currentPokemonEvolution['chain']['evolves_to'][0]['species']['name'])}`;
        let url = `https://pokeapi.co/api/v2/pokemon/${currentPokemonEvolution['chain']['evolves_to'][0]['species']['name']}`;
        let response = await fetch(url);
        let evolutionSpecies1Pokemon = await response.json();
        evolution1Name.innerHTML += `<br> #${pokemonIDFillWithZeros(evolutionSpecies1Pokemon['id'])}`;
        if (evolutionSpecies1Pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] == null) {
            document.getElementById('evolution-1').src = `${evolutionSpecies1Pokemon['sprites']['versions']['generation-v']['black-white']['front_default']}`;
        }else{
            document.getElementById('evolution-1').src = `${evolutionSpecies1Pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']}`;
        }
    } catch (error) {
        document.getElementById('evolution-1').src = `./img/slash-circle.svg`;
        evolution1Name.innerHTML = 'no evolution';
    }
    
}


async function evolutionSpecies2() {
    let evolution2Name = document.getElementById('evolution-2-name');
    document.getElementById('evolution-2').src = `./img/arrow-clockwise.svg`;
    try {
        evolution2Name.innerHTML = `${charToUpperCase(currentPokemonEvolution['chain']['evolves_to'][0]['evolves_to'][0]['species']['name'])}`
        let url = `https://pokeapi.co/api/v2/pokemon/${currentPokemonEvolution['chain']['evolves_to'][0]['evolves_to'][0]['species']['name']}`;
        let response = await fetch(url);
        let evolutionSpecies2Pokemon = await response.json();
        evolution2Name.innerHTML += `<br> #${pokemonIDFillWithZeros(evolutionSpecies2Pokemon['id'])}`;
        if (evolutionSpecies2Pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] == null) {
            document.getElementById('evolution-2').src = `${evolutionSpecies2Pokemon['sprites']['versions']['generation-v']['black-white']['front_default']}`;
        }else{
            document.getElementById('evolution-2').src = `${evolutionSpecies2Pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']}`;
        }
    } catch (error) {
        document.getElementById('evolution-2').src = `./img/slash-circle.svg`;
        evolution2Name.innerHTML = 'no evolution';
    }
}
