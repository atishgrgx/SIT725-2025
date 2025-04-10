const mongoose = require('mongoose');

// Define the Pokemon schema
const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    type: { type: String, required: true },
    attack: { type: Number, required: true },
    defense: { type: Number, required: true },
    speed: { type: Number, required: true }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
