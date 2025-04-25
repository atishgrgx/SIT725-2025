const Pokemon = require('../model/pokemon');

// Get all Pokémon
const getAllPokemon = async (req, res) => {
    const pokemon = await Pokemon.find();
    res.json({ statusCode: 200, data: pokemon, message: 'Success' });
};

// Add a new Pokémon
const addPokemon = async (req, res) => {
    const { name, image, type, attack, defense, speed } = req.body;

    // Check for missing name
    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }

    // Check for other missing fields
    if (!image || !type || !attack || !defense || !speed) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Check for duplicate name
    const existingPokemon = await Pokemon.findOne({ name });
    if (existingPokemon) {
        return res.status(409).json({ error: "Pokémon already exists" });
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
