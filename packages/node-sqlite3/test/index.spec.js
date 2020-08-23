const assert = require("assert");
const {
  initDB,
  createTable,
  dropTable,
  insertUser,
  getUsersByName,
  closeDBPool,
} = require("../src/index.js");

describe("Sqlite", function () {
  let db;
  before(() => {
    db = initDB(':memory:');
    db.serialize(function() {
      dropTable(db);
      createTable(db);
    });
  });

  it("should insert and fetch a user", async () => {
    const name = "mocha";
    const email = "mocha@test.com";

    insertUser(db, name, email);
    const user = await getUsersByName(db, name);
    assert.deepEqual(user, [{ id: 1, name, email }]);
  });

  after(() => {
    closeDBPool(db);
  });
});
