const { ApolloError } = require("apollo-server")

module.exports = {
    user: (root, args, context) => {
        const user = context.db.find((user) => user.name === args.name);
        return user || new ApolloError("User not found");
    }
};