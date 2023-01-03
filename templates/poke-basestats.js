function loadBaseStats() {
    buttonStyleDeAct();
    buttonStyleAct('stats-button1');
    unloadAllStats();
    showPokemonStats();
    document.getElementById('pokemon-details-basestats').classList.remove('d-none');
}


function showPokemonStats() {
    let totalStatPoints = 0;
    for (let i = 0; i < currentPokemon['stats'].length; i++) {
        let pokemonStat = document.getElementById(`pokemon-stat${i}`);
        pokemonStat.innerHTML = `${currentPokemon['stats'][i]['base_stat']}`
        totalStatPoints += currentPokemon['stats'][i]['base_stat'];
        showPokemonStatsTypeAnimation(i);
        showPokemonStatsPb(i);
        
    }
    let pokemonStatTotal = document.getElementById('pokemon-stat-total');

    pokemonStatTotal.innerHTML = `${totalStatPoints}`;
    document.getElementById(`type-gif-total`).innerHTML =`<progress id="pokemon-stat-total-pb" class="stats-progressbar"></progress>`;
    document.getElementById(`type-gif-total`).innerHTML += `<div class="type-gif"><img style="left:calc(${totalStatPoints / 15}% - 9px)" src="./img/fire.gif" alt=""></div>`;
    showPokemonTotalStatsPb(totalStatPoints);
}


function showPokemonStatsPb(i) {
    PokemonStatPb = document.getElementById(`pokemon-stat${i}-pb`);
    PokemonStatPb.value = `${currentPokemon['stats'][i]['base_stat']}`;
    PokemonStatPb.max = 200;

}


function showPokemonTotalStatsPb(totalStatPoints) {
    pokemonTotalStatPb = document.getElementById(`pokemon-stat-total-pb`);
    pokemonTotalStatPb.value = `${totalStatPoints}`;
    pokemonTotalStatPb.max = 1500;

}


function showPokemonStatsTypeAnimation(i) {
    document.getElementById(`type-gif${i}`).innerHTML = `<progress id="pokemon-stat${i}-pb" class="stats-progressbar"></progress>`;
    document.getElementById(`type-gif${i}`).innerHTML += `<div class="type-gif"><img style="left:calc((${currentPokemon['stats'][i]['base_stat']}%/2) - 9px)" src="./img/fire.gif" alt=""></div>`;
}
