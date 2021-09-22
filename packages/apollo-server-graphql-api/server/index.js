const { server } = require("./app");

server.listen(3000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
