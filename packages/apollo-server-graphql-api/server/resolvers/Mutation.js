const { ApolloError } = require("apollo-server");

module.exports = {
    createUser: (root, args, context) => {
        const exists = context.db.find((user) => user.name === args.input.name);
        if (exists) {
            throw new ApolloError('Name already exists');
        }
        context.db.push({ ...args.input });
        return args.input;
    }
};