const sqlite3 = require("sqlite3").verbose();

exports.initDB = function initDB(path) {
  return new sqlite3.Database(path);
};

exports.createTable = function createTable(db) {
    return new Promise((resolve, reject)=> {
        db.run("CREATE TABLE IF NOT EXISTS user(id integer primary key, name text not null, email text unique)", (err)=>{
            if(err) {
                reject(err);
            } else {
                resolve()
            }
        });
    })
};

exports.dropTable = function dropTable(db) {
    return new Promise((resolve, reject) => {
        db.run("DROP TABLE IF EXISTS user", (err)=> {
            if(err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
};

exports.insertUser = function insertUser(db, name, email) {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO user(name, email) VALUES('${name}', '${email}')`, (err)=> {
            if(err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
};

exports.getUsersByName = function getUsersByName(db, name) {
  let sql = `SELECT * FROM user WHERE name = '${name}'`;

  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows) => {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
};

exports.closeDBPool = function closeDBPool(db) {
  return db.close();
};
