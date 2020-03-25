const {describe}  = require("mocha");
const {expect} = require("chai");
var request = require('request');

describe("Checking Database connection", function() {

    var url = "http://localhost:3000";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
     });

  });