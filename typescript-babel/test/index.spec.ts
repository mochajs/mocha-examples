import { equal } from 'assert'
import { hello } from '../src'

describe('Typescript + Babel usage suite', () => {
  it('should be able to execute a test', () => {
    equal(true, true)
  })
  it('should return string correctly', () => {
    equal(hello('mocha'), 'Hello mocha')
  })
})
