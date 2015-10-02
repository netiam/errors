import {
  // 4xx
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
  MethodNotAllowed,
  NotAcceptable,
  ProxyAuthenticationRequired,
  RequestTimeout,
  Conflict,
  Gone,
  LengthRequired,
  PreconditionFailed,
  RequestEntityTooLarge,
  RequestURITooLong,
  UnsupportedMediaType,
  RequestedRangeNotSatisfiable,
  ExpectationFailed,
  // 5xx
  InternalServerError,
  NotImplemented,
  BadGateway,
  ServiceUnavailable,
  GatewayTimeout,
  HttpVersionNotSupported
} from '../src'

describe('errors', () => {
  describe('codes', () => {

    it('should compare client error codes', () => {
      new BadRequest().status.should.eql(400)
      new Unauthorized().status.should.eql(401)
      new Forbidden().status.should.eql(403)
      new NotFound().status.should.eql(404)
      new MethodNotAllowed().status.should.eql(405)
      new NotAcceptable().status.should.eql(406)
      new ProxyAuthenticationRequired().status.should.eql(407)
      new RequestTimeout().status.should.eql(408)
      new Conflict().status.should.eql(409)
      new Gone().status.should.eql(410)
      new LengthRequired().status.should.eql(411)
      new PreconditionFailed().status.should.eql(412)
      new RequestEntityTooLarge().status.should.eql(413)
      new RequestURITooLong().status.should.eql(414)
      new UnsupportedMediaType().status.should.eql(415)
      new RequestedRangeNotSatisfiable().status.should.eql(416)
      new ExpectationFailed().status.should.eql(417)
    })

    it('should compare server error codes', () => {
      new InternalServerError().status.should.eql(500)
      new NotImplemented().status.should.eql(501)
      new BadGateway().status.should.eql(502)
      new ServiceUnavailable().status.should.eql(503)
      new GatewayTimeout().status.should.eql(504)
      new HttpVersionNotSupported().status.should.eql(505)
    })

  })
})
