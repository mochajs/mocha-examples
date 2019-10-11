const request = require('supertest');
const app = require('../server/app.js');

describe('GET /users', function() {
  it('return list of users', function() {
    return request(app)
      .get('/users')
      .expect(200)
      .expect('Content-Type',/json/)
      .expect('[{"name":"ej","age":26},{"name":"jh","age":28}]')
  })
})