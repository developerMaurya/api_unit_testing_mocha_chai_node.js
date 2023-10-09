const app = require("../app"); // Import your Express app
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
var assert = require("assert");
chai.use(chaiHttp);
// when use form data then need
const request = chai.request;

// // ....................... get organization.....................
// describe("Get all OrganisationList ", function () {
//   it("get All OrganisationList  successfully", function (done) {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjoxMiwiZW1haWwiOiJzaGFzaGlAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkT093TDhTNDMyd29FYTJIUWZKZFJzZW1UN0pFYkhWYXVWWlNPSGVzeUM5LzE1TUtNU2VaejYiLCJyb2xlIjoiU1VQRVJBRE1JTiJ9XSwiaWF0IjoxNjkwNTI5ODMwLCJleHAiOjE2OTgzMDU4MzB9.5h7vYumTaYcx7BuHXi2WW_CaliLI0YDS8PWaTxSXOZ8";

//     chai
//       .request(app)
//       .post("/api/v1/getAllOrganisationList")
//       .set("Authorization", `Bearer ${bearerToken}`)
//       .end((err, response) => {
//         if (err) {
//           done(err);
//         } else {
//           // Assertions
//           expect(response).to.have.status(200);

//           // Log the response for debugging
//           console.log("Response Data:", response.body);

//           done();
//         }
//       });
//   });
// });

// ....................... Update organization.....................
// describe("Update OrganisationList ", function () {
//   it("Update OrganisationList  successfully", function (done) {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjoxMiwiZW1haWwiOiJzaGFzaGlAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkT093TDhTNDMyd29FYTJIUWZKZFJzZW1UN0pFYkhWYXVWWlNPSGVzeUM5LzE1TUtNU2VaejYiLCJyb2xlIjoiU1VQRVJBRE1JTiJ9XSwiaWF0IjoxNjkwNTI5ODMwLCJleHAiOjE2OTgzMDU4MzB9.5h7vYumTaYcx7BuHXi2WW_CaliLI0YDS8PWaTxSXOZ8";
//     const updateorganisation = {
//       id: 105,
//       subscription: true,
//     };
//     chai
//       .request(app)
//       .post("/api/v1/updateOrgnisationDetails")
//       .set("Authorization", `Bearer ${bearerToken}`)
//       .send(updateorganisation)
//       .end((err, response) => {
//         if (err) {
//           done(err);
//         } else {
//           // Assertions
//           expect(response).to.have.status(200);

//           // Log the response for debugging
//           console.log("Response Data:", response.body);

//           done();
//         }
//       });
//   });
// });
