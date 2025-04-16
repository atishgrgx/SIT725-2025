const expect = require("chai").expect;
const request = require("request");

describe("Pokémon API Tests", function () {
    const baseUrl = "http://localhost:3000";

    it("API should respond with 200", function (done) {
        request(`${baseUrl}/api/pokemon`, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it("Should contain a Pokemon with name Charmander", function (done) {
        request(`${baseUrl}/api/pokemon`, function (error, response, body) {
            const data = JSON.parse(body);
            const names = data.data.map(p => p.name);
            expect(names).to.include("Charmander");
            done();
        });
    });

    it("Should fail to add a new Pokémon with an empty name", function (done) {
        const newPokemon = {
            name: "", // Empty Pokémon name
            image: "images/meowth.png",
            type: "Normal",
            attack: 45,
            defense: 35,
            speed: 90
        };
    
        request.post({
            url: `${baseUrl}/api/pokemon/add`,
            json: newPokemon
        }, function (error, response, body) {
            // Expecting a 400 Bad Request or similar error due to invalid data
            expect(response.statusCode).to.equal(400); 
            expect(body.error).to.equal("Name is required");
            done();
        });
    });
    

    it("Should not allow duplicate Pokémon names", function (done) {
        const duplicateCharmander = {
            name: "Charmander", // Already exists in DB
            image: "images/charmander.png",
            type: "Fire",
            attack: 52,
            defense: 43,
            speed: 65
        };

        // Try to add a second Charmander
        request.post({
            url: `${baseUrl}/api/pokemon/add`,
            json: duplicateCharmander
        }, function (err, res) {
            expect(res.statusCode).to.equal(409); 
            done();
        });
    });

});


