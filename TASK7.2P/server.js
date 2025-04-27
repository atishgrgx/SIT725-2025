// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const pokemonRoutes = require('./routes/pokemonRoutes');
const app = express();
const PORT = 3000;
const http = require('http').createServer(app); // Create HTTP server from app
const io = require('socket.io')(http); // Pass http server to socket.io

app.use(express.json()); // Tells the app to parse incoming requests with JSON body
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public' folder
app.use(express.urlencoded({ extended: false }));
// Connecting to MongoDB on localhost at port 27017 and use 'myDatabase' database
mongoose.connect('mongodb://localhost:27017/myDatabase');
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');  // Log a message when the connection is successfully established
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('newPost', (post) => {
        io.emit('newPost', post); // show to all users using the server
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});


// Use Routes
app.use('/api/pokemon', pokemonRoutes);

// Start the server and listen on the specified port
http.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Type Ctrl+C to shut down the web server');
});
