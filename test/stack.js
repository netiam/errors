import should from 'should'
import {HTTPError} from '../src'

describe('errors', () => {
  describe('stack', () => {

    it('should create a stacktrace', () => {
      function a() {
        throw new HTTPError({message: 'custom message'})
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
