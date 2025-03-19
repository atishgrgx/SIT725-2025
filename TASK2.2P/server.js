// Import necessary modules
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json()); // Tells the app to parse incoming requests with JSON body
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public' folder

app.get('/square', (req, res) => {
    const firstNumber = parseFloat(req.query.firstNumber);
    res.json({result: firstNumber * firstNumber});
    });
    
//Post Route handler to handle calculation requests
app.post('/calculate', (req, res) => {
     // Getting the values from the request body
    const firstNumber = req.body.firstNumber;
    const secondNumber = req.body.secondNumber;
    const operation = req.body.operation;

    let result;
    // Check if the inputs are valid numbers
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return res.status(400).json("Please insert correct values");
    }

    // Switch statement to perform different operations based on the user selected value
    switch (operation) {
        case 'add': 
            result = firstNumber + secondNumber; 
            break;
        case 'subtract': 
            result = firstNumber - secondNumber; 
            break;
        case 'multiply': 
            result = firstNumber * secondNumber; 
            break;
        case 'divide':
            if (secondNumber === 0) return res.status(400).json("Cannot divide by zero" );
            result = firstNumber / secondNumber;
            break;
        default: return res.status(400).json("Please select a operation to calculate");
    }
    res.json({ result });// Send the result back as a JSON response
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Type Ctrl+C to shut down the web server');
});
