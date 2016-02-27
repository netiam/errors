import {HTTPError} from '../src/index'
import {
  ErrorType,
  register
} from '../src/types'

describe('netiam - errors', () => {
  describe('HTTPError', () => {
    it('should create HTTPError', () => {
      const customType = new ErrorType('Custom Type 2', 400, 'CUSTOM_TYPE_2', 4001)
      const error = new HTTPError(customType)
      const exportError = error.toJSON()
      exportError.should.have.properties(['message', 'status', 'code', 'id'])
      exportError.message.should.eql('Custom Type 2')
      exportError.status.should.eql(400)
      exportError.code.should.eql('CUSTOM_TYPE_2')
      exportError.id.should.eql(4001)
    })
  })
})
