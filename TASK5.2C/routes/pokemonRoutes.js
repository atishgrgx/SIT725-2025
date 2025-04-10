const express = require('express');
const { getAllPokemon, addPokemon} = require('../controller/pokemonController'); // Import the controller
const Pokemon = require('../model/pokemon'); // Import the model
const router = express.Router();
// Define routes
router.get('/', getAllPokemon); //Get All Pokemon
router.post('/add', addPokemon);    // Add a new Pokémon

module.exports = router;
