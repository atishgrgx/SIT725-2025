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

    it("Should NOT contain a Pokemon named DarthVader", function (done) {
        request(`${baseUrl}/api/pokemon`, function (error, response, body) {
            const data = JSON.parse(body);
            const names = data.data.map(p => p.name);
            expect(names).to.include("DarthVader"); // Intentionally wrong
            done();
        });
    });
});


