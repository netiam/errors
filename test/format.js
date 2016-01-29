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
        code: Codes.E4004,
        uri: 'https://neti.am',
        state: 'foo=bar'
      })

      err.toJSON()
        .should.have.properties([
        'error',
        'error_description',
        'error_uri',
        'state'
      ])
    })

  })
})
