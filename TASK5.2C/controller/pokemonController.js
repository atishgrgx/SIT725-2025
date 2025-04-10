const Pokemon = require('../model/pokemon');

// Get all Pokémon
const getAllPokemon = async (req, res) => {
    const pokemon = await Pokemon.find();
    res.json({ statusCode: 200, data: pokemon, message: 'Success' });
};

// Add a new Pokémon
const addPokemon = async (req, res) => {

    const { name, image, type, attack, defense, speed } = req.body;

    if (!name || !image || !type || !attack || !defense || !speed) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newPokemon = new Pokemon({
        name,
        image,
        type,
        attack,
        defense,
        speed
    });
    const savedPokemon = await newPokemon.save();
    res.status(201).json({ message: "Pokémon added successfully!", data: savedPokemon });
};

module.exports = { getAllPokemon, addPokemon };
