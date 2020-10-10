fetch(`https://pokeapi.co/api/v2/pokemon?limit=30`)
    .then(function(response) {
        response.json()
            .then(function(pokemon) {
                let pokemon_list_one = pokemon.results;
                let pokemon_selector_one = document.getElementById('pokemon-dropdown-one');
                pokemon_list_one.map(function(pokemon) {
                    let option_list_one = document.createElement('option');
                    option_list_one.setAttribute('value', pokemon.name);
                    option_list_one.innerHTML = pokemon.name;
                    pokemon_selector_one.appendChild(option_list_one);
                });
                let pokemon_list_two = pokemon.results;
                let pokemon_selector_two = document.getElementById('pokemon-dropdown-two');
                pokemon_list_two.map(function(pokemon) {
                    let option_list_two = document.createElement('option');
                    option_list_two.setAttribute('value', pokemon.name);
                    option_list_two.innerHTML = pokemon.name;
                    pokemon_selector_two.appendChild(option_list_two);
                });
            });
    });



let pokemon_selector_one = document.getElementById("pokemon-dropdown-one");
pokemon_selector_one.addEventListener("change", function() {
    let pokemon_name = this.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            let pokemon_sprite = document.getElementById('player_one');
            let pokemon_title = document.getElementById('p1-pokemon');
            pokemon_sprite.setAttribute('src', data.sprites["front_default"]);
            pokemon_sprite.setAttribute('alt', pokemon_name);
            pokemon_title.innerHTML = pokemon_name;
            document.getElementsByClassName("pokemon-sprite-one")[0].appendChild(pokemon_sprite);

            document.getElementById("base-xp-1").innerHTML = `XP: ${data.base_experience}`;
            document.getElementById("poke-hp-1").innerHTML = `HP: ${data.stats[0].base_stat}`;
            document.getElementById("poke-attack-1").innerHTML = `Attack: ${data.stats[1].base_stat}`;
            document.getElementById("poke-def-1").innerHTML = `Defense: ${data.stats[2].base_stat}`;
        })
})

let pokemon_selector_two = document.getElementById("pokemon-dropdown-two");
pokemon_selector_two.addEventListener("change", function() {
    let pokemon_name = this.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            let pokemon_sprite = document.getElementById('player_two');
            let pokemon_title = document.getElementById('p2-pokemon');
            pokemon_sprite.setAttribute('src', data.sprites["front_default"]);
            pokemon_sprite.setAttribute('alt', pokemon_name);
            pokemon_title.innerHTML = pokemon_name;
            document.getElementsByClassName("pokemon-sprite-two")[0].appendChild(pokemon_sprite);

            document.getElementById("base-xp-2").innerHTML = `XP: ${data.base_experience}`;
            document.getElementById("poke-hp-2").innerHTML = `HP: ${data.stats[0].base_stat}`;
            document.getElementById("poke-attack-2").innerHTML = `Attack: ${data.stats[1].base_stat}`;
            document.getElementById("poke-def-2").innerHTML = `Defense: ${data.stats[2].base_stat}`;
        })
})