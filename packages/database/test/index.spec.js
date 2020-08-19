const assert = require('assert')
const path = require('path')
const {initDB, createTable, dropTable, insertUser, getUsersByName, closeDBPool} = require('../src/index.js')

describe(('Test') , function() {
    let db
    before(async ()=> {
        db = await initDB(path.resolve(__dirname, '..' ,'db', 'test.db'))
        await dropTable(db)
        await createTable(db)
    })

    describe('database test', ()=> {
       it("test user" , async ()=> {
        const name = 'mocha'
        const email = 'mocha@test.com'

        await insertUser(db,name,email)
        const user = await getUsersByName(db,name)
        assert.deepEqual(user, [ { id: 1, name: 'mocha', email: 'mocha@test.com' } ])
       })
    })

    after(async ()=> {
        await closeDBPool(db)
    })
})
