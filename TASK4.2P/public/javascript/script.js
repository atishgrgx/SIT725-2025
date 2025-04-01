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

const addCards = (pokemons) => {
    pokemons.forEach(pokemon => {
        let itemToAppend = `
        <div class="card">
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
            <span class="type">${pokemon.type}</span>
            <div class="stats">
                <span>Attack <br> ${pokemon.attack}</span>
                <span>Defense <br> ${pokemon.defense}</span>
                <span>Speed <br> ${pokemon.speed}</span>
            </div>
        </div>
        `;
        $("#card-container").append(itemToAppend);
    });
};

const getProjects = () => {
    $.get('/api/pokemon', (response) => {
        if (response.statusCode == 200) {
            addCards(response.data);
        }
    });
};

// When the document is fully loaded initialize Materialize components
$(document).ready(function () {
    $('.materialboxed').materialbox(); // Enable image zoom effect
    $('.modal').modal(); // Initialize the modal for the registration form
    // When the "Let's Catch Em" button is clicked, open the modal
    $('#clickMeButton').click(function () {
        $('#modal1').modal('open');
    });
    getProjects();
    // Attach form submission event to the "Register" button
    $('#formSubmit').click(() => {
        submitForm();
    })
});
