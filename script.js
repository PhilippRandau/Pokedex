        let currentPokemonName = '755';
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
            pokemonID.innerHTML = `#${pokemonIDFillWithZeros(currentPokemon)}`

            let pokemonType = document.getElementById('pokemon-type');
            pokemonType.innerHTML = `${charToUpperCase(currentPokemon['types'][0]['type']['name'])}`;

            let pokemonSprite = document.getElementById('pokemon-sprite')
            pokemonSprite.src = `${currentPokemon['sprites']['other']['official-artwork']['front_default']}`;
            //show standard about stats
            loadAbout();
        }


        function charToUpperCase(text) {
            let firstCharUpperCase = text.charAt(0).toUpperCase() + text.slice(1);
            return firstCharUpperCase;
        }


        function pokemonIDFillWithZeros(pokemonID) {
            if (pokemonID['id'] > 99) {
                return (pokemonID['id'] + "").padStart(1, "0");

            } else if (currentPokemon['id'] > 9) {
                return (pokemonID['id'] + "").padStart(2, "0");

            } else {
                return (pokemonID['id'] + "").padStart(3, "0");
            }
        }


        function unloadAllStats() {
            document.getElementById('pokemon-details-about').classList.add('d-none');
            document.getElementById('pokemon-details-basestats').classList.add('d-none');
            document.getElementById('pokemon-details-evolution').classList.add('d-none');
            document.getElementById('pokemon-details-moves').classList.add('d-none');
        }
