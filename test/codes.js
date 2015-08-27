import * as errors from '../src'

describe('errors', () => {
  describe('codes', () => {

    it('should compare client error codes', () => {
      errors.badRequest().code.should.eql(400)
      errors.unauthorized().code.should.eql(401)
      errors.forbidden().code.should.eql(403)
      errors.notFound().code.should.eql(404)
      errors.methodNotAllowed().code.should.eql(405)
      errors.notAcceptable().code.should.eql(406)
      errors.proxyAuthenticationRequired().code.should.eql(407)
      errors.requestTimeout().code.should.eql(408)
      errors.conflict().code.should.eql(409)
      errors.gone().code.should.eql(410)
      errors.lengthRequired().code.should.eql(411)
      errors.preconditionFailed().code.should.eql(412)
      errors.requestEntityTooLarge().code.should.eql(413)
      errors.requestURITooLong().code.should.eql(414)
      errors.unsupportedMediaType().code.should.eql(415)
      errors.requestedRangeNotSatisfiable().code.should.eql(416)
      errors.expectationFailed().code.should.eql(417)
    })

    it('should compare server error codes', () => {
      errors.internalServerError().code.should.eql(500)
      errors.notImplemented().code.should.eql(501)
      errors.badGateway().code.should.eql(502)
      errors.serviceUnavailable().code.should.eql(503)
      errors.gatewayTimeout().code.should.eql(504)
      errors.httpVersionNotSupported().code.should.eql(505)
    })

  })
})
