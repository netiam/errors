import should from 'should'
import * as errors from '../src'

describe('errors', () => {
  describe('stack', () => {

    it('should create a stacktrace', () => {
      function a() {
        throw errors.badRequest('custom message')
      }

      function b() {
        a()
      }

      try {
        b()
      } catch (err) {
        should(err.stack).be.a.String()
      }
    })

  })
})
