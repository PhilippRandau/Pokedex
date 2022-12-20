function loadMoves() {
    buttonStyleDeAct();
    buttonStyleAct('stats-button3');
    unloadAllStats();
    document.getElementById('pokemon-details-moves').classList.remove('d-none');
    showPokemonMoves();
}


function showPokemonMoves(){
   let pokemonMoves = document.getElementById('pokemon-details-moves');
   pokemonMoves.innerHTML = '';
   for (let i = 0; i < currentPokemon['moves'].length; i++) {
    const moveAbility = currentPokemon['moves'][i]['move']['name'];
    pokemonMoves.innerHTML += `<div class="pokemon-moves">${moveAbility}</div>`;
   }
}