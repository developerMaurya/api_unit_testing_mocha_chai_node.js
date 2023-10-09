const app = require("../app"); // Import your Express app
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
var assert = require("assert");
chai.use(chaiHttp);
// when use form data then need
const request = chai.request;

// //....................... Add Department .....................
// describe("Add Department", function () {
//   it("Add Department successfully", function (done) {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjozMDMzLCJmaXJzdF9uYW1lIjpudWxsLCJsYXN0X25hbWUiOiIiLCJmYXRoZXJfbmFtZSI6IiIsIm1vdGhlcl9uYW1lIjoiIiwiZG9iIjoiIiwiYmxvb2RfZ3JvdXAiOiIiLCJtYXRlcmlhbF9zdGF0dXMiOiIiLCJzcG91c2VfbmFtZSI6IiIsImVtcF9pZCI6IkJvYXQ5NDU2NDU2NDU2NyIsInJlbGlnaW9uIjoiIiwicHJvYmF0aW9uIjoiIiwid3JpdHRlbl9sYW5ndWFnZSI6IiIsInNwb2tlbiI6IiIsIm1vdGhlcl90b25ndWUiOiIiLCJqb2luaW5nX2RhdGUiOiIiLCJjb25maXJtYXRpb25fZGF0ZSI6IiIsImVtcF9zdGF0dXMiOiIiLCJwYW5fbnVtYmVyIjoiIiwicGFuX2ZpbGVfbmFtZSI6IiIsImFkaGFyX251bWJlciI6IiIsImFhZGhhYXJfZmlsZV9mcm9udCI6IiIsImFhZGhhYXJfZmlsZV9iYWNrIjoiIiwicGFzc3BvcnQiOiIiLCJwYXNzcG9ydF9maWxlX25hbWUiOiIiLCJkbF92b3Rlcl9pZCI6IiIsImRsX3ZvdGVyX2lkX2ZpbGUiOiIiLCJmbGF0X2hvdXNlX2J1aWxkaW5nIjoiIiwiYXJlYV9zdHJlZXRfdmlsbGFnZSI6IiIsInRvd25fY2l0eSI6IiIsImRpc3RyaWMiOiIiLCJzdGF0ZSI6IiIsInppcGNvZGUiOiIiLCJjb3VudHJ5IjoiIiwiY29udGFjdF9udW1iZXIiOiIiLCJlbWVyZ2VuY3lfY29udGFjdF9udW1iZXIiOiIiLCJoaV9xdWFsaWZpY2F0aW9uIjoiIiwiaGlfY291cnNlIjoiIiwiaGlfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJoaV9wYXNzaW5nX3llYXIiOiIiLCJoaV9wZXJjZW50YWdlIjoiIiwiaGlfcXVhbGlfZG9jX25hbWUiOiIiLCJpbl9xdWFsaWZpY2F0aW9uIjoiIiwiaW5fY291cnNlIjoiIiwiaW5faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJpbl9wYXNzaW5nX3llYXIiOiIiLCJpbl9wZXJjZW50YWdlIjoiIiwiaW5fcXVhbGlfZG9jX25hbWUiOiIiLCJnYV9xdWFsaWZpY2F0aW9uIjoiIiwiZ2FfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJnYV9wYXNzaW5nX3llYXIiOiIiLCJnYV9jb3Vyc2UiOiIiLCJnYV9wZXJjZW50YWdlIjoiIiwiZ2FfcXVhbGlfZG9jX25hbWUiOiIiLCJwb19xdWFsaWZpY2F0aW9uIjoiIiwicG9fY291cnNlIjoiIiwicG9faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJwb19wYXNzaW5nX3llYXIiOiIiLCJwb19wZXJjZW50YWdlIjoiIiwicG9fcXVhbGlfZG9jX25hbWUiOiIiLCJlc2ljX25vIjoiIiwiZXBmX3Vhbl9ubyI6IiIsImVtYWlsIjoiYm9hdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCROeW1hUW5rS2JyV1hSTUVRV0ZkSFNlZ1VHdTNXSjZLMlgwR2tSLkJvNHpFVXhXaWFLL25vVyIsImVtcF9wZXJfZW1haWwiOm51bGwsInByb2ZpbGVfaW1hZ2UiOiJ1cGxvYWRzLzE2OTU5Njk1OTAyODVkZWNsaW5lX2xlYXZlLnBuZywiLCJlbXBfcm9sZSI6IkFETUlOIiwidmlld19hcyI6IkFETUlOIiwiY29tcGFueV9jb2RlIjoiOTQ1NjQ1NjQ1NjciLCJjcmVhdGVkX2F0IjoiMjAyMy0wOS0yMSIsInJlbW92ZV9hdCI6IjIwMjMtMDktMDkiLCJmbGFnIjoxLCJkZXNpZ25hdGlvbiI6IjE0IiwiZGVwYXJ0bWVudCI6IiIsInJlcG9ydGluZ19tYW5hZ2VyIjoiIiwiZ2VuZGVyIjoiIiwiZW1wbG95bWVudCI6IiIsIm5vbWluZWVfbmFtZSI6IiIsIm5vbWluZWVfYWRkcmVzcyI6IiIsIm5vbWluZWVfY29udGFjdF9ubyI6IiIsIm5vbWluZWVfcmVsYXRpb24iOiIifV0sImlhdCI6MTY5NjQyMDUzOSwiZXhwIjoxNzA0MTk2NTM5fQ.g8ETqrpGRIE9XGpzI6XNfVeMKX9ozJJp71kbAya_SAo";
//     const AddDepartment = [
//       {
//         name: "api Department",
//         code: "api001",
//         description: "api  department",
//       },
//     ];
//     chai
//       .request(app)
//       .post("/api/v1/department")
//       .set("Authorization", `Bearer ${bearerToken}`)
//       .send(AddDepartment)
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
// //....................... get all Department .....................
// describe("Get all Department", function () {
//   it("Get All Department successfully", function (done) {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjozMDMzLCJmaXJzdF9uYW1lIjpudWxsLCJsYXN0X25hbWUiOiIiLCJmYXRoZXJfbmFtZSI6IiIsIm1vdGhlcl9uYW1lIjoiIiwiZG9iIjoiIiwiYmxvb2RfZ3JvdXAiOiIiLCJtYXRlcmlhbF9zdGF0dXMiOiIiLCJzcG91c2VfbmFtZSI6IiIsImVtcF9pZCI6IkJvYXQ5NDU2NDU2NDU2NyIsInJlbGlnaW9uIjoiIiwicHJvYmF0aW9uIjoiIiwid3JpdHRlbl9sYW5ndWFnZSI6IiIsInNwb2tlbiI6IiIsIm1vdGhlcl90b25ndWUiOiIiLCJqb2luaW5nX2RhdGUiOiIiLCJjb25maXJtYXRpb25fZGF0ZSI6IiIsImVtcF9zdGF0dXMiOiIiLCJwYW5fbnVtYmVyIjoiIiwicGFuX2ZpbGVfbmFtZSI6IiIsImFkaGFyX251bWJlciI6IiIsImFhZGhhYXJfZmlsZV9mcm9udCI6IiIsImFhZGhhYXJfZmlsZV9iYWNrIjoiIiwicGFzc3BvcnQiOiIiLCJwYXNzcG9ydF9maWxlX25hbWUiOiIiLCJkbF92b3Rlcl9pZCI6IiIsImRsX3ZvdGVyX2lkX2ZpbGUiOiIiLCJmbGF0X2hvdXNlX2J1aWxkaW5nIjoiIiwiYXJlYV9zdHJlZXRfdmlsbGFnZSI6IiIsInRvd25fY2l0eSI6IiIsImRpc3RyaWMiOiIiLCJzdGF0ZSI6IiIsInppcGNvZGUiOiIiLCJjb3VudHJ5IjoiIiwiY29udGFjdF9udW1iZXIiOiIiLCJlbWVyZ2VuY3lfY29udGFjdF9udW1iZXIiOiIiLCJoaV9xdWFsaWZpY2F0aW9uIjoiIiwiaGlfY291cnNlIjoiIiwiaGlfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJoaV9wYXNzaW5nX3llYXIiOiIiLCJoaV9wZXJjZW50YWdlIjoiIiwiaGlfcXVhbGlfZG9jX25hbWUiOiIiLCJpbl9xdWFsaWZpY2F0aW9uIjoiIiwiaW5fY291cnNlIjoiIiwiaW5faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJpbl9wYXNzaW5nX3llYXIiOiIiLCJpbl9wZXJjZW50YWdlIjoiIiwiaW5fcXVhbGlfZG9jX25hbWUiOiIiLCJnYV9xdWFsaWZpY2F0aW9uIjoiIiwiZ2FfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJnYV9wYXNzaW5nX3llYXIiOiIiLCJnYV9jb3Vyc2UiOiIiLCJnYV9wZXJjZW50YWdlIjoiIiwiZ2FfcXVhbGlfZG9jX25hbWUiOiIiLCJwb19xdWFsaWZpY2F0aW9uIjoiIiwicG9fY291cnNlIjoiIiwicG9faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJwb19wYXNzaW5nX3llYXIiOiIiLCJwb19wZXJjZW50YWdlIjoiIiwicG9fcXVhbGlfZG9jX25hbWUiOiIiLCJlc2ljX25vIjoiIiwiZXBmX3Vhbl9ubyI6IiIsImVtYWlsIjoiYm9hdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCROeW1hUW5rS2JyV1hSTUVRV0ZkSFNlZ1VHdTNXSjZLMlgwR2tSLkJvNHpFVXhXaWFLL25vVyIsImVtcF9wZXJfZW1haWwiOm51bGwsInByb2ZpbGVfaW1hZ2UiOiJ1cGxvYWRzLzE2OTU5Njk1OTAyODVkZWNsaW5lX2xlYXZlLnBuZywiLCJlbXBfcm9sZSI6IkFETUlOIiwidmlld19hcyI6IkFETUlOIiwiY29tcGFueV9jb2RlIjoiOTQ1NjQ1NjQ1NjciLCJjcmVhdGVkX2F0IjoiMjAyMy0wOS0yMSIsInJlbW92ZV9hdCI6IjIwMjMtMDktMDkiLCJmbGFnIjoxLCJkZXNpZ25hdGlvbiI6IjE0IiwiZGVwYXJ0bWVudCI6IiIsInJlcG9ydGluZ19tYW5hZ2VyIjoiIiwiZ2VuZGVyIjoiIiwiZW1wbG95bWVudCI6IiIsIm5vbWluZWVfbmFtZSI6IiIsIm5vbWluZWVfYWRkcmVzcyI6IiIsIm5vbWluZWVfY29udGFjdF9ubyI6IiIsIm5vbWluZWVfcmVsYXRpb24iOiIifV0sImlhdCI6MTY5NjQyMDUzOSwiZXhwIjoxNzA0MTk2NTM5fQ.g8ETqrpGRIE9XGpzI6XNfVeMKX9ozJJp71kbAya_SAo";
//     const GetAllDepartment = {
//       search: "",
//     };
//     chai
//       .request(app)
//       .post("/api/v1/departments")
//       .set("Authorization", `Bearer ${bearerToken}`)
//       .send(GetAllDepartment)
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

// //....................... get single Department .....................
// describe("Get sigle Department", function () {
//   it("Get Department successfully", function (done) {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjozMDMzLCJmaXJzdF9uYW1lIjpudWxsLCJsYXN0X25hbWUiOiIiLCJmYXRoZXJfbmFtZSI6IiIsIm1vdGhlcl9uYW1lIjoiIiwiZG9iIjoiIiwiYmxvb2RfZ3JvdXAiOiIiLCJtYXRlcmlhbF9zdGF0dXMiOiIiLCJzcG91c2VfbmFtZSI6IiIsImVtcF9pZCI6IkJvYXQ5NDU2NDU2NDU2NyIsInJlbGlnaW9uIjoiIiwicHJvYmF0aW9uIjoiIiwid3JpdHRlbl9sYW5ndWFnZSI6IiIsInNwb2tlbiI6IiIsIm1vdGhlcl90b25ndWUiOiIiLCJqb2luaW5nX2RhdGUiOiIiLCJjb25maXJtYXRpb25fZGF0ZSI6IiIsImVtcF9zdGF0dXMiOiIiLCJwYW5fbnVtYmVyIjoiIiwicGFuX2ZpbGVfbmFtZSI6IiIsImFkaGFyX251bWJlciI6IiIsImFhZGhhYXJfZmlsZV9mcm9udCI6IiIsImFhZGhhYXJfZmlsZV9iYWNrIjoiIiwicGFzc3BvcnQiOiIiLCJwYXNzcG9ydF9maWxlX25hbWUiOiIiLCJkbF92b3Rlcl9pZCI6IiIsImRsX3ZvdGVyX2lkX2ZpbGUiOiIiLCJmbGF0X2hvdXNlX2J1aWxkaW5nIjoiIiwiYXJlYV9zdHJlZXRfdmlsbGFnZSI6IiIsInRvd25fY2l0eSI6IiIsImRpc3RyaWMiOiIiLCJzdGF0ZSI6IiIsInppcGNvZGUiOiIiLCJjb3VudHJ5IjoiIiwiY29udGFjdF9udW1iZXIiOiIiLCJlbWVyZ2VuY3lfY29udGFjdF9udW1iZXIiOiIiLCJoaV9xdWFsaWZpY2F0aW9uIjoiIiwiaGlfY291cnNlIjoiIiwiaGlfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJoaV9wYXNzaW5nX3llYXIiOiIiLCJoaV9wZXJjZW50YWdlIjoiIiwiaGlfcXVhbGlfZG9jX25hbWUiOiIiLCJpbl9xdWFsaWZpY2F0aW9uIjoiIiwiaW5fY291cnNlIjoiIiwiaW5faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJpbl9wYXNzaW5nX3llYXIiOiIiLCJpbl9wZXJjZW50YWdlIjoiIiwiaW5fcXVhbGlfZG9jX25hbWUiOiIiLCJnYV9xdWFsaWZpY2F0aW9uIjoiIiwiZ2FfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJnYV9wYXNzaW5nX3llYXIiOiIiLCJnYV9jb3Vyc2UiOiIiLCJnYV9wZXJjZW50YWdlIjoiIiwiZ2FfcXVhbGlfZG9jX25hbWUiOiIiLCJwb19xdWFsaWZpY2F0aW9uIjoiIiwicG9fY291cnNlIjoiIiwicG9faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJwb19wYXNzaW5nX3llYXIiOiIiLCJwb19wZXJjZW50YWdlIjoiIiwicG9fcXVhbGlfZG9jX25hbWUiOiIiLCJlc2ljX25vIjoiIiwiZXBmX3Vhbl9ubyI6IiIsImVtYWlsIjoiYm9hdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCROeW1hUW5rS2JyV1hSTUVRV0ZkSFNlZ1VHdTNXSjZLMlgwR2tSLkJvNHpFVXhXaWFLL25vVyIsImVtcF9wZXJfZW1haWwiOm51bGwsInByb2ZpbGVfaW1hZ2UiOiJ1cGxvYWRzLzE2OTU5Njk1OTAyODVkZWNsaW5lX2xlYXZlLnBuZywiLCJlbXBfcm9sZSI6IkFETUlOIiwidmlld19hcyI6IkFETUlOIiwiY29tcGFueV9jb2RlIjoiOTQ1NjQ1NjQ1NjciLCJjcmVhdGVkX2F0IjoiMjAyMy0wOS0yMSIsInJlbW92ZV9hdCI6IjIwMjMtMDktMDkiLCJmbGFnIjoxLCJkZXNpZ25hdGlvbiI6IjE0IiwiZGVwYXJ0bWVudCI6IiIsInJlcG9ydGluZ19tYW5hZ2VyIjoiIiwiZ2VuZGVyIjoiIiwiZW1wbG95bWVudCI6IiIsIm5vbWluZWVfbmFtZSI6IiIsIm5vbWluZWVfYWRkcmVzcyI6IiIsIm5vbWluZWVfY29udGFjdF9ubyI6IiIsIm5vbWluZWVfcmVsYXRpb24iOiIifV0sImlhdCI6MTY5NjQyMDUzOSwiZXhwIjoxNzA0MTk2NTM5fQ.g8ETqrpGRIE9XGpzI6XNfVeMKX9ozJJp71kbAya_SAo";
//     chai
//       .request(app)
//       .get("/api/v1/department/66")
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

// //....................... Update Department .....................
// describe("Update Department", function () {
//   it("Update Department successfully", function (done) {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjozMDMzLCJmaXJzdF9uYW1lIjpudWxsLCJsYXN0X25hbWUiOiIiLCJmYXRoZXJfbmFtZSI6IiIsIm1vdGhlcl9uYW1lIjoiIiwiZG9iIjoiIiwiYmxvb2RfZ3JvdXAiOiIiLCJtYXRlcmlhbF9zdGF0dXMiOiIiLCJzcG91c2VfbmFtZSI6IiIsImVtcF9pZCI6IkJvYXQ5NDU2NDU2NDU2NyIsInJlbGlnaW9uIjoiIiwicHJvYmF0aW9uIjoiIiwid3JpdHRlbl9sYW5ndWFnZSI6IiIsInNwb2tlbiI6IiIsIm1vdGhlcl90b25ndWUiOiIiLCJqb2luaW5nX2RhdGUiOiIiLCJjb25maXJtYXRpb25fZGF0ZSI6IiIsImVtcF9zdGF0dXMiOiIiLCJwYW5fbnVtYmVyIjoiIiwicGFuX2ZpbGVfbmFtZSI6IiIsImFkaGFyX251bWJlciI6IiIsImFhZGhhYXJfZmlsZV9mcm9udCI6IiIsImFhZGhhYXJfZmlsZV9iYWNrIjoiIiwicGFzc3BvcnQiOiIiLCJwYXNzcG9ydF9maWxlX25hbWUiOiIiLCJkbF92b3Rlcl9pZCI6IiIsImRsX3ZvdGVyX2lkX2ZpbGUiOiIiLCJmbGF0X2hvdXNlX2J1aWxkaW5nIjoiIiwiYXJlYV9zdHJlZXRfdmlsbGFnZSI6IiIsInRvd25fY2l0eSI6IiIsImRpc3RyaWMiOiIiLCJzdGF0ZSI6IiIsInppcGNvZGUiOiIiLCJjb3VudHJ5IjoiIiwiY29udGFjdF9udW1iZXIiOiIiLCJlbWVyZ2VuY3lfY29udGFjdF9udW1iZXIiOiIiLCJoaV9xdWFsaWZpY2F0aW9uIjoiIiwiaGlfY291cnNlIjoiIiwiaGlfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJoaV9wYXNzaW5nX3llYXIiOiIiLCJoaV9wZXJjZW50YWdlIjoiIiwiaGlfcXVhbGlfZG9jX25hbWUiOiIiLCJpbl9xdWFsaWZpY2F0aW9uIjoiIiwiaW5fY291cnNlIjoiIiwiaW5faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJpbl9wYXNzaW5nX3llYXIiOiIiLCJpbl9wZXJjZW50YWdlIjoiIiwiaW5fcXVhbGlfZG9jX25hbWUiOiIiLCJnYV9xdWFsaWZpY2F0aW9uIjoiIiwiZ2FfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJnYV9wYXNzaW5nX3llYXIiOiIiLCJnYV9jb3Vyc2UiOiIiLCJnYV9wZXJjZW50YWdlIjoiIiwiZ2FfcXVhbGlfZG9jX25hbWUiOiIiLCJwb19xdWFsaWZpY2F0aW9uIjoiIiwicG9fY291cnNlIjoiIiwicG9faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJwb19wYXNzaW5nX3llYXIiOiIiLCJwb19wZXJjZW50YWdlIjoiIiwicG9fcXVhbGlfZG9jX25hbWUiOiIiLCJlc2ljX25vIjoiIiwiZXBmX3Vhbl9ubyI6IiIsImVtYWlsIjoiYm9hdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCROeW1hUW5rS2JyV1hSTUVRV0ZkSFNlZ1VHdTNXSjZLMlgwR2tSLkJvNHpFVXhXaWFLL25vVyIsImVtcF9wZXJfZW1haWwiOm51bGwsInByb2ZpbGVfaW1hZ2UiOiJ1cGxvYWRzLzE2OTU5Njk1OTAyODVkZWNsaW5lX2xlYXZlLnBuZywiLCJlbXBfcm9sZSI6IkFETUlOIiwidmlld19hcyI6IkFETUlOIiwiY29tcGFueV9jb2RlIjoiOTQ1NjQ1NjQ1NjciLCJjcmVhdGVkX2F0IjoiMjAyMy0wOS0yMSIsInJlbW92ZV9hdCI6IjIwMjMtMDktMDkiLCJmbGFnIjoxLCJkZXNpZ25hdGlvbiI6IjE0IiwiZGVwYXJ0bWVudCI6IiIsInJlcG9ydGluZ19tYW5hZ2VyIjoiIiwiZ2VuZGVyIjoiIiwiZW1wbG95bWVudCI6IiIsIm5vbWluZWVfbmFtZSI6IiIsIm5vbWluZWVfYWRkcmVzcyI6IiIsIm5vbWluZWVfY29udGFjdF9ubyI6IiIsIm5vbWluZWVfcmVsYXRpb24iOiIifV0sImlhdCI6MTY5NjQyMDUzOSwiZXhwIjoxNzA0MTk2NTM5fQ.g8ETqrpGRIE9XGpzI6XNfVeMKX9ozJJp71kbAya_SAo";
//     const UpdateDepartment = {
//       id: 66,
//       name: "softwares",
//       code: "Der003",
//       description: "description",
//     };
//     chai
//       .request(app)
//       .patch("/api/v1/department")
//       .set("Authorization", `Bearer ${bearerToken}`)
//       .send(UpdateDepartment)
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

//....................... Delete Department .....................
// describe("Update Department", function () {
//   it("Update Department successfully", function (done) {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjozMDMzLCJmaXJzdF9uYW1lIjpudWxsLCJsYXN0X25hbWUiOiIiLCJmYXRoZXJfbmFtZSI6IiIsIm1vdGhlcl9uYW1lIjoiIiwiZG9iIjoiIiwiYmxvb2RfZ3JvdXAiOiIiLCJtYXRlcmlhbF9zdGF0dXMiOiIiLCJzcG91c2VfbmFtZSI6IiIsImVtcF9pZCI6IkJvYXQ5NDU2NDU2NDU2NyIsInJlbGlnaW9uIjoiIiwicHJvYmF0aW9uIjoiIiwid3JpdHRlbl9sYW5ndWFnZSI6IiIsInNwb2tlbiI6IiIsIm1vdGhlcl90b25ndWUiOiIiLCJqb2luaW5nX2RhdGUiOiIiLCJjb25maXJtYXRpb25fZGF0ZSI6IiIsImVtcF9zdGF0dXMiOiIiLCJwYW5fbnVtYmVyIjoiIiwicGFuX2ZpbGVfbmFtZSI6IiIsImFkaGFyX251bWJlciI6IiIsImFhZGhhYXJfZmlsZV9mcm9udCI6IiIsImFhZGhhYXJfZmlsZV9iYWNrIjoiIiwicGFzc3BvcnQiOiIiLCJwYXNzcG9ydF9maWxlX25hbWUiOiIiLCJkbF92b3Rlcl9pZCI6IiIsImRsX3ZvdGVyX2lkX2ZpbGUiOiIiLCJmbGF0X2hvdXNlX2J1aWxkaW5nIjoiIiwiYXJlYV9zdHJlZXRfdmlsbGFnZSI6IiIsInRvd25fY2l0eSI6IiIsImRpc3RyaWMiOiIiLCJzdGF0ZSI6IiIsInppcGNvZGUiOiIiLCJjb3VudHJ5IjoiIiwiY29udGFjdF9udW1iZXIiOiIiLCJlbWVyZ2VuY3lfY29udGFjdF9udW1iZXIiOiIiLCJoaV9xdWFsaWZpY2F0aW9uIjoiIiwiaGlfY291cnNlIjoiIiwiaGlfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJoaV9wYXNzaW5nX3llYXIiOiIiLCJoaV9wZXJjZW50YWdlIjoiIiwiaGlfcXVhbGlfZG9jX25hbWUiOiIiLCJpbl9xdWFsaWZpY2F0aW9uIjoiIiwiaW5fY291cnNlIjoiIiwiaW5faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJpbl9wYXNzaW5nX3llYXIiOiIiLCJpbl9wZXJjZW50YWdlIjoiIiwiaW5fcXVhbGlfZG9jX25hbWUiOiIiLCJnYV9xdWFsaWZpY2F0aW9uIjoiIiwiZ2FfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJnYV9wYXNzaW5nX3llYXIiOiIiLCJnYV9jb3Vyc2UiOiIiLCJnYV9wZXJjZW50YWdlIjoiIiwiZ2FfcXVhbGlfZG9jX25hbWUiOiIiLCJwb19xdWFsaWZpY2F0aW9uIjoiIiwicG9fY291cnNlIjoiIiwicG9faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJwb19wYXNzaW5nX3llYXIiOiIiLCJwb19wZXJjZW50YWdlIjoiIiwicG9fcXVhbGlfZG9jX25hbWUiOiIiLCJlc2ljX25vIjoiIiwiZXBmX3Vhbl9ubyI6IiIsImVtYWlsIjoiYm9hdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCROeW1hUW5rS2JyV1hSTUVRV0ZkSFNlZ1VHdTNXSjZLMlgwR2tSLkJvNHpFVXhXaWFLL25vVyIsImVtcF9wZXJfZW1haWwiOm51bGwsInByb2ZpbGVfaW1hZ2UiOiJ1cGxvYWRzLzE2OTU5Njk1OTAyODVkZWNsaW5lX2xlYXZlLnBuZywiLCJlbXBfcm9sZSI6IkFETUlOIiwidmlld19hcyI6IkFETUlOIiwiY29tcGFueV9jb2RlIjoiOTQ1NjQ1NjQ1NjciLCJjcmVhdGVkX2F0IjoiMjAyMy0wOS0yMSIsInJlbW92ZV9hdCI6IjIwMjMtMDktMDkiLCJmbGFnIjoxLCJkZXNpZ25hdGlvbiI6IjE0IiwiZGVwYXJ0bWVudCI6IiIsInJlcG9ydGluZ19tYW5hZ2VyIjoiIiwiZ2VuZGVyIjoiIiwiZW1wbG95bWVudCI6IiIsIm5vbWluZWVfbmFtZSI6IiIsIm5vbWluZWVfYWRkcmVzcyI6IiIsIm5vbWluZWVfY29udGFjdF9ubyI6IiIsIm5vbWluZWVfcmVsYXRpb24iOiIifV0sImlhdCI6MTY5NjQyMDUzOSwiZXhwIjoxNzA0MTk2NTM5fQ.g8ETqrpGRIE9XGpzI6XNfVeMKX9ozJJp71kbAya_SAo";

//     chai
//       .request(app)
//       .delete("/api/v1/department/66")
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
