const pokemons = [
    {
        name: "Charmander",
        image: "images/charmander.png",
        type: "Fire",
        attack: 52,
        defense: 43,
        speed: 65
    },
    {
        name: "Squirtle",
        image: "images/squirtle.png",
        type: "Water",
        attack: 48,
        defense: 65,
        speed: 43
    },
    {
        name: "Pikachu",
        image: "images/pikachu.png",
        type: "Electric",
        attack: 49,
        defense: 49,
        speed: 45
    },
    {
        name: "Bulbasaur",
        image: "images/bulbasaur.png",
        type: "Grass/Poison",
        attack: 49,
        defense: 49,
        speed: 45
    },
    {
        name: "Eevee",
        image: "images/evee.png",
        type: "Normal",
        attack: 55,
        defense: 50,
        speed: 55
    },
    {
        name: "Jigglypuff",
        image: "images/jigglypuff.png",
        type: "Fairy",
        attack: 45,
        defense: 20,
        speed: 20
    }
];

const submitForm = () => {
    let formData = {
        first_name: $('#first_name').val(),
        last_name: $('#last_name').val(),
        password: $('#password').val(),
        email: $('#email').val()
    };
    console.log("Form Data Submitted: ", formData);
};

const cardContainer = document.getElementById("card-container");

pokemons.forEach(pokemon => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${pokemon.image}" alt="${pokemon.name}">
        <h2>${pokemon.name}</h2>
        <span class="type">${pokemon.type}</span>
        <div class="stats">
            <span>Attack <br> ${pokemon.attack}</span>
            <span>Defense <br> ${pokemon.defense}</span>
            <span>Speed <br> ${pokemon.speed}</span>
        </div>
    `;

    cardContainer.appendChild(card);
});

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('.modal').modal(); // Initialize modal

    $('#clickMeButton').click(function () {
        $('#modal1').modal('open'); // Open modal on button click
    });

    $('#formSubmit').click(submitForm);
});

