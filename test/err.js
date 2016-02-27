import {HTTPError} from '../src/index'
import {
  ErrorType,
  register
} from '../src/types'

describe('netiam - errors', () => {
  describe('HTTPError', () => {
    it('should add stack', () => {
      const NODE_ENV = process.env.NODE_ENV
      process.env.NODE_ENV = 'development'

      const customType = new ErrorType('Custom Type 3', 400, 'CUSTOM_TYPE_3', 4002)
      const error = new HTTPError(customType)
      const exportError = error.toJSON()

      exportError.should.have.properties(['stack'])

      process.env.NODE_ENV = NODE_ENV
    })
  })
})
