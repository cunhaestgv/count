const app = require('./main');
const supertest = require("supertest");
const request = supertest(app);


describe("GET / ", () => {
  test("should increment number", async () => {
    const responseGet = await request.get("/");
    expect(responseGet.statusCode).toBe(200);
    const responsePost = await request.post("/").send("");
    expect(responsePost.statusCode).toBe(200);

    const responseGet2 = await request.get("/");
    expect(parseInt(responseGet2.text)).toBe(parseInt(responseGet.text)+1);
  });
});
