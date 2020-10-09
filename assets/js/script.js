fetch_pokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
        .then(function(response) {
            response.json()
                .then(function(pokemon) {
                    let pokemon_list_one = pokemon.results;
                    let pokemon_selector_one = document.getElementById('pokemon-dropdown-one');
                    pokemon_list_one.map(function(pokemon) {
                        let option_list_one = document.createElement('option');
                        option_list_one.setAttribute('value', pokemon);
                        option_list_one.innerHTML = pokemon.name;
                        pokemon_selector_one.appendChild(option_list_one);
                    });
                    let pokemon_list_two = pokemon.results;
                    let pokemon_selector_two = document.getElementById('pokemon-dropdown-two');
                    pokemon_list_two.map(function(pokemon) {
                        let option_list_two = document.createElement('option');
                        option_list_two.setAttribute('value', pokemon);
                        option_list_two.innerHTML = pokemon.name;
                        pokemon_selector_two.appendChild(option_list_two);
                    });
                });
        });
};

fetch_pokemon();




// pokeSelector.addEventListener("change", function() {
//     let breedName = this.value;
//     fetch(`https://pokeapi.co/api/v2/pokemon/`)
//         .then(function(response) {
//             return response.json();
//         }).then(function(data) {
//             let breedImage = document.createElement('img');
//             breedImage.setAttribute('src', data.message);
//             document.body.appendChild(breedImage);


//         })

// })