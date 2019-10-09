const request = require('supertest');
const app = require('../app.js');

describe('GET /', function() {
  it('return index page', function() {
    return request(app)
      .get('/')
      .expect(200)
      .expect('<p>some html</p>')
  })
})


