const app = require("../app"); // Import your Express app
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
var assert = require("assert");
chai.use(chaiHttp);
// when use form data then need
const request = chai.request;
// .........................Login Api.........................
// describe("Login API", function () {
//   it("should login successfully", function (done) {
//     const loginPayload = {
//       email: "boat@gmail.com",
//       password: "demo@123",
//       fcm_token:
//         "dV-ivBlIhG78N67rzgYp_v:APA91bHq9qUosXbwuXhVNONHagS5R98wVN6RB3nEko3v1yO5NNzDAUh6GTbq-6cAXqt1t5nikav6_f5tbK48ZDxsn-8ebraxGVnkbWGjPxffxSh3eRInwqqftjv7_GoFSvH3BLdoJg-P",
//       device_id: "888827",
//       device_type: "New",
//       portal: "admin",
//     };

//     chai
//       .request(app)
//       .post("/api/v1/employee/login")
//       .send(loginPayload)
//       .end((err, response) => {
//         expect(response.statusCode).to.be.equal(200);
//         expect(response.body).to.have.property("statusCode", 200);
//         expect(response.body).to.have.property("message", "Login successfully");
//         expect(response.body).to.have.property("token");
//         expect(response.body).to.have.property("userType", "ADMIN");
//         expect(response.body).to.have.property("empId", "Boat94564564567");
//         expect(response.body).to.have.property("roleType").to.be.an("array");
//         expect(response.body).to.have.property("companyCode", "94564564567");

//         // Print values from the response
//         // console.log("Response Data:", response.body);

//         done();
//       });
//   });
// });
// .......................... Get All Employee api.....................
// describe("Get Employee API", function () {
//   it("should get employee details successfully", function (done) {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjozMDMzLCJmaXJzdF9uYW1lIjpudWxsLCJsYXN0X25hbWUiOiIiLCJmYXRoZXJfbmFtZSI6IiIsIm1vdGhlcl9uYW1lIjoiIiwiZG9iIjoiIiwiYmxvb2RfZ3JvdXAiOiIiLCJtYXRlcmlhbF9zdGF0dXMiOiIiLCJzcG91c2VfbmFtZSI6IiIsImVtcF9pZCI6IkJvYXQ5NDU2NDU2NDU2NyIsInJlbGlnaW9uIjoiIiwicHJvYmF0aW9uIjoiIiwid3JpdHRlbl9sYW5ndWFnZSI6IiIsInNwb2tlbiI6IiIsIm1vdGhlcl90b25ndWUiOiIiLCJqb2luaW5nX2RhdGUiOiIiLCJjb25maXJtYXRpb25fZGF0ZSI6IiIsImVtcF9zdGF0dXMiOiIiLCJwYW5fbnVtYmVyIjoiIiwicGFuX2ZpbGVfbmFtZSI6IiIsImFkaGFyX251bWJlciI6IiIsImFhZGhhYXJfZmlsZV9mcm9udCI6IiIsImFhZGhhYXJfZmlsZV9iYWNrIjoiIiwicGFzc3BvcnQiOiIiLCJwYXNzcG9ydF9maWxlX25hbWUiOiIiLCJkbF92b3Rlcl9pZCI6IiIsImRsX3ZvdGVyX2lkX2ZpbGUiOiIiLCJmbGF0X2hvdXNlX2J1aWxkaW5nIjoiIiwiYXJlYV9zdHJlZXRfdmlsbGFnZSI6IiIsInRvd25fY2l0eSI6IiIsImRpc3RyaWMiOiIiLCJzdGF0ZSI6IiIsInppcGNvZGUiOiIiLCJjb3VudHJ5IjoiIiwiY29udGFjdF9udW1iZXIiOiIiLCJlbWVyZ2VuY3lfY29udGFjdF9udW1iZXIiOiIiLCJoaV9xdWFsaWZpY2F0aW9uIjoiIiwiaGlfY291cnNlIjoiIiwiaGlfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJoaV9wYXNzaW5nX3llYXIiOiIiLCJoaV9wZXJjZW50YWdlIjoiIiwiaGlfcXVhbGlfZG9jX25hbWUiOiIiLCJpbl9xdWFsaWZpY2F0aW9uIjoiIiwiaW5fY291cnNlIjoiIiwiaW5faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJpbl9wYXNzaW5nX3llYXIiOiIiLCJpbl9wZXJjZW50YWdlIjoiIiwiaW5fcXVhbGlfZG9jX25hbWUiOiIiLCJnYV9xdWFsaWZpY2F0aW9uIjoiIiwiZ2FfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJnYV9wYXNzaW5nX3llYXIiOiIiLCJnYV9jb3Vyc2UiOiIiLCJnYV9wZXJjZW50YWdlIjoiIiwiZ2FfcXVhbGlfZG9jX25hbWUiOiIiLCJwb19xdWFsaWZpY2F0aW9uIjoiIiwicG9fY291cnNlIjoiIiwicG9faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJwb19wYXNzaW5nX3llYXIiOiIiLCJwb19wZXJjZW50YWdlIjoiIiwicG9fcXVhbGlfZG9jX25hbWUiOiIiLCJlc2ljX25vIjoiIiwiZXBmX3Vhbl9ubyI6IiIsImVtYWlsIjoiYm9hdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCROeW1hUW5rS2JyV1hSTUVRV0ZkSFNlZ1VHdTNXSjZLMlgwR2tSLkJvNHpFVXhXaWFLL25vVyIsImVtcF9wZXJfZW1haWwiOm51bGwsInByb2ZpbGVfaW1hZ2UiOiIiLCJlbXBfcm9sZSI6IkFETUlOIiwidmlld19hcyI6IkFETUlOIiwiY29tcGFueV9jb2RlIjoiOTQ1NjQ1NjQ1NjciLCJjcmVhdGVkX2F0IjoiMjAyMy0wOS0yMSIsInJlbW92ZV9hdCI6IjIwMjMtMDktMDkiLCJmbGFnIjoxLCJkZXNpZ25hdGlvbiI6IiIsImRlcGFydG1lbnQiOiIiLCJyZXBvcnRpbmdfbWFuYWdlciI6IiIsImdlbmRlciI6IiIsImVtcGxveW1lbnQiOiIiLCJub21pbmVlX25hbWUiOiIiLCJub21pbmVlX2FkZHJlc3MiOiIiLCJub21pbmVlX2NvbnRhY3Rfbm8iOiIiLCJub21pbmVlX3JlbGF0aW9uIjoiIn1dLCJpYXQiOjE2OTU4OTQ0OTcsImV4cCI6MTcwMzY3MDQ5N30.30w69IczuGR-rg26-qnLeDedwxu0HxcvQy9s83s5QPE";
//     const loginPayloads = {
//       page: 1,
//       limit: 30,
//       search: "",
//     };

//     chai
//       .request(app)
//       .post("/api/v1/employee")
//       .set("Authorization", `Bearer ${bearerToken}`)
//       .query(loginPayloads)
//       .end((err, response) => {
//         expect(response.statusCode).to.be.equal(200);
//         console.log("Response Data:", response.body);
//         done();
//       });
//   });
// });
// .......................... Get All Employee ById.....................
// describe("Get Employee by id API", function () {
//   it("should get employee by id details successfully", function (done) {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjozMDMzLCJmaXJzdF9uYW1lIjpudWxsLCJsYXN0X25hbWUiOiIiLCJmYXRoZXJfbmFtZSI6IiIsIm1vdGhlcl9uYW1lIjoiIiwiZG9iIjoiIiwiYmxvb2RfZ3JvdXAiOiIiLCJtYXRlcmlhbF9zdGF0dXMiOiIiLCJzcG91c2VfbmFtZSI6IiIsImVtcF9pZCI6IkJvYXQ5NDU2NDU2NDU2NyIsInJlbGlnaW9uIjoiIiwicHJvYmF0aW9uIjoiIiwid3JpdHRlbl9sYW5ndWFnZSI6IiIsInNwb2tlbiI6IiIsIm1vdGhlcl90b25ndWUiOiIiLCJqb2luaW5nX2RhdGUiOiIiLCJjb25maXJtYXRpb25fZGF0ZSI6IiIsImVtcF9zdGF0dXMiOiIiLCJwYW5fbnVtYmVyIjoiIiwicGFuX2ZpbGVfbmFtZSI6IiIsImFkaGFyX251bWJlciI6IiIsImFhZGhhYXJfZmlsZV9mcm9udCI6IiIsImFhZGhhYXJfZmlsZV9iYWNrIjoiIiwicGFzc3BvcnQiOiIiLCJwYXNzcG9ydF9maWxlX25hbWUiOiIiLCJkbF92b3Rlcl9pZCI6IiIsImRsX3ZvdGVyX2lkX2ZpbGUiOiIiLCJmbGF0X2hvdXNlX2J1aWxkaW5nIjoiIiwiYXJlYV9zdHJlZXRfdmlsbGFnZSI6IiIsInRvd25fY2l0eSI6IiIsImRpc3RyaWMiOiIiLCJzdGF0ZSI6IiIsInppcGNvZGUiOiIiLCJjb3VudHJ5IjoiIiwiY29udGFjdF9udW1iZXIiOiIiLCJlbWVyZ2VuY3lfY29udGFjdF9udW1iZXIiOiIiLCJoaV9xdWFsaWZpY2F0aW9uIjoiIiwiaGlfY291cnNlIjoiIiwiaGlfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJoaV9wYXNzaW5nX3llYXIiOiIiLCJoaV9wZXJjZW50YWdlIjoiIiwiaGlfcXVhbGlfZG9jX25hbWUiOiIiLCJpbl9xdWFsaWZpY2F0aW9uIjoiIiwiaW5fY291cnNlIjoiIiwiaW5faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJpbl9wYXNzaW5nX3llYXIiOiIiLCJpbl9wZXJjZW50YWdlIjoiIiwiaW5fcXVhbGlfZG9jX25hbWUiOiIiLCJnYV9xdWFsaWZpY2F0aW9uIjoiIiwiZ2FfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJnYV9wYXNzaW5nX3llYXIiOiIiLCJnYV9jb3Vyc2UiOiIiLCJnYV9wZXJjZW50YWdlIjoiIiwiZ2FfcXVhbGlfZG9jX25hbWUiOiIiLCJwb19xdWFsaWZpY2F0aW9uIjoiIiwicG9fY291cnNlIjoiIiwicG9faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJwb19wYXNzaW5nX3llYXIiOiIiLCJwb19wZXJjZW50YWdlIjoiIiwicG9fcXVhbGlfZG9jX25hbWUiOiIiLCJlc2ljX25vIjoiIiwiZXBmX3Vhbl9ubyI6IiIsImVtYWlsIjoiYm9hdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCROeW1hUW5rS2JyV1hSTUVRV0ZkSFNlZ1VHdTNXSjZLMlgwR2tSLkJvNHpFVXhXaWFLL25vVyIsImVtcF9wZXJfZW1haWwiOm51bGwsInByb2ZpbGVfaW1hZ2UiOiJ1cGxvYWRzLzE2OTU5Njk1OTAyODVkZWNsaW5lX2xlYXZlLnBuZywiLCJlbXBfcm9sZSI6IkFETUlOIiwidmlld19hcyI6IkFETUlOIiwiY29tcGFueV9jb2RlIjoiOTQ1NjQ1NjQ1NjciLCJjcmVhdGVkX2F0IjoiMjAyMy0wOS0yMSIsInJlbW92ZV9hdCI6IjIwMjMtMDktMDkiLCJmbGFnIjoxLCJkZXNpZ25hdGlvbiI6IjE0IiwiZGVwYXJ0bWVudCI6IiIsInJlcG9ydGluZ19tYW5hZ2VyIjoiIiwiZ2VuZGVyIjoiIiwiZW1wbG95bWVudCI6IiIsIm5vbWluZWVfbmFtZSI6IiIsIm5vbWluZWVfYWRkcmVzcyI6IiIsIm5vbWluZWVfY29udGFjdF9ubyI6IiIsIm5vbWluZWVfcmVsYXRpb24iOiIifV0sImlhdCI6MTY5NjQyMDUzOSwiZXhwIjoxNzA0MTk2NTM5fQ.g8ETqrpGRIE9XGpzI6XNfVeMKX9ozJJp71kbAya_SAo";
//     const getEmployeerequestDatabyId = {
//       emp_id: "Boat94564564567",
//       flag: 1,
//     };

//     chai
//       .request(app)
//       .post("/api/v1/employee/getEmplyoeeById")
//       .set("Authorization", `Bearer ${bearerToken}`)
//       .send(getEmployeerequestDatabyId)
//       .end((err, response) => {
//         if (err) {
//           done(err);
//         } else {
//           // Assertions
//           expect(response).to.have.status(200);
//           expect(response.body).to.have.property("data");
//           // Add more specific assertions based on your response data

//           // Log the response for debugging
//           console.log("Response Data:", response.body);

//           done();
//         }
//       });
//   });
// });
//....................... Get ROLE.....................
// describe("Get Employee Role", function () {
//   it("should get employee Role successfully", function (done) {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjozMDMzLCJmaXJzdF9uYW1lIjpudWxsLCJsYXN0X25hbWUiOiIiLCJmYXRoZXJfbmFtZSI6IiIsIm1vdGhlcl9uYW1lIjoiIiwiZG9iIjoiIiwiYmxvb2RfZ3JvdXAiOiIiLCJtYXRlcmlhbF9zdGF0dXMiOiIiLCJzcG91c2VfbmFtZSI6IiIsImVtcF9pZCI6IkJvYXQ5NDU2NDU2NDU2NyIsInJlbGlnaW9uIjoiIiwicHJvYmF0aW9uIjoiIiwid3JpdHRlbl9sYW5ndWFnZSI6IiIsInNwb2tlbiI6IiIsIm1vdGhlcl90b25ndWUiOiIiLCJqb2luaW5nX2RhdGUiOiIiLCJjb25maXJtYXRpb25fZGF0ZSI6IiIsImVtcF9zdGF0dXMiOiIiLCJwYW5fbnVtYmVyIjoiIiwicGFuX2ZpbGVfbmFtZSI6IiIsImFkaGFyX251bWJlciI6IiIsImFhZGhhYXJfZmlsZV9mcm9udCI6IiIsImFhZGhhYXJfZmlsZV9iYWNrIjoiIiwicGFzc3BvcnQiOiIiLCJwYXNzcG9ydF9maWxlX25hbWUiOiIiLCJkbF92b3Rlcl9pZCI6IiIsImRsX3ZvdGVyX2lkX2ZpbGUiOiIiLCJmbGF0X2hvdXNlX2J1aWxkaW5nIjoiIiwiYXJlYV9zdHJlZXRfdmlsbGFnZSI6IiIsInRvd25fY2l0eSI6IiIsImRpc3RyaWMiOiIiLCJzdGF0ZSI6IiIsInppcGNvZGUiOiIiLCJjb3VudHJ5IjoiIiwiY29udGFjdF9udW1iZXIiOiIiLCJlbWVyZ2VuY3lfY29udGFjdF9udW1iZXIiOiIiLCJoaV9xdWFsaWZpY2F0aW9uIjoiIiwiaGlfY291cnNlIjoiIiwiaGlfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJoaV9wYXNzaW5nX3llYXIiOiIiLCJoaV9wZXJjZW50YWdlIjoiIiwiaGlfcXVhbGlfZG9jX25hbWUiOiIiLCJpbl9xdWFsaWZpY2F0aW9uIjoiIiwiaW5fY291cnNlIjoiIiwiaW5faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJpbl9wYXNzaW5nX3llYXIiOiIiLCJpbl9wZXJjZW50YWdlIjoiIiwiaW5fcXVhbGlfZG9jX25hbWUiOiIiLCJnYV9xdWFsaWZpY2F0aW9uIjoiIiwiZ2FfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJnYV9wYXNzaW5nX3llYXIiOiIiLCJnYV9jb3Vyc2UiOiIiLCJnYV9wZXJjZW50YWdlIjoiIiwiZ2FfcXVhbGlfZG9jX25hbWUiOiIiLCJwb19xdWFsaWZpY2F0aW9uIjoiIiwicG9fY291cnNlIjoiIiwicG9faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJwb19wYXNzaW5nX3llYXIiOiIiLCJwb19wZXJjZW50YWdlIjoiIiwicG9fcXVhbGlfZG9jX25hbWUiOiIiLCJlc2ljX25vIjoiIiwiZXBmX3Vhbl9ubyI6IiIsImVtYWlsIjoiYm9hdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCROeW1hUW5rS2JyV1hSTUVRV0ZkSFNlZ1VHdTNXSjZLMlgwR2tSLkJvNHpFVXhXaWFLL25vVyIsImVtcF9wZXJfZW1haWwiOm51bGwsInByb2ZpbGVfaW1hZ2UiOiJ1cGxvYWRzLzE2OTU5Njk1OTAyODVkZWNsaW5lX2xlYXZlLnBuZywiLCJlbXBfcm9sZSI6IkFETUlOIiwidmlld19hcyI6IkFETUlOIiwiY29tcGFueV9jb2RlIjoiOTQ1NjQ1NjQ1NjciLCJjcmVhdGVkX2F0IjoiMjAyMy0wOS0yMSIsInJlbW92ZV9hdCI6IjIwMjMtMDktMDkiLCJmbGFnIjoxLCJkZXNpZ25hdGlvbiI6IjE0IiwiZGVwYXJ0bWVudCI6IiIsInJlcG9ydGluZ19tYW5hZ2VyIjoiIiwiZ2VuZGVyIjoiIiwiZW1wbG95bWVudCI6IiIsIm5vbWluZWVfbmFtZSI6IiIsIm5vbWluZWVfYWRkcmVzcyI6IiIsIm5vbWluZWVfY29udGFjdF9ubyI6IiIsIm5vbWluZWVfcmVsYXRpb24iOiIifV0sImlhdCI6MTY5NjQyMDUzOSwiZXhwIjoxNzA0MTk2NTM5fQ.g8ETqrpGRIE9XGpzI6XNfVeMKX9ozJJp71kbAya_SAo";
//     const getEmployeereRole = {
//       email: "boat@gmail.com",
//       password: "demo@123",
//     };

//     chai
//       .request(app)
//       .post("/api/v1/employee/employee-role")
//       .set("Authorization", `Bearer ${bearerToken}`)
//       .send(getEmployeereRole)
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

// ....................... add holiday.....................
// describe("Add Holiday", function () {
//   it("Add holiday successfully", function (done) {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjozMDMzLCJmaXJzdF9uYW1lIjpudWxsLCJsYXN0X25hbWUiOiIiLCJmYXRoZXJfbmFtZSI6IiIsIm1vdGhlcl9uYW1lIjoiIiwiZG9iIjoiIiwiYmxvb2RfZ3JvdXAiOiIiLCJtYXRlcmlhbF9zdGF0dXMiOiIiLCJzcG91c2VfbmFtZSI6IiIsImVtcF9pZCI6IkJvYXQ5NDU2NDU2NDU2NyIsInJlbGlnaW9uIjoiIiwicHJvYmF0aW9uIjoiIiwid3JpdHRlbl9sYW5ndWFnZSI6IiIsInNwb2tlbiI6IiIsIm1vdGhlcl90b25ndWUiOiIiLCJqb2luaW5nX2RhdGUiOiIiLCJjb25maXJtYXRpb25fZGF0ZSI6IiIsImVtcF9zdGF0dXMiOiIiLCJwYW5fbnVtYmVyIjoiIiwicGFuX2ZpbGVfbmFtZSI6IiIsImFkaGFyX251bWJlciI6IiIsImFhZGhhYXJfZmlsZV9mcm9udCI6IiIsImFhZGhhYXJfZmlsZV9iYWNrIjoiIiwicGFzc3BvcnQiOiIiLCJwYXNzcG9ydF9maWxlX25hbWUiOiIiLCJkbF92b3Rlcl9pZCI6IiIsImRsX3ZvdGVyX2lkX2ZpbGUiOiIiLCJmbGF0X2hvdXNlX2J1aWxkaW5nIjoiIiwiYXJlYV9zdHJlZXRfdmlsbGFnZSI6IiIsInRvd25fY2l0eSI6IiIsImRpc3RyaWMiOiIiLCJzdGF0ZSI6IiIsInppcGNvZGUiOiIiLCJjb3VudHJ5IjoiIiwiY29udGFjdF9udW1iZXIiOiIiLCJlbWVyZ2VuY3lfY29udGFjdF9udW1iZXIiOiIiLCJoaV9xdWFsaWZpY2F0aW9uIjoiIiwiaGlfY291cnNlIjoiIiwiaGlfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJoaV9wYXNzaW5nX3llYXIiOiIiLCJoaV9wZXJjZW50YWdlIjoiIiwiaGlfcXVhbGlfZG9jX25hbWUiOiIiLCJpbl9xdWFsaWZpY2F0aW9uIjoiIiwiaW5fY291cnNlIjoiIiwiaW5faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJpbl9wYXNzaW5nX3llYXIiOiIiLCJpbl9wZXJjZW50YWdlIjoiIiwiaW5fcXVhbGlfZG9jX25hbWUiOiIiLCJnYV9xdWFsaWZpY2F0aW9uIjoiIiwiZ2FfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJnYV9wYXNzaW5nX3llYXIiOiIiLCJnYV9jb3Vyc2UiOiIiLCJnYV9wZXJjZW50YWdlIjoiIiwiZ2FfcXVhbGlfZG9jX25hbWUiOiIiLCJwb19xdWFsaWZpY2F0aW9uIjoiIiwicG9fY291cnNlIjoiIiwicG9faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJwb19wYXNzaW5nX3llYXIiOiIiLCJwb19wZXJjZW50YWdlIjoiIiwicG9fcXVhbGlfZG9jX25hbWUiOiIiLCJlc2ljX25vIjoiIiwiZXBmX3Vhbl9ubyI6IiIsImVtYWlsIjoiYm9hdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCROeW1hUW5rS2JyV1hSTUVRV0ZkSFNlZ1VHdTNXSjZLMlgwR2tSLkJvNHpFVXhXaWFLL25vVyIsImVtcF9wZXJfZW1haWwiOm51bGwsInByb2ZpbGVfaW1hZ2UiOiJ1cGxvYWRzLzE2OTU5Njk1OTAyODVkZWNsaW5lX2xlYXZlLnBuZywiLCJlbXBfcm9sZSI6IkFETUlOIiwidmlld19hcyI6IkFETUlOIiwiY29tcGFueV9jb2RlIjoiOTQ1NjQ1NjQ1NjciLCJjcmVhdGVkX2F0IjoiMjAyMy0wOS0yMSIsInJlbW92ZV9hdCI6IjIwMjMtMDktMDkiLCJmbGFnIjoxLCJkZXNpZ25hdGlvbiI6IjE0IiwiZGVwYXJ0bWVudCI6IiIsInJlcG9ydGluZ19tYW5hZ2VyIjoiIiwiZ2VuZGVyIjoiIiwiZW1wbG95bWVudCI6IiIsIm5vbWluZWVfbmFtZSI6IiIsIm5vbWluZWVfYWRkcmVzcyI6IiIsIm5vbWluZWVfY29udGFjdF9ubyI6IiIsIm5vbWluZWVfcmVsYXRpb24iOiIifV0sImlhdCI6MTY5NjQyMDUzOSwiZXhwIjoxNzA0MTk2NTM5fQ.g8ETqrpGRIE9XGpzI6XNfVeMKX9ozJJp71kbAya_SAo";
//     const addholiday = {
//       date: "25-01-2025",
//       holiday_name: "testing holiday",
//       description: "holiday",
//       start_date: "28-07-2023",
//       end_date: "29-07-2023",
//     };

//     chai
//       .request(app)
//       .post("/api/v1/holidays/addholiday")
//       .set("Authorization", `Bearer ${bearerToken}`)
//       .send(addholiday)
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
//....................... Get All Holiday.....................
// describe("Get All Holiday", function () {
//   it("should get All Holiday successfully", function (done) {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjozMDMzLCJmaXJzdF9uYW1lIjpudWxsLCJsYXN0X25hbWUiOiIiLCJmYXRoZXJfbmFtZSI6IiIsIm1vdGhlcl9uYW1lIjoiIiwiZG9iIjoiIiwiYmxvb2RfZ3JvdXAiOiIiLCJtYXRlcmlhbF9zdGF0dXMiOiIiLCJzcG91c2VfbmFtZSI6IiIsImVtcF9pZCI6IkJvYXQ5NDU2NDU2NDU2NyIsInJlbGlnaW9uIjoiIiwicHJvYmF0aW9uIjoiIiwid3JpdHRlbl9sYW5ndWFnZSI6IiIsInNwb2tlbiI6IiIsIm1vdGhlcl90b25ndWUiOiIiLCJqb2luaW5nX2RhdGUiOiIiLCJjb25maXJtYXRpb25fZGF0ZSI6IiIsImVtcF9zdGF0dXMiOiIiLCJwYW5fbnVtYmVyIjoiIiwicGFuX2ZpbGVfbmFtZSI6IiIsImFkaGFyX251bWJlciI6IiIsImFhZGhhYXJfZmlsZV9mcm9udCI6IiIsImFhZGhhYXJfZmlsZV9iYWNrIjoiIiwicGFzc3BvcnQiOiIiLCJwYXNzcG9ydF9maWxlX25hbWUiOiIiLCJkbF92b3Rlcl9pZCI6IiIsImRsX3ZvdGVyX2lkX2ZpbGUiOiIiLCJmbGF0X2hvdXNlX2J1aWxkaW5nIjoiIiwiYXJlYV9zdHJlZXRfdmlsbGFnZSI6IiIsInRvd25fY2l0eSI6IiIsImRpc3RyaWMiOiIiLCJzdGF0ZSI6IiIsInppcGNvZGUiOiIiLCJjb3VudHJ5IjoiIiwiY29udGFjdF9udW1iZXIiOiIiLCJlbWVyZ2VuY3lfY29udGFjdF9udW1iZXIiOiIiLCJoaV9xdWFsaWZpY2F0aW9uIjoiIiwiaGlfY291cnNlIjoiIiwiaGlfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJoaV9wYXNzaW5nX3llYXIiOiIiLCJoaV9wZXJjZW50YWdlIjoiIiwiaGlfcXVhbGlfZG9jX25hbWUiOiIiLCJpbl9xdWFsaWZpY2F0aW9uIjoiIiwiaW5fY291cnNlIjoiIiwiaW5faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJpbl9wYXNzaW5nX3llYXIiOiIiLCJpbl9wZXJjZW50YWdlIjoiIiwiaW5fcXVhbGlfZG9jX25hbWUiOiIiLCJnYV9xdWFsaWZpY2F0aW9uIjoiIiwiZ2FfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJnYV9wYXNzaW5nX3llYXIiOiIiLCJnYV9jb3Vyc2UiOiIiLCJnYV9wZXJjZW50YWdlIjoiIiwiZ2FfcXVhbGlfZG9jX25hbWUiOiIiLCJwb19xdWFsaWZpY2F0aW9uIjoiIiwicG9fY291cnNlIjoiIiwicG9faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJwb19wYXNzaW5nX3llYXIiOiIiLCJwb19wZXJjZW50YWdlIjoiIiwicG9fcXVhbGlfZG9jX25hbWUiOiIiLCJlc2ljX25vIjoiIiwiZXBmX3Vhbl9ubyI6IiIsImVtYWlsIjoiYm9hdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCROeW1hUW5rS2JyV1hSTUVRV0ZkSFNlZ1VHdTNXSjZLMlgwR2tSLkJvNHpFVXhXaWFLL25vVyIsImVtcF9wZXJfZW1haWwiOm51bGwsInByb2ZpbGVfaW1hZ2UiOiJ1cGxvYWRzLzE2OTU5Njk1OTAyODVkZWNsaW5lX2xlYXZlLnBuZywiLCJlbXBfcm9sZSI6IkFETUlOIiwidmlld19hcyI6IkFETUlOIiwiY29tcGFueV9jb2RlIjoiOTQ1NjQ1NjQ1NjciLCJjcmVhdGVkX2F0IjoiMjAyMy0wOS0yMSIsInJlbW92ZV9hdCI6IjIwMjMtMDktMDkiLCJmbGFnIjoxLCJkZXNpZ25hdGlvbiI6IjE0IiwiZGVwYXJ0bWVudCI6IiIsInJlcG9ydGluZ19tYW5hZ2VyIjoiIiwiZ2VuZGVyIjoiIiwiZW1wbG95bWVudCI6IiIsIm5vbWluZWVfbmFtZSI6IiIsIm5vbWluZWVfYWRkcmVzcyI6IiIsIm5vbWluZWVfY29udGFjdF9ubyI6IiIsIm5vbWluZWVfcmVsYXRpb24iOiIifV0sImlhdCI6MTY5NjQyMDUzOSwiZXhwIjoxNzA0MTk2NTM5fQ.g8ETqrpGRIE9XGpzI6XNfVeMKX9ozJJp71kbAya_SAo";
//     const getAllHodiay = {
//       page: 1,
//       limit: 10,
//       search: "",
//     };

//     chai
//       .request(app)
//       .post("/api/v1/holidays")
//       .set("Authorization", `Bearer ${bearerToken}`)
//       .send(getAllHodiay)
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
//....................... Update  Holiday.....................
// describe("Update Holiday", function () {
//   it("should get All Holiday successfully", function (done) {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjozMDMzLCJmaXJzdF9uYW1lIjpudWxsLCJsYXN0X25hbWUiOiIiLCJmYXRoZXJfbmFtZSI6IiIsIm1vdGhlcl9uYW1lIjoiIiwiZG9iIjoiIiwiYmxvb2RfZ3JvdXAiOiIiLCJtYXRlcmlhbF9zdGF0dXMiOiIiLCJzcG91c2VfbmFtZSI6IiIsImVtcF9pZCI6IkJvYXQ5NDU2NDU2NDU2NyIsInJlbGlnaW9uIjoiIiwicHJvYmF0aW9uIjoiIiwid3JpdHRlbl9sYW5ndWFnZSI6IiIsInNwb2tlbiI6IiIsIm1vdGhlcl90b25ndWUiOiIiLCJqb2luaW5nX2RhdGUiOiIiLCJjb25maXJtYXRpb25fZGF0ZSI6IiIsImVtcF9zdGF0dXMiOiIiLCJwYW5fbnVtYmVyIjoiIiwicGFuX2ZpbGVfbmFtZSI6IiIsImFkaGFyX251bWJlciI6IiIsImFhZGhhYXJfZmlsZV9mcm9udCI6IiIsImFhZGhhYXJfZmlsZV9iYWNrIjoiIiwicGFzc3BvcnQiOiIiLCJwYXNzcG9ydF9maWxlX25hbWUiOiIiLCJkbF92b3Rlcl9pZCI6IiIsImRsX3ZvdGVyX2lkX2ZpbGUiOiIiLCJmbGF0X2hvdXNlX2J1aWxkaW5nIjoiIiwiYXJlYV9zdHJlZXRfdmlsbGFnZSI6IiIsInRvd25fY2l0eSI6IiIsImRpc3RyaWMiOiIiLCJzdGF0ZSI6IiIsInppcGNvZGUiOiIiLCJjb3VudHJ5IjoiIiwiY29udGFjdF9udW1iZXIiOiIiLCJlbWVyZ2VuY3lfY29udGFjdF9udW1iZXIiOiIiLCJoaV9xdWFsaWZpY2F0aW9uIjoiIiwiaGlfY291cnNlIjoiIiwiaGlfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJoaV9wYXNzaW5nX3llYXIiOiIiLCJoaV9wZXJjZW50YWdlIjoiIiwiaGlfcXVhbGlfZG9jX25hbWUiOiIiLCJpbl9xdWFsaWZpY2F0aW9uIjoiIiwiaW5fY291cnNlIjoiIiwiaW5faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJpbl9wYXNzaW5nX3llYXIiOiIiLCJpbl9wZXJjZW50YWdlIjoiIiwiaW5fcXVhbGlfZG9jX25hbWUiOiIiLCJnYV9xdWFsaWZpY2F0aW9uIjoiIiwiZ2FfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJnYV9wYXNzaW5nX3llYXIiOiIiLCJnYV9jb3Vyc2UiOiIiLCJnYV9wZXJjZW50YWdlIjoiIiwiZ2FfcXVhbGlfZG9jX25hbWUiOiIiLCJwb19xdWFsaWZpY2F0aW9uIjoiIiwicG9fY291cnNlIjoiIiwicG9faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJwb19wYXNzaW5nX3llYXIiOiIiLCJwb19wZXJjZW50YWdlIjoiIiwicG9fcXVhbGlfZG9jX25hbWUiOiIiLCJlc2ljX25vIjoiIiwiZXBmX3Vhbl9ubyI6IiIsImVtYWlsIjoiYm9hdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCROeW1hUW5rS2JyV1hSTUVRV0ZkSFNlZ1VHdTNXSjZLMlgwR2tSLkJvNHpFVXhXaWFLL25vVyIsImVtcF9wZXJfZW1haWwiOm51bGwsInByb2ZpbGVfaW1hZ2UiOiJ1cGxvYWRzLzE2OTU5Njk1OTAyODVkZWNsaW5lX2xlYXZlLnBuZywiLCJlbXBfcm9sZSI6IkFETUlOIiwidmlld19hcyI6IkFETUlOIiwiY29tcGFueV9jb2RlIjoiOTQ1NjQ1NjQ1NjciLCJjcmVhdGVkX2F0IjoiMjAyMy0wOS0yMSIsInJlbW92ZV9hdCI6IjIwMjMtMDktMDkiLCJmbGFnIjoxLCJkZXNpZ25hdGlvbiI6IjE0IiwiZGVwYXJ0bWVudCI6IiIsInJlcG9ydGluZ19tYW5hZ2VyIjoiIiwiZ2VuZGVyIjoiIiwiZW1wbG95bWVudCI6IiIsIm5vbWluZWVfbmFtZSI6IiIsIm5vbWluZWVfYWRkcmVzcyI6IiIsIm5vbWluZWVfY29udGFjdF9ubyI6IiIsIm5vbWluZWVfcmVsYXRpb24iOiIifV0sImlhdCI6MTY5NjQyMDUzOSwiZXhwIjoxNzA0MTk2NTM5fQ.g8ETqrpGRIE9XGpzI6XNfVeMKX9ozJJp71kbAya_SAo";
//     const getAllHodiay = {
//       id: 62,
//       description: "Update description",
//       holiday_name: "Checking1 holidays",
//       start_date: "01-01-2023",
//       end_date: "01-01-2023",
//     };

//     chai
//       .request(app)
//       .post("/api/v1/holidays/upadteHoliday")
//       .set("Authorization", `Bearer ${bearerToken}`)
//       .send(getAllHodiay)
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

// ....................... Create Employee.... Using Form-data .................
// describe("Create Employee", () => {
//   it("Add Employee from form-data successfully", (done) => {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjozMDMzLCJmaXJzdF9uYW1lIjpudWxsLCJsYXN0X25hbWUiOiIiLCJmYXRoZXJfbmFtZSI6IiIsIm1vdGhlcl9uYW1lIjoiIiwiZG9iIjoiIiwiYmxvb2RfZ3JvdXAiOiIiLCJtYXRlcmlhbF9zdGF0dXMiOiIiLCJzcG91c2VfbmFtZSI6IiIsImVtcF9pZCI6IkJvYXQ5NDU2NDU2NDU2NyIsInJlbGlnaW9uIjoiIiwicHJvYmF0aW9uIjoiIiwid3JpdHRlbl9sYW5ndWFnZSI6IiIsInNwb2tlbiI6IiIsIm1vdGhlcl90b25ndWUiOiIiLCJqb2luaW5nX2RhdGUiOiIiLCJjb25maXJtYXRpb25fZGF0ZSI6IiIsImVtcF9zdGF0dXMiOiIiLCJwYW5fbnVtYmVyIjoiIiwicGFuX2ZpbGVfbmFtZSI6IiIsImFkaGFyX251bWJlciI6IiIsImFhZGhhYXJfZmlsZV9mcm9udCI6IiIsImFhZGhhYXJfZmlsZV9iYWNrIjoiIiwicGFzc3BvcnQiOiIiLCJwYXNzcG9ydF9maWxlX25hbWUiOiIiLCJkbF92b3Rlcl9pZCI6IiIsImRsX3ZvdGVyX2lkX2ZpbGUiOiIiLCJmbGF0X2hvdXNlX2J1aWxkaW5nIjoiIiwiYXJlYV9zdHJlZXRfdmlsbGFnZSI6IiIsInRvd25fY2l0eSI6IiIsImRpc3RyaWMiOiIiLCJzdGF0ZSI6IiIsInppcGNvZGUiOiIiLCJjb3VudHJ5IjoiIiwiY29udGFjdF9udW1iZXIiOiIiLCJlbWVyZ2VuY3lfY29udGFjdF9udW1iZXIiOiIiLCJoaV9xdWFsaWZpY2F0aW9uIjoiIiwiaGlfY291cnNlIjoiIiwiaGlfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJoaV9wYXNzaW5nX3llYXIiOiIiLCJoaV9wZXJjZW50YWdlIjoiIiwiaGlfcXVhbGlfZG9jX25hbWUiOiIiLCJpbl9xdWFsaWZpY2F0aW9uIjoiIiwiaW5fY291cnNlIjoiIiwiaW5faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJpbl9wYXNzaW5nX3llYXIiOiIiLCJpbl9wZXJjZW50YWdlIjoiIiwiaW5fcXVhbGlfZG9jX25hbWUiOiIiLCJnYV9xdWFsaWZpY2F0aW9uIjoiIiwiZ2FfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJnYV9wYXNzaW5nX3llYXIiOiIiLCJnYV9jb3Vyc2UiOiIiLCJnYV9wZXJjZW50YWdlIjoiIiwiZ2FfcXVhbGlfZG9jX25hbWUiOiIiLCJwb19xdWFsaWZpY2F0aW9uIjoiIiwicG9fY291cnNlIjoiIiwicG9faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJwb19wYXNzaW5nX3llYXIiOiIiLCJwb19wZXJjZW50YWdlIjoiIiwicG9fcXVhbGlfZG9jX25hbWUiOiIiLCJlc2ljX25vIjoiIiwiZXBmX3Vhbl9ubyI6IiIsImVtYWlsIjoiYm9hdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCROeW1hUW5rS2JyV1hSTUVRV0ZkSFNlZ1VHdTNXSjZLMlgwR2tSLkJvNHpFVXhXaWFLL25vVyIsImVtcF9wZXJfZW1haWwiOm51bGwsInByb2ZpbGVfaW1hZ2UiOiJ1cGxvYWRzLzE2OTU5Njk1OTAyODVkZWNsaW5lX2xlYXZlLnBuZywiLCJlbXBfcm9sZSI6IkFETUlOIiwidmlld19hcyI6IkFETUlOIiwiY29tcGFueV9jb2RlIjoiOTQ1NjQ1NjQ1NjciLCJjcmVhdGVkX2F0IjoiMjAyMy0wOS0yMSIsInJlbW92ZV9hdCI6IjIwMjMtMDktMDkiLCJmbGFnIjoxLCJkZXNpZ25hdGlvbiI6IjE0IiwiZGVwYXJ0bWVudCI6IiIsInJlcG9ydGluZ19tYW5hZ2VyIjoiIiwiZ2VuZGVyIjoiIiwiZW1wbG95bWVudCI6IiIsIm5vbWluZWVfbmFtZSI6IiIsIm5vbWluZWVfYWRkcmVzcyI6IiIsIm5vbWluZWVfY29udGFjdF9ubyI6IiIsIm5vbWluZWVfcmVsYXRpb24iOiIifV0sImlhdCI6MTY5NjQyMDUzOSwiZXhwIjoxNzA0MTk2NTM5fQ.g8ETqrpGRIE9XGpzI6XNfVeMKX9ozJJp71kbAya_SAo";
//     const formData = {
//       first_name: "rbEmployee1",
//       last_name: "rbtesgting1",
//       father_name: "ram",
//       dob: "25-12-1999",
//       hi_institute_university: "university",
//       emp_role: "Employee",
//       email: "rbtesting2@gmail.com",
//       password: "123456",
//       gender: "Male",
//       country: "India",
//     };

//     request(app)
//       .post("/api/v1/employee/create")
//       .set("Authorization", `Bearer ${bearerToken}`)
//       .field("first_name", formData.first_name)
//       .field("last_name", formData.last_name)
//       .field("father_name", formData.father_name)
//       .field("dob", formData.dob)
//       .field("hi_institute_university", formData.hi_institute_university)

//       .field("emp_role", formData.emp_role)
//       .field("email", formData.email)
//       .field("password", formData.password)
//       .field("gender", formData.gender)
//       .field("country", formData.country)
//       // Attach the image file using .attach() if needed.
//       .end((err, res) => {
//         expect(err).to.be.null;
//         expect(res).to.have.status(201);
//         console.log(res.body);
//         done();
//       });
//   });
// });
// ....................... Update Employee.... Using Form-data .................
// describe("Update Employee", () => {
//   it("Update Employee from form-data successfully", (done) => {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjozMDMzLCJmaXJzdF9uYW1lIjpudWxsLCJsYXN0X25hbWUiOiIiLCJmYXRoZXJfbmFtZSI6IiIsIm1vdGhlcl9uYW1lIjoiIiwiZG9iIjoiIiwiYmxvb2RfZ3JvdXAiOiIiLCJtYXRlcmlhbF9zdGF0dXMiOiIiLCJzcG91c2VfbmFtZSI6IiIsImVtcF9pZCI6IkJvYXQ5NDU2NDU2NDU2NyIsInJlbGlnaW9uIjoiIiwicHJvYmF0aW9uIjoiIiwid3JpdHRlbl9sYW5ndWFnZSI6IiIsInNwb2tlbiI6IiIsIm1vdGhlcl90b25ndWUiOiIiLCJqb2luaW5nX2RhdGUiOiIiLCJjb25maXJtYXRpb25fZGF0ZSI6IiIsImVtcF9zdGF0dXMiOiIiLCJwYW5fbnVtYmVyIjoiIiwicGFuX2ZpbGVfbmFtZSI6IiIsImFkaGFyX251bWJlciI6IiIsImFhZGhhYXJfZmlsZV9mcm9udCI6IiIsImFhZGhhYXJfZmlsZV9iYWNrIjoiIiwicGFzc3BvcnQiOiIiLCJwYXNzcG9ydF9maWxlX25hbWUiOiIiLCJkbF92b3Rlcl9pZCI6IiIsImRsX3ZvdGVyX2lkX2ZpbGUiOiIiLCJmbGF0X2hvdXNlX2J1aWxkaW5nIjoiIiwiYXJlYV9zdHJlZXRfdmlsbGFnZSI6IiIsInRvd25fY2l0eSI6IiIsImRpc3RyaWMiOiIiLCJzdGF0ZSI6IiIsInppcGNvZGUiOiIiLCJjb3VudHJ5IjoiIiwiY29udGFjdF9udW1iZXIiOiIiLCJlbWVyZ2VuY3lfY29udGFjdF9udW1iZXIiOiIiLCJoaV9xdWFsaWZpY2F0aW9uIjoiIiwiaGlfY291cnNlIjoiIiwiaGlfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJoaV9wYXNzaW5nX3llYXIiOiIiLCJoaV9wZXJjZW50YWdlIjoiIiwiaGlfcXVhbGlfZG9jX25hbWUiOiIiLCJpbl9xdWFsaWZpY2F0aW9uIjoiIiwiaW5fY291cnNlIjoiIiwiaW5faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJpbl9wYXNzaW5nX3llYXIiOiIiLCJpbl9wZXJjZW50YWdlIjoiIiwiaW5fcXVhbGlfZG9jX25hbWUiOiIiLCJnYV9xdWFsaWZpY2F0aW9uIjoiIiwiZ2FfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJnYV9wYXNzaW5nX3llYXIiOiIiLCJnYV9jb3Vyc2UiOiIiLCJnYV9wZXJjZW50YWdlIjoiIiwiZ2FfcXVhbGlfZG9jX25hbWUiOiIiLCJwb19xdWFsaWZpY2F0aW9uIjoiIiwicG9fY291cnNlIjoiIiwicG9faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJwb19wYXNzaW5nX3llYXIiOiIiLCJwb19wZXJjZW50YWdlIjoiIiwicG9fcXVhbGlfZG9jX25hbWUiOiIiLCJlc2ljX25vIjoiIiwiZXBmX3Vhbl9ubyI6IiIsImVtYWlsIjoiYm9hdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCROeW1hUW5rS2JyV1hSTUVRV0ZkSFNlZ1VHdTNXSjZLMlgwR2tSLkJvNHpFVXhXaWFLL25vVyIsImVtcF9wZXJfZW1haWwiOm51bGwsInByb2ZpbGVfaW1hZ2UiOiJ1cGxvYWRzLzE2OTU5Njk1OTAyODVkZWNsaW5lX2xlYXZlLnBuZywiLCJlbXBfcm9sZSI6IkFETUlOIiwidmlld19hcyI6IkFETUlOIiwiY29tcGFueV9jb2RlIjoiOTQ1NjQ1NjQ1NjciLCJjcmVhdGVkX2F0IjoiMjAyMy0wOS0yMSIsInJlbW92ZV9hdCI6IjIwMjMtMDktMDkiLCJmbGFnIjoxLCJkZXNpZ25hdGlvbiI6IjE0IiwiZGVwYXJ0bWVudCI6IiIsInJlcG9ydGluZ19tYW5hZ2VyIjoiIiwiZ2VuZGVyIjoiIiwiZW1wbG95bWVudCI6IiIsIm5vbWluZWVfbmFtZSI6IiIsIm5vbWluZWVfYWRkcmVzcyI6IiIsIm5vbWluZWVfY29udGFjdF9ubyI6IiIsIm5vbWluZWVfcmVsYXRpb24iOiIifV0sImlhdCI6MTY5NjQyMDUzOSwiZXhwIjoxNzA0MTk2NTM5fQ.g8ETqrpGRIE9XGpzI6XNfVeMKX9ozJJp71kbAya_SAo";
//     const formData = {
//       emp_id: "Boat94564564567",
//       first_name: "RbEmployee",
//       last_name: "Mauryaji",
//       father_name: "ram",
//       dob: "25-12-1999",
//       gender: "Male",
//       country: "India",
//     };

//     request(app)
//       .patch("/api/v1/employee")
//       .set("Authorization", `Bearer ${bearerToken}`)
//       .field("emp_id", formData.emp_id)
//       .field("first_name", formData.first_name)
//       .field("last_name", formData.last_name)
//       .field("father_name", formData.father_name)
//       .field("dob", formData.dob)
//       .field("gender", formData.gender)
//       .field("country", formData.country)
//       // Attach the image file using .attach() if needed.
//       .end((err, res) => {
//         expect(err).to.be.null;
//         expect(res).to.have.status(200);
//         console.log(res.body);
//         done();
//       });
//   });
// });
