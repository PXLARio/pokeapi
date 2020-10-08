fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let playerOne = data.results.sort();
        let pokemonListOne = document.getElementById('pokemon-dropdown-one');
        playerOne.map(function(pokemon) {
            let pokeElementOne = document.createElement('option');
            pokeElementOne.setAttribute('value', pokemon);
            pokeElementOne.innerHTML = pokemon.name;
            pokemonListOne.appendChild(pokeElementOne);
        });
        let playerTwo = data.results.sort();
        let pokemonListTwo = document.getElementById('pokemon-dropdown-two');
        playerTwo.map(function(pokemon) {
            let pokeElementTwo = document.createElement('option');
            pokeElementTwo.setAttribute('value', pokemon);
            pokeElementTwo.innerHTML = pokemon.name;
            pokemonListTwo.appendChild(pokeElementTwo);
        });
    })


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