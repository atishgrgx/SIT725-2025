const mongoose = require('mongoose');
const Pokemon = require('../model/pokemon');

// Connect directly to MongoDB here
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', async () => {
    console.log('Connected to MongoDB for seeding');

    const pokemonData = [
        { name: 'Charmander', image: 'images/charmander.png', type: 'Fire', attack: 52, defense: 43, speed: 65 },
        { name: 'Squirtle', image: 'images/squirtle.png', type: 'Water', attack: 48, defense: 65, speed: 43 },
        { name: 'Bulbasaur', image: 'images/bulbasaur.png', type: 'Grass', attack: 49, defense: 49, speed: 45 }
    ];

    await Pokemon.deleteMany(); // clear existing entries
    await Pokemon.insertMany(pokemonData);
    console.log('Database Seeded!');
    mongoose.connection.close();
});
