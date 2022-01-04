const app = require("./server.js")
const supertest = require("supertest")

it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
})

test("GET /", async () => {
    await supertest(app).get("/")
        .expect(200)
        .then((res) => {
            expect(res.body.yaelQuote.length).toBeGreaterThan(1)
            expect(res.body.api).toBeGreaterThanOrEqual(1)
        })
} )