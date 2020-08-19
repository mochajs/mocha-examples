const sqlite3 = require('sqlite3').verbose();

exports.initDB =  function initDB(path) {
    return new Promise((resolve,reject)=> {
        resolve(new sqlite3.Database(path))
        if(reject) {
            throw new Error('fail connect')
        }
    })
}

exports.createTable =  function createTable(db) {
    return new Promise((resolve,reject)=> {
        resolve(db.run('CREATE TABLE IF NOT EXISTS user(id integer primary key, name text not null, email text unique)'))
        if(reject) {
            throw new Error('fail create table')
        }
    })
}

exports.dropTable =  function dropTable(db) {
    return new Promise((resolve,reject)=>{
        resolve(db.run('DROP TABLE IF EXISTS user'))
        if(reject) {
            throw new Error('fail drop table')
        }
    })
}

exports.insertUser =  function insertUser(db, name, email) {
    return new Promise((resolve,reject)=> {
        resolve(db.run(`INSERT INTO user(name, email) VALUES('${name}', '${email}')`))
        if(reject) {
            throw new Error('fail insert table')
        }
    })
}

exports.getUsersByName = function getUsersByName(db, name) {
    let sql = `SELECT * FROM user
    WHERE name = '${name}'`;

    return new Promise((resolve,reject)=> {
        db.all(sql, (err, rows)=> {
            resolve(rows)
        if(err) {
            throw reject(err)
        }
        })

    });
}

exports.closeDBPool = function closeDBPool(db) {
    return new Promise((resolve,reject)=> {
        resolve(db.close())
        if(reject) {
            throw new Error('fail close')
        }
    })
}