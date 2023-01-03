let allPokemon;
let offset = 0;

async function loadAllPokemons() {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=40`;
    let response = await fetch(url);
    allPokemon = await response.json();
    for (let i = 0; i < allPokemon['results'].length; i++) {
        const pokemon = allPokemon['results'][i];
        await loadBackground(pokemon['name']);


    }

    //loader display
    document.getElementById('loader-container').classList.add('d-none');
    const element = document.getElementById('loadMore');
    element.addEventListener('click', showLoader);


    
}

async function loadBackground(pokemonNames) {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonNames}/`;
    let response = await fetch(url);
    everyPokemon = await response.json();

    document.getElementById('all-pokemon').innerHTML += /*html*/`
    <div class="container-every-pokemon">
        <div onclick="loadPokemon('${pokemonNames}')" class="every-pokemon">
        
            <img class="poke-pic" src='${everyPokemon['sprites']['other']['official-artwork']['front_default']}'>
            
        </div>
        <div class="every-pokemon-text">
            <span>${charToUpperCase(everyPokemon['forms'][0]['name'])}</span>
            <span>#${pokemonIDFillWithZeros(everyPokemon['id'])}</span>
        </div>
    </div>
    `;

}



function searchPokemon() {
    console.log('searching...');
}


function loadMorePokemon() {
    offset += 40;
    loadAllPokemons();
}


function showLoader() {
    document.getElementById('loader-container').classList.remove('d-none');
}


//tab title change

let tabTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come back :(";
})
window.addEventListener("focus", () => {
    document.title = tabTitle;
})



