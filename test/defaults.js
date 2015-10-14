import HTTPError, {
  Codes
} from '../src'
import util from 'util'

describe('errors', () => {
  describe('defaults', () => {

    it('should accept an error as message', () => {
      const err = new HTTPError(500, 'HTTPError', new Error('awesome message'))
      err.message.should.eql('awesome message')
    })

  })
})
