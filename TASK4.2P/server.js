// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json()); // Tells the app to parse incoming requests with JSON body
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public' folder
app.use(express.urlencoded({ extended: false }));
// Connecting to MongoDB on localhost at port 27017 and use 'myDatabase' database
mongoose.connect('mongodb://localhost:27017/myDatabase');
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');  // Log a message when the connection is successfully established
});

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
// Example of a new Pokemon to add
const pokemon = new Pokemon({
    name: 'Charmander',
    image: 'images/charmander.png',
    type: 'Fire',
    attack: 52,
    defense: 43,
    speed: 65
});

pokemon.save().then(() => console.log("Pokemon Captured"));

app.get('/api/pokemon', async (req, res) => {
    const pokemon = await Pokemon.find({});
    res.json({ statusCode: 200, data: pokemon, message: 'Success' });
});


// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Type Ctrl+C to shut down the web server');
});
