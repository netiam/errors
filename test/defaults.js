import {
  Codes,
  HTTPError
} from '../src'
import util from 'util'

describe('errors', () => {
  describe('defaults', () => {

    it('should accept an error as message', () => {
      const err = new HTTPError({
        status: 500,
        code: Codes.E1000.type,
        message: 'awesome message'
      })
      err.message.should.eql('awesome message')
    })

  })
})
