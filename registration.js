const app = require("../app"); // Import your Express app
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
var assert = require("assert");
chai.use(chaiHttp);
// when use form data then need
const request = chai.request;

// ....................... Add registration.....................
// describe("Add registration ", function () {
//   it("Add registration  successfully", function (done) {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjoyODgxLCJmaXJzdF9uYW1lIjoiU2VydmljZSIsImxhc3RfbmFtZSI6ImdoZmpnIiwiZmF0aGVyX25hbWUiOiJmY2doamciLCJtb3RoZXJfbmFtZSI6ImRmZGdoam0iLCJkb2IiOiIxMy0wNi0xOTk5IiwiYmxvb2RfZ3JvdXAiOiIiLCJtYXRlcmlhbF9zdGF0dXMiOiIiLCJzcG91c2VfbmFtZSI6IiIsImVtcF9pZCI6InNlcjEyMzQiLCJyZWxpZ2lvbiI6ImZndmhqIiwicHJvYmF0aW9uIjoiIiwid3JpdHRlbl9sYW5ndWFnZSI6IiIsInNwb2tlbiI6IiIsIm1vdGhlcl90b25ndWUiOiIiLCJqb2luaW5nX2RhdGUiOiIiLCJjb25maXJtYXRpb25fZGF0ZSI6IiIsImVtcF9zdGF0dXMiOiIiLCJwYW5fbnVtYmVyIjoiIiwicGFuX2ZpbGVfbmFtZSI6IiIsImFkaGFyX251bWJlciI6IjgwODA4MDgwODA4MCIsImFhZGhhYXJfZmlsZV9mcm9udCI6InVwbG9hZHMvMTY5MzE5OTcwOTk1N2Rvd25sb2FkICgxKS5qcGVnLCIsImFhZGhhYXJfZmlsZV9iYWNrIjoidXBsb2Fkcy8xNjkzMTk5NzA5OTU3YmMxMTIwMDc4Zjc2OGZlZGQxMWY4NzI3Y2RjNTFkZDguanBnLCIsInBhc3Nwb3J0IjoiIiwicGFzc3BvcnRfZmlsZV9uYW1lIjoiIiwiZGxfdm90ZXJfaWQiOiIiLCJkbF92b3Rlcl9pZF9maWxlIjoiIiwiZmxhdF9ob3VzZV9idWlsZGluZyI6ImxtbG1ybXJsbSIsImFyZWFfc3RyZWV0X3ZpbGxhZ2UiOiJsbWV3ZjttO3dtZiIsInRvd25fY2l0eSI6IiIsImRpc3RyaWMiOiIiLCJzdGF0ZSI6IlNlbGVjdCBTdGF0ZSIsInppcGNvZGUiOiIyMjIxMTEiLCJjb3VudHJ5IjoiU2VsZWN0IGNvdW50cnkiLCJjb250YWN0X251bWJlciI6IjA5ODc2NTQzMjMiLCJlbWVyZ2VuY3lfY29udGFjdF9udW1iZXIiOiI4NzY1NDMyMzQ1IiwiaGlfcXVhbGlmaWNhdGlvbiI6IiIsImhpX2NvdXJzZSI6IiIsImhpX2luc3RpdHV0ZV91bml2ZXJzaXR5IjoiIiwiaGlfcGFzc2luZ195ZWFyIjoiIiwiaGlfcGVyY2VudGFnZSI6IiIsImhpX3F1YWxpX2RvY19uYW1lIjoiIiwiaW5fcXVhbGlmaWNhdGlvbiI6IiIsImluX2NvdXJzZSI6IiIsImluX2luc3RpdHV0ZV91bml2ZXJzaXR5IjoiIiwiaW5fcGFzc2luZ195ZWFyIjoiIiwiaW5fcGVyY2VudGFnZSI6IiIsImluX3F1YWxpX2RvY19uYW1lIjoiIiwiZ2FfcXVhbGlmaWNhdGlvbiI6IiIsImdhX2luc3RpdHV0ZV91bml2ZXJzaXR5IjoiIiwiZ2FfcGFzc2luZ195ZWFyIjoiIiwiZ2FfY291cnNlIjoiIiwiZ2FfcGVyY2VudGFnZSI6IiIsImdhX3F1YWxpX2RvY19uYW1lIjoiIiwicG9fcXVhbGlmaWNhdGlvbiI6IiIsInBvX2NvdXJzZSI6IiIsInBvX2luc3RpdHV0ZV91bml2ZXJzaXR5IjoiIiwicG9fcGFzc2luZ195ZWFyIjoiIiwicG9fcGVyY2VudGFnZSI6IiIsInBvX3F1YWxpX2RvY19uYW1lIjoiIiwiZXNpY19ubyI6IiIsImVwZl91YW5fbm8iOiIiLCJlbWFpbCI6InNlcnZpY2VAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkcDhCRG1CYkouS3N0T2lPSVdDMGl3dUdOaEQ0c1Z4VlNIR2FLS202b3REMlBZbWVaOTRpQksiLCJlbXBfcGVyX2VtYWlsIjoic2VydmljZUBnbWFpbC5jb20iLCJwcm9maWxlX2ltYWdlIjoidXBsb2Fkcy8xNjkwMjYwMjk4NTI1U2NyZWVuc2hvdCAyMDIzLTA3LTI0IGF0IDMuMjkuMjAgUE0ucG5nLCIsImVtcF9yb2xlIjoiQURNSU4iLCJ2aWV3X2FzIjoiQURNSU4iLCJjb21wYW55X2NvZGUiOiIxMjM0IiwiY3JlYXRlZF9hdCI6IjIwMjMtMDctMTIiLCJmbGFnIjoxLCJkZXNpZ25hdGlvbiI6IiIsImRlcGFydG1lbnQiOiIiLCJyZXBvcnRpbmdfbWFuYWdlciI6IiIsImdlbmRlciI6IiIsImVtcGxveW1lbnQiOiIiLCJub21pbmVlX25hbWUiOiIiLCJub21pbmVlX2FkZHJlc3MiOiIiLCJub21pbmVlX2NvbnRhY3Rfbm8iOiIiLCJub21pbmVlX3JlbGF0aW9uIjoiIn1dLCJpYXQiOjE2OTQwMDMxNDIsImV4cCI6MTcwMTc3OTE0Mn0.P-YRg949nZAgGoxgNatIqM3eij_B-wg2Fu22zEJ44rI";
//     const addregistration = {
//       emp_id: "Boat94564564567",
//       resignation_date: "08-09-2023",
//       notice_period: "1 days",
//       last_work_date: "09-09-2023",
//       fnf_date: "09-09-2023",
//     };
//     chai
//       .request(app)
//       .post("/api/v1/resignation/add-resignation")
//       .set("Authorization", `Bearer ${bearerToken}`)
//       .send(addregistration)
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

// ....................... Update resignation.....................
// describe("Update resignation ", function () {
//   it("Update resignation  successfully", function (done) {
//     const bearerToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjoyODgxLCJmaXJzdF9uYW1lIjoiU2VydmljZSIsImxhc3RfbmFtZSI6ImdoZmpnIiwiZmF0aGVyX25hbWUiOiJmY2doamciLCJtb3RoZXJfbmFtZSI6ImRmZGdoam0iLCJkb2IiOiIxMy0wNi0xOTk5IiwiYmxvb2RfZ3JvdXAiOiIiLCJtYXRlcmlhbF9zdGF0dXMiOiIiLCJzcG91c2VfbmFtZSI6IiIsImVtcF9pZCI6InNlcjEyMzQiLCJyZWxpZ2lvbiI6ImZndmhqIiwicHJvYmF0aW9uIjoiIiwid3JpdHRlbl9sYW5ndWFnZSI6IiIsInNwb2tlbiI6IiIsIm1vdGhlcl90b25ndWUiOiIiLCJqb2luaW5nX2RhdGUiOiIiLCJjb25maXJtYXRpb25fZGF0ZSI6IiIsImVtcF9zdGF0dXMiOiIiLCJwYW5fbnVtYmVyIjoiIiwicGFuX2ZpbGVfbmFtZSI6IiIsImFkaGFyX251bWJlciI6IjgwODA4MDgwODA4MCIsImFhZGhhYXJfZmlsZV9mcm9udCI6InVwbG9hZHMvMTY5MzE5OTcwOTk1N2Rvd25sb2FkICgxKS5qcGVnLCIsImFhZGhhYXJfZmlsZV9iYWNrIjoidXBsb2Fkcy8xNjkzMTk5NzA5OTU3YmMxMTIwMDc4Zjc2OGZlZGQxMWY4NzI3Y2RjNTFkZDguanBnLCIsInBhc3Nwb3J0IjoiIiwicGFzc3BvcnRfZmlsZV9uYW1lIjoiIiwiZGxfdm90ZXJfaWQiOiIiLCJkbF92b3Rlcl9pZF9maWxlIjoiIiwiZmxhdF9ob3VzZV9idWlsZGluZyI6ImxtbG1ybXJsbSIsImFyZWFfc3RyZWV0X3ZpbGxhZ2UiOiJsbWV3ZjttO3dtZiIsInRvd25fY2l0eSI6IiIsImRpc3RyaWMiOiIiLCJzdGF0ZSI6IlNlbGVjdCBTdGF0ZSIsInppcGNvZGUiOiIyMjIxMTEiLCJjb3VudHJ5IjoiU2VsZWN0IGNvdW50cnkiLCJjb250YWN0X251bWJlciI6IjA5ODc2NTQzMjMiLCJlbWVyZ2VuY3lfY29udGFjdF9udW1iZXIiOiI4NzY1NDMyMzQ1IiwiaGlfcXVhbGlmaWNhdGlvbiI6IiIsImhpX2NvdXJzZSI6IiIsImhpX2luc3RpdHV0ZV91bml2ZXJzaXR5IjoiIiwiaGlfcGFzc2luZ195ZWFyIjoiIiwiaGlfcGVyY2VudGFnZSI6IiIsImhpX3F1YWxpX2RvY19uYW1lIjoiIiwiaW5fcXVhbGlmaWNhdGlvbiI6IiIsImluX2NvdXJzZSI6IiIsImluX2luc3RpdHV0ZV91bml2ZXJzaXR5IjoiIiwiaW5fcGFzc2luZ195ZWFyIjoiIiwiaW5fcGVyY2VudGFnZSI6IiIsImluX3F1YWxpX2RvY19uYW1lIjoiIiwiZ2FfcXVhbGlmaWNhdGlvbiI6IiIsImdhX2luc3RpdHV0ZV91bml2ZXJzaXR5IjoiIiwiZ2FfcGFzc2luZ195ZWFyIjoiIiwiZ2FfY291cnNlIjoiIiwiZ2FfcGVyY2VudGFnZSI6IiIsImdhX3F1YWxpX2RvY19uYW1lIjoiIiwicG9fcXVhbGlmaWNhdGlvbiI6IiIsInBvX2NvdXJzZSI6IiIsInBvX2luc3RpdHV0ZV91bml2ZXJzaXR5IjoiIiwicG9fcGFzc2luZ195ZWFyIjoiIiwicG9fcGVyY2VudGFnZSI6IiIsInBvX3F1YWxpX2RvY19uYW1lIjoiIiwiZXNpY19ubyI6IiIsImVwZl91YW5fbm8iOiIiLCJlbWFpbCI6InNlcnZpY2VAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkcDhCRG1CYkouS3N0T2lPSVdDMGl3dUdOaEQ0c1Z4VlNIR2FLS202b3REMlBZbWVaOTRpQksiLCJlbXBfcGVyX2VtYWlsIjoic2VydmljZUBnbWFpbC5jb20iLCJwcm9maWxlX2ltYWdlIjoidXBsb2Fkcy8xNjkwMjYwMjk4NTI1U2NyZWVuc2hvdCAyMDIzLTA3LTI0IGF0IDMuMjkuMjAgUE0ucG5nLCIsImVtcF9yb2xlIjoiQURNSU4iLCJ2aWV3X2FzIjoiQURNSU4iLCJjb21wYW55X2NvZGUiOiIxMjM0IiwiY3JlYXRlZF9hdCI6IjIwMjMtMDctMTIiLCJmbGFnIjoxLCJkZXNpZ25hdGlvbiI6IiIsImRlcGFydG1lbnQiOiIiLCJyZXBvcnRpbmdfbWFuYWdlciI6IiIsImdlbmRlciI6IiIsImVtcGxveW1lbnQiOiIiLCJub21pbmVlX25hbWUiOiIiLCJub21pbmVlX2FkZHJlc3MiOiIiLCJub21pbmVlX2NvbnRhY3Rfbm8iOiIiLCJub21pbmVlX3JlbGF0aW9uIjoiIn1dLCJpYXQiOjE2OTQwMDMxNDIsImV4cCI6MTcwMTc3OTE0Mn0.P-YRg949nZAgGoxgNatIqM3eij_B-wg2Fu22zEJ44rI";
//     const updateresignation = {
//       emp_id: "Boat94564564567",
//       resignation_date: "08-10-2023",
//       notice_period: "10 days",
//       last_work_date: "09-09-2023",
//       fnf_date: "09-10-2023",
//     };
//     chai
//       .request(app)
//       .post("/api/v1/resignation/update-resignation")
//       .set("Authorization", `Bearer ${bearerToken}`)
//       .send(updateresignation)
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
