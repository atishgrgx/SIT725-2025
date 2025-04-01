// Array of Pokemon objects containing their details (name, image, type, and stats)
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

// Function to handle form submission
const submitForm = () => {
    let formData = {
        first_name: $('#first_name').val(),
        last_name: $('#last_name').val(),
        password: $('#password').val(),
        email: $('#email').val()
    };
    console.log("Form Data Submitted: ", formData); // Display form data in console
};

// Select the card container from the HTML
const cardContainer = document.getElementById("card-container");
// Loop through each Pokemon and creating a card dynamically
pokemons.forEach(pokemon => {
    const card = document.createElement("div"); // Create a new div for the card
    card.classList.add("card"); // Add the "card" class for styling

    // Add content inside the card (image, name, type, and stats)
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

    // Append the new card to the card container
    cardContainer.appendChild(card);
});

// When the document is fully loaded initialize Materialize components
$(document).ready(function () {
    $('.materialboxed').materialbox(); // Enable image zoom effect
    $('.modal').modal(); // Initialize the modal for the registration form
    // When the "Let's Catch Em" button is clicked, open the modal
    $('#clickMeButton').click(function () {
        $('#modal1').modal('open');
    });
    // Attach form submission event to the "Register" button
    $('#formSubmit').click(()=>{
        submitForm();
    })
});
