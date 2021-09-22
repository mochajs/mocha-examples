const request = require("supertest");
const { context, resolvers, typeDefs } = require("../server/app.js");
const { ApolloServer } = require("apollo-server");
const assert = require("assert");

describe("User", async () => {

    let server;
    afterEach(async () => {
        await server.stop();
    });

    describe("Mutation", () => {
        it("return user", async () => {
            const query = `
                mutation {
                    createUser(
                        input: {
                            name: "pukuba",
                            age: 11
                        }
                    ){
                        name
                        age
                    }
                }
            `;
            server = new ApolloServer({ context, resolvers, typeDefs });
            const { server: httpServer } = await server.listen({ port: 0 });
            const { body } = await request(httpServer)
                .post("/")
                .set("content-type", "application/json")
                .send(JSON.stringify({ query }))
                .expect(200);
            assert.equal(body.data.createUser.name, "pukuba");
            assert.equal(body.data.createUser.age, 11);
        });

        it("return apollo error", async () => {
            const query = `
                mutation {
                    createUser(
                        input: {
                            name: "pukuba",
                            age: 11
                        }
                    ){
                        name
                    }
                }
            `;
            server = new ApolloServer({ context, resolvers, typeDefs });
            const { server: httpServer } = await server.listen({ port: 0 });
            const { body } = await request(httpServer)
                .post("/")
                .set("content-type", "application/json")
                .send(JSON.stringify({ query }))
                .expect(200);
            assert.equal(body.errors[0].message, "Name already exists");
        });
    });

    describe("Query", () => {
        it("return user", async () => {
            const query = `
                query {
                    user(name: "admin"){
                        name
                        age
                    }
                }
            `;
            server = new ApolloServer({ context, resolvers, typeDefs });
            const { server: httpServer } = await server.listen({ port: 0 });
            const { body } = await request(httpServer)
                .get(`/?query=${query}`)
                .expect(200);
            assert.equal(body.data.user.name, "admin");
            assert.equal(body.data.user.age, 22);
        });

        it("return apollo error", async () => {
            const query = `
                query {
                    user(name: "pukuba0604"){
                        name
                        age
                    }
                }
            `;
            server = new ApolloServer({ context, resolvers, typeDefs });
            const { server: httpServer } = await server.listen({ port: 0 });
            const { body } = await request(httpServer)
                .get(`/?query=${query}`)
                .expect(200);
            assert.equal(body.errors[0].message, "User not found");
        });
    });
});