const request = require('supertest');
const app = require('../server/app.js');

describe('GET /users', function() {
  it('return \'respond with a resource\'', function() {
    return request(app)
      .get('/users')
      .expect(200)
      .expect('respond with a resource')
  })
})