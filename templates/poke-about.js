function loadAbout() {
    buttonStyleDeAct();
    buttonStyleAct('stats-button0');
    unloadAllStats();
    document.getElementById('pokemon-details-about').classList.remove('d-none');
    showPokemonHeight();
    showPokemonWeight();
    showPokemonAbilities();
    showPokemonSpecies();
    showPokemonEggGroups();
    showPokemonGender();
    pokemonEggCycle();
}


function buttonStyleAct(currentStats) {
    document.getElementById(currentStats).style.color = 'black';
    document.getElementById(currentStats).style.borderBottom = '2px solid black';
}


function buttonStyleDeAct() {
    for (let i = 0; i < 4; i++) {
        document.getElementById(`stats-button${i}`).style.color = 'rgba(0, 0, 0, 0.3)';
        document.getElementById(`stats-button${i}`).style.borderBottom = '2px solid rgba(0, 0, 0, 0.10)';
    }

}


function showPokemonSpecies() {
    let pokemonSpecies = document.getElementById('pokemon-species');
    let modifiedSpeciesName = currentPokemonSpecies['genera'][7]['genus'].split(' ')
    pokemonSpecies.innerHTML = `${modifiedSpeciesName[0]}`;
}


function showPokemonHeight() {
    let pokemonHeight = document.getElementById('pokemon-height');
    pokemonHeight.innerHTML = `${currentPokemon['height'] / 10}m`;
}


function showPokemonWeight() {
    let pokemonWeight = document.getElementById('pokemon-weight');
    pokemonWeight.innerHTML = `${currentPokemon['weight'] / 10}kg`;
}


function showPokemonAbilities() {
    let pokemonAbilities = document.getElementById('pokemon-abilities');
    pokemonAbilities.innerHTML = '';
    for (let i = 0; i < currentPokemon['abilities'].length; i++) {
        const ability = currentPokemon['abilities'][i]['ability']['name'];
        pokemonAbilities.innerHTML += `${ability}`;

        abilitiesSpacing(i, pokemonAbilities);
    }
}


function abilitiesSpacing(i, pokemonAbilities) {
    if (i < currentPokemon['abilities'].length - 1) { pokemonAbilities.innerHTML += ', ' }
}


function showPokemonGender() {
    let pokemonGender = document.getElementById('pokemon-gender');
    pokemonGenderRates(pokemonGender, currentPokemonSpecies);
}


function pokemonGenderRates(pokemonGender) {
    switch (currentPokemonSpecies['gender_rate']) {
        case 0:
            //100% men
            pokemonGender.innerHTML = genderRate100M();
            break;
        case 1:
            //7:1 87,5%:12,5%
            pokemonGender.innerHTML = genderRate7_1();
            break;
        case 2:
            //3:1 75%:25%
            pokemonGender.innerHTML = genderRate3_1();
            break;

        case 4:
            //1:1 50%:50%
            pokemonGender.innerHTML = genderRate1_1()
            break;

        case 6:
            //3:1 75%:25%
            pokemonGender.innerHTML = genderRate1_3();
            break;

        case 7:
            //1:7 12,5:87,5
            pokemonGender.innerHTML = genderRate1_7();
            break;

        case 8:
            //100% women
            pokemonGender.innerHTML = genderRate100W();
            break;

        case -1:
            pokemonGender.innerHTML = 'unknown';
            break;

        default:
            break;
    }
}


function showPokemonEggGroups() {
    let pokemonEggGroups = document.getElementById('pokemon-egg-groups');
    pokemonEggGroups.innerHTML = '';
    for (let i = 0; i < currentPokemonSpecies['egg_groups'].length; i++) {
        const egg_group = currentPokemonSpecies['egg_groups'][i]['name'];
        pokemonEggGroups.innerHTML += `${egg_group}`;

        eggGroupsSpacing(i, pokemonEggGroups);
    }
}


function eggGroupsSpacing(i, pokemonEggGroups) {
    if (i < currentPokemonSpecies['egg_groups'].length - 1) { pokemonEggGroups.innerHTML += ', ' }
}


function pokemonEggCycle() {
    //other name for egg cycle is hatch counter
    let pokemonEggCycle = document.getElementById('pokemon-egg-cycle');
    pokemonEggCycle.innerHTML = `${currentPokemonSpecies['hatch_counter']}`;
}




//----------------HTML TEMPLATES--------------------


function genderRate100M() {
    return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="gender-male" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
        </svg>
        100%
        `;
}


function genderRate7_1() {
    return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="gender-male" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
        </svg>
        87,5%
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="gender-female" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"/>
        </svg>
        12,5% 
        `;
}


function genderRate1_3(){
    return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="gender-male" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
        </svg>
        25%
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="gender-female" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"/>
        </svg>
        75%
        `;
}


function genderRate1_1() {
    return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="gender-male" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
        </svg>
        50%
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="gender-female" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"/>
        </svg>
        50%
        `;
}


function genderRate3_1(){
    return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="gender-male" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
        </svg>
        75%
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="gender-female" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"/>
        </svg>
        25%
        `;
}


function genderRate1_7(){
    return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="gender-male" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
        </svg>
        12,5%
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="gender-female" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"/>
        </svg>
        87,5%
        `;
}


function genderRate100W() {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="gender-female" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"/>
        </svg>
        100%
        `;
}

