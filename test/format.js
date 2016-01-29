import {
  Codes,
  OAuthError
} from '../src'

describe('errors', () => {
  describe('codes', () => {

    it('should export object w/ OAuthError properties', () => {
      const err = new OAuthError({
        description: 'An OAuth error',
        status: 400,
        code: Codes.E4000
      })

      err.toJSON()
        .should.have.properties(['name', 'status', 'code', 'message'])
    })

  })
})
