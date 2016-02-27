import {
  types,
  register,
  ErrorType
} from '../src'

describe('netiam - errors', () => {
  describe('types', () => {
    it('should register custom type', () => {
      new ErrorType('Custom Type', 400, 'CUSTOM_TYPE', 4000)
      types.should.have.property('CUSTOM_TYPE')
      types.CUSTOM_TYPE.message.should.eql('Custom Type')
      types.CUSTOM_TYPE.status.should.eql(400)
      types.CUSTOM_TYPE.code.should.eql('CUSTOM_TYPE')
      types.CUSTOM_TYPE.id.should.eql(4000)
    })
  })
})
