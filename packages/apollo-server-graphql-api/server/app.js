const { ApolloServer } = require("apollo-server");
const { readFileSync } = require("fs");
const resolvers = require("./resolvers");
const typeDefs = readFileSync(`${__dirname}/typeDefs.graphql`, "utf-8");
const db = require("./db");

const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: {
        db
    }
});

module.exports = server;