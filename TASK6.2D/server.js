// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const pokemonRoutes = require('./routes/pokemonRoutes');
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

// Use Routes
app.use('/api/pokemon', pokemonRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Type Ctrl+C to shut down the web server');
});
