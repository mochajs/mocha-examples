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
  before((done) => {
    db = initDB(':memory:');
    db.serialize(async function() {
      await dropTable(db);
      await createTable(db);
      done();
    });
  });

  it("should insert and fetch a user", async () => {
    const name = "mocha";
    const email = "mocha@test.com";

    await insertUser(db, name, email);
    const user = await getUsersByName(db, name);
    assert.deepEqual(user, [{ id: 1, name, email }]);
  });

  after(() => {
    closeDBPool(db);
  });
});
