<<<<<<< HEAD
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


=======
const P = new Pokedex.Pokedex();

var interval = {
    limit: 100,
    offset: 0
}

P.getPokemonsList(interval)
    .then(function(response) {
        return response;
    }).then(function(response) {



        // let pokemonListOne = document.getElementById('pokemon-dropdown-one');
        // playerOne.map(function(pokemon) {
        //     let pokeElementOne = document.createElement('option');
        //     pokeElementOne.setAttribute('value', pokemon);
        //     pokeElementOne.innerHTML = pokemon.name;
        //     pokemonListOne.appendChild(pokeElementOne);
    });
// let playerTwo = data.results;
// let pokemonListTwo = document.getElementById('pokemon-dropdown-two');
// playerTwo.map(function(pokemon) {
// let pokeElementTwo = document.createElement('option');
// pokeElementTwo.setAttribute('value', pokemon);
// pokeElementTwo.innerHTML = pokemon.name;
// pokemonListTwo.appendChild(pokeElementTwo);
// });
// })



// fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         let playerOne = data.results.sort();
//         let pokemonListOne = document.getElementById('pokemon-dropdown-one');
//         playerOne.map(function(pokemon) {
//             let pokeElementOne = document.createElement('option');
//             pokeElementOne.setAttribute('value', pokemon);
//             pokeElementOne.innerHTML = pokemon.name;
//             pokemonListOne.appendChild(pokeElementOne);
//         });
//         let playerTwo = data.results.sort();
//         let pokemonListTwo = document.getElementById('pokemon-dropdown-two');
//         playerTwo.map(function(pokemon) {
//             let pokeElementTwo = document.createElement('option');
//             pokeElementTwo.setAttribute('value', pokemon);
//             pokeElementTwo.innerHTML = pokemon.name;
//             pokemonListTwo.appendChild(pokeElementTwo);
//         });
//     })
>>>>>>> fa47090157f284a06ac74c87f51019a8e4730005


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