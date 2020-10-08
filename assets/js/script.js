fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let pokemonBreed = data.results;
        console.log(pokemonBreed);
        let pokemonList = document.getElementById('pokemon-dropdown');
        pokemonBreed.forEach(function(pokemon) {
            let pokeElement = document.createElement('option');
            pokeElement.setAttribute('value', pokemon);
            pokeElement.innerHTML = pokemon;
            pokemonList.appendChild(pokeElement);
        });
    })


pokeSelector.addEventListener("change", function() {
    let breedName = this.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            let breedImage = document.createElement('img');
            breedImage.setAttribute('src', data.message);
            document.body.appendChild(breedImage);


        })

})