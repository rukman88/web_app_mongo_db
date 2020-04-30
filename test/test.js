const {describe}  = require("mocha");
const {expect} = require("chai");
var request = require('request');

describe("Checking Database connection", function() {

    var url = "http://localhost:3000";

    it( "returns status 200", function(done){
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
//     request(url)
//     .on('response', function(response)
//     {
//         console.log(response.statusCode)
//        // expect(response.statusCode).to.equal(200);
//         //done();
//     })

//     .on("error", function(err){
//         console.log("Problem reaching URL: ", err);
//     })
    
//     //.pipe(url)
//     .on("finish", function(response) {
//     console.log("done");
// })
}
);
    
  });