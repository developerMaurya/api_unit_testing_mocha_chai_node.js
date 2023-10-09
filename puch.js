const app = require("../app"); // Import your Express app
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
var assert = require("assert");
chai.use(chaiHttp);

//....................... Employee Check In.....................
// describe("Employee Check In", function () {
//   it("Check in  successfully", function (done) {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjozMDMzLCJmaXJzdF9uYW1lIjpudWxsLCJsYXN0X25hbWUiOiIiLCJmYXRoZXJfbmFtZSI6IiIsIm1vdGhlcl9uYW1lIjoiIiwiZG9iIjoiIiwiYmxvb2RfZ3JvdXAiOiIiLCJtYXRlcmlhbF9zdGF0dXMiOiIiLCJzcG91c2VfbmFtZSI6IiIsImVtcF9pZCI6IkJvYXQ5NDU2NDU2NDU2NyIsInJlbGlnaW9uIjoiIiwicHJvYmF0aW9uIjoiIiwid3JpdHRlbl9sYW5ndWFnZSI6IiIsInNwb2tlbiI6IiIsIm1vdGhlcl90b25ndWUiOiIiLCJqb2luaW5nX2RhdGUiOiIiLCJjb25maXJtYXRpb25fZGF0ZSI6IiIsImVtcF9zdGF0dXMiOiIiLCJwYW5fbnVtYmVyIjoiIiwicGFuX2ZpbGVfbmFtZSI6IiIsImFkaGFyX251bWJlciI6IiIsImFhZGhhYXJfZmlsZV9mcm9udCI6IiIsImFhZGhhYXJfZmlsZV9iYWNrIjoiIiwicGFzc3BvcnQiOiIiLCJwYXNzcG9ydF9maWxlX25hbWUiOiIiLCJkbF92b3Rlcl9pZCI6IiIsImRsX3ZvdGVyX2lkX2ZpbGUiOiIiLCJmbGF0X2hvdXNlX2J1aWxkaW5nIjoiIiwiYXJlYV9zdHJlZXRfdmlsbGFnZSI6IiIsInRvd25fY2l0eSI6IiIsImRpc3RyaWMiOiIiLCJzdGF0ZSI6IiIsInppcGNvZGUiOiIiLCJjb3VudHJ5IjoiIiwiY29udGFjdF9udW1iZXIiOiIiLCJlbWVyZ2VuY3lfY29udGFjdF9udW1iZXIiOiIiLCJoaV9xdWFsaWZpY2F0aW9uIjoiIiwiaGlfY291cnNlIjoiIiwiaGlfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJoaV9wYXNzaW5nX3llYXIiOiIiLCJoaV9wZXJjZW50YWdlIjoiIiwiaGlfcXVhbGlfZG9jX25hbWUiOiIiLCJpbl9xdWFsaWZpY2F0aW9uIjoiIiwiaW5fY291cnNlIjoiIiwiaW5faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJpbl9wYXNzaW5nX3llYXIiOiIiLCJpbl9wZXJjZW50YWdlIjoiIiwiaW5fcXVhbGlfZG9jX25hbWUiOiIiLCJnYV9xdWFsaWZpY2F0aW9uIjoiIiwiZ2FfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJnYV9wYXNzaW5nX3llYXIiOiIiLCJnYV9jb3Vyc2UiOiIiLCJnYV9wZXJjZW50YWdlIjoiIiwiZ2FfcXVhbGlfZG9jX25hbWUiOiIiLCJwb19xdWFsaWZpY2F0aW9uIjoiIiwicG9fY291cnNlIjoiIiwicG9faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJwb19wYXNzaW5nX3llYXIiOiIiLCJwb19wZXJjZW50YWdlIjoiIiwicG9fcXVhbGlfZG9jX25hbWUiOiIiLCJlc2ljX25vIjoiIiwiZXBmX3Vhbl9ubyI6IiIsImVtYWlsIjoiYm9hdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCROeW1hUW5rS2JyV1hSTUVRV0ZkSFNlZ1VHdTNXSjZLMlgwR2tSLkJvNHpFVXhXaWFLL25vVyIsImVtcF9wZXJfZW1haWwiOm51bGwsInByb2ZpbGVfaW1hZ2UiOiJ1cGxvYWRzLzE2OTU5Njk1OTAyODVkZWNsaW5lX2xlYXZlLnBuZywiLCJlbXBfcm9sZSI6IkFETUlOIiwidmlld19hcyI6IkFETUlOIiwiY29tcGFueV9jb2RlIjoiOTQ1NjQ1NjQ1NjciLCJjcmVhdGVkX2F0IjoiMjAyMy0wOS0yMSIsInJlbW92ZV9hdCI6IjIwMjMtMDktMDkiLCJmbGFnIjoxLCJkZXNpZ25hdGlvbiI6IjE0IiwiZGVwYXJ0bWVudCI6IiIsInJlcG9ydGluZ19tYW5hZ2VyIjoiIiwiZ2VuZGVyIjoiIiwiZW1wbG95bWVudCI6IiIsIm5vbWluZWVfbmFtZSI6IiIsIm5vbWluZWVfYWRkcmVzcyI6IiIsIm5vbWluZWVfY29udGFjdF9ubyI6IiIsIm5vbWluZWVfcmVsYXRpb24iOiIifV0sImlhdCI6MTY5NjQyMDUzOSwiZXhwIjoxNzA0MTk2NTM5fQ.g8ETqrpGRIE9XGpzI6XNfVeMKX9ozJJp71kbAya_SAo";
//     const checkin = {
//       emp_id: "Ser1234",
//     };

//     chai
//       .request(app)
//       .post("/api/v1/timesheet/checkin")
//       .set("Authorization", `Bearer ${bearerToken}`)
//       .send(checkin)
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
// //....................... Employee Check our.....................
// describe("Employee Check our", function () {
//   it("Check in  successfully", function (done) {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjozMDMzLCJmaXJzdF9uYW1lIjpudWxsLCJsYXN0X25hbWUiOiIiLCJmYXRoZXJfbmFtZSI6IiIsIm1vdGhlcl9uYW1lIjoiIiwiZG9iIjoiIiwiYmxvb2RfZ3JvdXAiOiIiLCJtYXRlcmlhbF9zdGF0dXMiOiIiLCJzcG91c2VfbmFtZSI6IiIsImVtcF9pZCI6IkJvYXQ5NDU2NDU2NDU2NyIsInJlbGlnaW9uIjoiIiwicHJvYmF0aW9uIjoiIiwid3JpdHRlbl9sYW5ndWFnZSI6IiIsInNwb2tlbiI6IiIsIm1vdGhlcl90b25ndWUiOiIiLCJqb2luaW5nX2RhdGUiOiIiLCJjb25maXJtYXRpb25fZGF0ZSI6IiIsImVtcF9zdGF0dXMiOiIiLCJwYW5fbnVtYmVyIjoiIiwicGFuX2ZpbGVfbmFtZSI6IiIsImFkaGFyX251bWJlciI6IiIsImFhZGhhYXJfZmlsZV9mcm9udCI6IiIsImFhZGhhYXJfZmlsZV9iYWNrIjoiIiwicGFzc3BvcnQiOiIiLCJwYXNzcG9ydF9maWxlX25hbWUiOiIiLCJkbF92b3Rlcl9pZCI6IiIsImRsX3ZvdGVyX2lkX2ZpbGUiOiIiLCJmbGF0X2hvdXNlX2J1aWxkaW5nIjoiIiwiYXJlYV9zdHJlZXRfdmlsbGFnZSI6IiIsInRvd25fY2l0eSI6IiIsImRpc3RyaWMiOiIiLCJzdGF0ZSI6IiIsInppcGNvZGUiOiIiLCJjb3VudHJ5IjoiIiwiY29udGFjdF9udW1iZXIiOiIiLCJlbWVyZ2VuY3lfY29udGFjdF9udW1iZXIiOiIiLCJoaV9xdWFsaWZpY2F0aW9uIjoiIiwiaGlfY291cnNlIjoiIiwiaGlfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJoaV9wYXNzaW5nX3llYXIiOiIiLCJoaV9wZXJjZW50YWdlIjoiIiwiaGlfcXVhbGlfZG9jX25hbWUiOiIiLCJpbl9xdWFsaWZpY2F0aW9uIjoiIiwiaW5fY291cnNlIjoiIiwiaW5faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJpbl9wYXNzaW5nX3llYXIiOiIiLCJpbl9wZXJjZW50YWdlIjoiIiwiaW5fcXVhbGlfZG9jX25hbWUiOiIiLCJnYV9xdWFsaWZpY2F0aW9uIjoiIiwiZ2FfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJnYV9wYXNzaW5nX3llYXIiOiIiLCJnYV9jb3Vyc2UiOiIiLCJnYV9wZXJjZW50YWdlIjoiIiwiZ2FfcXVhbGlfZG9jX25hbWUiOiIiLCJwb19xdWFsaWZpY2F0aW9uIjoiIiwicG9fY291cnNlIjoiIiwicG9faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJwb19wYXNzaW5nX3llYXIiOiIiLCJwb19wZXJjZW50YWdlIjoiIiwicG9fcXVhbGlfZG9jX25hbWUiOiIiLCJlc2ljX25vIjoiIiwiZXBmX3Vhbl9ubyI6IiIsImVtYWlsIjoiYm9hdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCROeW1hUW5rS2JyV1hSTUVRV0ZkSFNlZ1VHdTNXSjZLMlgwR2tSLkJvNHpFVXhXaWFLL25vVyIsImVtcF9wZXJfZW1haWwiOm51bGwsInByb2ZpbGVfaW1hZ2UiOiJ1cGxvYWRzLzE2OTU5Njk1OTAyODVkZWNsaW5lX2xlYXZlLnBuZywiLCJlbXBfcm9sZSI6IkFETUlOIiwidmlld19hcyI6IkFETUlOIiwiY29tcGFueV9jb2RlIjoiOTQ1NjQ1NjQ1NjciLCJjcmVhdGVkX2F0IjoiMjAyMy0wOS0yMSIsInJlbW92ZV9hdCI6IjIwMjMtMDktMDkiLCJmbGFnIjoxLCJkZXNpZ25hdGlvbiI6IjE0IiwiZGVwYXJ0bWVudCI6IiIsInJlcG9ydGluZ19tYW5hZ2VyIjoiIiwiZ2VuZGVyIjoiIiwiZW1wbG95bWVudCI6IiIsIm5vbWluZWVfbmFtZSI6IiIsIm5vbWluZWVfYWRkcmVzcyI6IiIsIm5vbWluZWVfY29udGFjdF9ubyI6IiIsIm5vbWluZWVfcmVsYXRpb24iOiIifV0sImlhdCI6MTY5NjQyMDUzOSwiZXhwIjoxNzA0MTk2NTM5fQ.g8ETqrpGRIE9XGpzI6XNfVeMKX9ozJJp71kbAya_SAo";
//     const checkout = {
//       emp_id: "Ser1234",
//     };

//     chai
//       .request(app)
//       .post("/api/v1/timesheet/checkout")
//       .set("Authorization", `Bearer ${bearerToken}`)
//       .send(checkout)
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
//....................... Get active Employee.....................
// describe("Get active employee", function () {
//   it("get active employee", function (done) {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjozMDMzLCJmaXJzdF9uYW1lIjpudWxsLCJsYXN0X25hbWUiOiIiLCJmYXRoZXJfbmFtZSI6IiIsIm1vdGhlcl9uYW1lIjoiIiwiZG9iIjoiIiwiYmxvb2RfZ3JvdXAiOiIiLCJtYXRlcmlhbF9zdGF0dXMiOiIiLCJzcG91c2VfbmFtZSI6IiIsImVtcF9pZCI6IkJvYXQ5NDU2NDU2NDU2NyIsInJlbGlnaW9uIjoiIiwicHJvYmF0aW9uIjoiIiwid3JpdHRlbl9sYW5ndWFnZSI6IiIsInNwb2tlbiI6IiIsIm1vdGhlcl90b25ndWUiOiIiLCJqb2luaW5nX2RhdGUiOiIiLCJjb25maXJtYXRpb25fZGF0ZSI6IiIsImVtcF9zdGF0dXMiOiIiLCJwYW5fbnVtYmVyIjoiIiwicGFuX2ZpbGVfbmFtZSI6IiIsImFkaGFyX251bWJlciI6IiIsImFhZGhhYXJfZmlsZV9mcm9udCI6IiIsImFhZGhhYXJfZmlsZV9iYWNrIjoiIiwicGFzc3BvcnQiOiIiLCJwYXNzcG9ydF9maWxlX25hbWUiOiIiLCJkbF92b3Rlcl9pZCI6IiIsImRsX3ZvdGVyX2lkX2ZpbGUiOiIiLCJmbGF0X2hvdXNlX2J1aWxkaW5nIjoiIiwiYXJlYV9zdHJlZXRfdmlsbGFnZSI6IiIsInRvd25fY2l0eSI6IiIsImRpc3RyaWMiOiIiLCJzdGF0ZSI6IiIsInppcGNvZGUiOiIiLCJjb3VudHJ5IjoiIiwiY29udGFjdF9udW1iZXIiOiIiLCJlbWVyZ2VuY3lfY29udGFjdF9udW1iZXIiOiIiLCJoaV9xdWFsaWZpY2F0aW9uIjoiIiwiaGlfY291cnNlIjoiIiwiaGlfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJoaV9wYXNzaW5nX3llYXIiOiIiLCJoaV9wZXJjZW50YWdlIjoiIiwiaGlfcXVhbGlfZG9jX25hbWUiOiIiLCJpbl9xdWFsaWZpY2F0aW9uIjoiIiwiaW5fY291cnNlIjoiIiwiaW5faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJpbl9wYXNzaW5nX3llYXIiOiIiLCJpbl9wZXJjZW50YWdlIjoiIiwiaW5fcXVhbGlfZG9jX25hbWUiOiIiLCJnYV9xdWFsaWZpY2F0aW9uIjoiIiwiZ2FfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJnYV9wYXNzaW5nX3llYXIiOiIiLCJnYV9jb3Vyc2UiOiIiLCJnYV9wZXJjZW50YWdlIjoiIiwiZ2FfcXVhbGlfZG9jX25hbWUiOiIiLCJwb19xdWFsaWZpY2F0aW9uIjoiIiwicG9fY291cnNlIjoiIiwicG9faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJwb19wYXNzaW5nX3llYXIiOiIiLCJwb19wZXJjZW50YWdlIjoiIiwicG9fcXVhbGlfZG9jX25hbWUiOiIiLCJlc2ljX25vIjoiIiwiZXBmX3Vhbl9ubyI6IiIsImVtYWlsIjoiYm9hdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCROeW1hUW5rS2JyV1hSTUVRV0ZkSFNlZ1VHdTNXSjZLMlgwR2tSLkJvNHpFVXhXaWFLL25vVyIsImVtcF9wZXJfZW1haWwiOm51bGwsInByb2ZpbGVfaW1hZ2UiOiJ1cGxvYWRzLzE2OTU5Njk1OTAyODVkZWNsaW5lX2xlYXZlLnBuZywiLCJlbXBfcm9sZSI6IkFETUlOIiwidmlld19hcyI6IkFETUlOIiwiY29tcGFueV9jb2RlIjoiOTQ1NjQ1NjQ1NjciLCJjcmVhdGVkX2F0IjoiMjAyMy0wOS0yMSIsInJlbW92ZV9hdCI6IjIwMjMtMDktMDkiLCJmbGFnIjoxLCJkZXNpZ25hdGlvbiI6IjE0IiwiZGVwYXJ0bWVudCI6IiIsInJlcG9ydGluZ19tYW5hZ2VyIjoiIiwiZ2VuZGVyIjoiIiwiZW1wbG95bWVudCI6IiIsIm5vbWluZWVfbmFtZSI6IiIsIm5vbWluZWVfYWRkcmVzcyI6IiIsIm5vbWluZWVfY29udGFjdF9ubyI6IiIsIm5vbWluZWVfcmVsYXRpb24iOiIifV0sImlhdCI6MTY5NjQyMDUzOSwiZXhwIjoxNzA0MTk2NTM5fQ.g8ETqrpGRIE9XGpzI6XNfVeMKX9ozJJp71kbAya_SAo";

//     chai
//       .request(app)
//       .post("/api/v1/timesheet/activeEmp")
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
// //....................... Employee Checkcheking.....................
// describe("Employee checkCheckIn", function () {
//   it("checkCheckIn", function (done) {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjozMDMzLCJmaXJzdF9uYW1lIjpudWxsLCJsYXN0X25hbWUiOiIiLCJmYXRoZXJfbmFtZSI6IiIsIm1vdGhlcl9uYW1lIjoiIiwiZG9iIjoiIiwiYmxvb2RfZ3JvdXAiOiIiLCJtYXRlcmlhbF9zdGF0dXMiOiIiLCJzcG91c2VfbmFtZSI6IiIsImVtcF9pZCI6IkJvYXQ5NDU2NDU2NDU2NyIsInJlbGlnaW9uIjoiIiwicHJvYmF0aW9uIjoiIiwid3JpdHRlbl9sYW5ndWFnZSI6IiIsInNwb2tlbiI6IiIsIm1vdGhlcl90b25ndWUiOiIiLCJqb2luaW5nX2RhdGUiOiIiLCJjb25maXJtYXRpb25fZGF0ZSI6IiIsImVtcF9zdGF0dXMiOiIiLCJwYW5fbnVtYmVyIjoiIiwicGFuX2ZpbGVfbmFtZSI6IiIsImFkaGFyX251bWJlciI6IiIsImFhZGhhYXJfZmlsZV9mcm9udCI6IiIsImFhZGhhYXJfZmlsZV9iYWNrIjoiIiwicGFzc3BvcnQiOiIiLCJwYXNzcG9ydF9maWxlX25hbWUiOiIiLCJkbF92b3Rlcl9pZCI6IiIsImRsX3ZvdGVyX2lkX2ZpbGUiOiIiLCJmbGF0X2hvdXNlX2J1aWxkaW5nIjoiIiwiYXJlYV9zdHJlZXRfdmlsbGFnZSI6IiIsInRvd25fY2l0eSI6IiIsImRpc3RyaWMiOiIiLCJzdGF0ZSI6IiIsInppcGNvZGUiOiIiLCJjb3VudHJ5IjoiIiwiY29udGFjdF9udW1iZXIiOiIiLCJlbWVyZ2VuY3lfY29udGFjdF9udW1iZXIiOiIiLCJoaV9xdWFsaWZpY2F0aW9uIjoiIiwiaGlfY291cnNlIjoiIiwiaGlfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJoaV9wYXNzaW5nX3llYXIiOiIiLCJoaV9wZXJjZW50YWdlIjoiIiwiaGlfcXVhbGlfZG9jX25hbWUiOiIiLCJpbl9xdWFsaWZpY2F0aW9uIjoiIiwiaW5fY291cnNlIjoiIiwiaW5faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJpbl9wYXNzaW5nX3llYXIiOiIiLCJpbl9wZXJjZW50YWdlIjoiIiwiaW5fcXVhbGlfZG9jX25hbWUiOiIiLCJnYV9xdWFsaWZpY2F0aW9uIjoiIiwiZ2FfaW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJnYV9wYXNzaW5nX3llYXIiOiIiLCJnYV9jb3Vyc2UiOiIiLCJnYV9wZXJjZW50YWdlIjoiIiwiZ2FfcXVhbGlfZG9jX25hbWUiOiIiLCJwb19xdWFsaWZpY2F0aW9uIjoiIiwicG9fY291cnNlIjoiIiwicG9faW5zdGl0dXRlX3VuaXZlcnNpdHkiOiIiLCJwb19wYXNzaW5nX3llYXIiOiIiLCJwb19wZXJjZW50YWdlIjoiIiwicG9fcXVhbGlfZG9jX25hbWUiOiIiLCJlc2ljX25vIjoiIiwiZXBmX3Vhbl9ubyI6IiIsImVtYWlsIjoiYm9hdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCROeW1hUW5rS2JyV1hSTUVRV0ZkSFNlZ1VHdTNXSjZLMlgwR2tSLkJvNHpFVXhXaWFLL25vVyIsImVtcF9wZXJfZW1haWwiOm51bGwsInByb2ZpbGVfaW1hZ2UiOiJ1cGxvYWRzLzE2OTU5Njk1OTAyODVkZWNsaW5lX2xlYXZlLnBuZywiLCJlbXBfcm9sZSI6IkFETUlOIiwidmlld19hcyI6IkFETUlOIiwiY29tcGFueV9jb2RlIjoiOTQ1NjQ1NjQ1NjciLCJjcmVhdGVkX2F0IjoiMjAyMy0wOS0yMSIsInJlbW92ZV9hdCI6IjIwMjMtMDktMDkiLCJmbGFnIjoxLCJkZXNpZ25hdGlvbiI6IjE0IiwiZGVwYXJ0bWVudCI6IiIsInJlcG9ydGluZ19tYW5hZ2VyIjoiIiwiZ2VuZGVyIjoiIiwiZW1wbG95bWVudCI6IiIsIm5vbWluZWVfbmFtZSI6IiIsIm5vbWluZWVfYWRkcmVzcyI6IiIsIm5vbWluZWVfY29udGFjdF9ubyI6IiIsIm5vbWluZWVfcmVsYXRpb24iOiIifV0sImlhdCI6MTY5NjQyMDUzOSwiZXhwIjoxNzA0MTk2NTM5fQ.g8ETqrpGRIE9XGpzI6XNfVeMKX9ozJJp71kbAya_SAo";
//     const checkCheckIn = {
//       emp_id: "Ser1234",
//     };

//     chai
//       .request(app)
//       .post("/api/v1/timesheet/checkCheckIn")
//       .set("Authorization", `Bearer ${bearerToken}`)
//       .send(checkCheckIn)
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
//....................... Employee getEmployeetimesheet.....................
// describe("getEmployeetimesheet", function () {
//   it("getEmployeetimesheet sucessfully", function (done) {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjoyODgxLCJmaXJzdF9uYW1lIjoiU2VydmljZSIsImxhc3RfbmFtZSI6ImdoZmpnIiwiZmF0aGVyX25hbWUiOiJmY2doamciLCJtb3RoZXJfbmFtZSI6ImRmZGdoam0iLCJkb2IiOiIxMy0wNi0xOTk5IiwiYmxvb2RfZ3JvdXAiOiIiLCJtYXRlcmlhbF9zdGF0dXMiOiIiLCJzcG91c2VfbmFtZSI6IiIsImVtcF9pZCI6InNlcjEyMzQiLCJyZWxpZ2lvbiI6ImZndmhqIiwicHJvYmF0aW9uIjoiIiwid3JpdHRlbl9sYW5ndWFnZSI6IiIsInNwb2tlbiI6IiIsIm1vdGhlcl90b25ndWUiOiIiLCJqb2luaW5pZ19kYXRlIjoiIiwiY29uZmlybWF0aW9uX2RhdGUiOiIiLCJlbXBfc3RhdHVzIjoiIiwicGFuX251bWJlciI6IiIsInBhbl9maWxlX25hbWUiOiIiLCJhZGhhcl9udW1iZXIiOiIiLCJhZGhhcl9maWxlX25hbWUiOiIiLCJwYXNzcG9ydCI6IiIsInBhc3Nwb3J0X2ZpbGVfbmFtZSI6IiIsImRsX3ZvdGVyX2lkIjoiIiwiZGxfdm90ZXJfaWRfZmlsZSI6IiIsImZsYXRfaG91c2VfYnVpbGRpbmciOiIiLCJhcmVhX3N0cmVldF92aWxsYWdlIjoiIiwidG93bl9jaXR5IjoiIiwiZGlzdHJpYyI6IiIsInN0YXRlIjoiIiwiemlwY29kZSI6IiIsImNvbnRhY3RfbnVtYmVyIjoiIiwiZW1lcmdlbmN5X2NvbnRhY3RfbnVtYmVyIjoiIiwiaGlfcXVhbGlmaWNhdGlvbiI6IiIsImhpX2NvdXJzZSI6IiIsImhpX2luc3RpdHV0ZV91bml2ZXJzaXR5IjoiIiwiaGlfcGFzc2luZ195ZWFyIjoiIiwiaGlfcGVyY2VudGFnZSI6IiIsImhpX3F1YWxpX2RvY19uYW1lIjoiIiwiaW5fcXVhbGlmaWNhdGlvbiI6IiIsImluX2NvdXJzZSI6IiIsImluX2luc3RpdHV0ZV91bml2ZXJzaXR5IjoiIiwiaW5fcGFzc2luZ195ZWFyIjoiIiwiaW5fcGVyY2VudGFnZSI6IiIsImluX3F1YWxpX2RvY19uYW1lIjoiIiwiZ2FfcXVhbGlmaWNhdGlvbiI6IiIsImdhX2luc3RpdHV0ZV91bml2ZXJzaXR5IjoiIiwiZ2FfcGFzc2luZ195ZWFyIjoiIiwiZ2FfY291cnNlIjoiIiwiZ2FfcGVyY2VudGFnZSI6IiIsImdhX3F1YWxpX2RvY19uYW1lIjoiIiwicG9fcXVhbGlmaWNhdGlvbiI6IiIsInBvX2NvdXJzZSI6IiIsInBvX2luc3RpdHV0ZV91bml2ZXJzaXR5IjoiIiwicG9fcGFzc2luZ195ZWFyIjoiIiwicG9fcGVyY2VudGFnZSI6IiIsInBvX3F1YWxpX2RvY19uYW1lIjoiIiwiZXNpY19ubyI6IiIsImVwZl91YW5fbm8iOiIiLCJlbWFpbCI6InNlcnZpY2VAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkclZMcUt0cjNuZWgvY055M3cyek92dUZXV0JkTGV0TG84bTBDTFhUeHd0VjBycW5kV1MuVGkiLCJlbXBfcGVyX2VtYWlsIjpudWxsLCJwcm9maWxlX2ltYWdlIjoiIiwiZW1wX3JvbGUiOiJBRE1JTiIsInZpZXdfYXMiOiJBRE1JTiIsImNvbXBhbnlfY29kZSI6IjEyMzQiLCJjcmVhdGVkX2F0IjoiMjAyMy0wNy0xMiIsImZsYWciOjF9XSwiaWF0IjoxNjg5NzU4NzE4LCJleHAiOjE3MjEyOTQ3MTh9.fItz1K4JtSiFwat6Wt0rwjreNQmNqdNaCWfwjaoTlGE";
//     const getEmployeetimesheet = {
//       start_date: "2023-05-01",
//       end_date: "2023-08-31",
//       emp_id: "",
//       page: 5,
//       limit: 100,
//       search: "l",
//     };

//     chai
//       .request(app)
//       .post("/api/v1/timesheet/getEmployeetimesheet")
//       .set("Authorization", `Bearer ${bearerToken}`)
//       .send(getEmployeetimesheet)
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
