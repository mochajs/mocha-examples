const request = require("supertest");
const { context, resolvers, typeDefs } = require("../server/app.js");
const { ApolloServer } = require("apollo-server");

describe("Create Apollo-Server", () => {
    let server;

    afterEach(async () => {
        await server.stop();
    });

    it("return http code 200", async () => {
        server = new ApolloServer({ context, resolvers, typeDefs });
        const { server: httpServer } = await server.listen({ port: 0 });
        request(httpServer)
            .get("/.well-known/apollo/server-health")
            .expect(200, { status: "pass" });
    });
});
