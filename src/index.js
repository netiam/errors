import ExtendableError from 'es6-error'
import http from 'http'
import os from 'os'
import util from 'util'

/**
 * HTTPError
 * @param {String|Error}  message     Description of error
 * @param {Number}        [code=500]  HTTP status code
 * @param {String}        [status]    The description for status code
 * @param {*}             [data]      Arbitrary data
 * @constructor
 */
export default class HTTPError extends ExtendableError {
  constructor(status = 500,
              code = 1000,
              type = 'HTTPError',
              message = 'Generic HTTP error') {
    super(message)
    this.status = status
    this.code = code
    this.type = type
  }
}

// 4xx
export class BadRequest extends HTTPError {
  constructor(code, type, message) {
    super(400, code, type, message)
  }
}

export class Unauthorized extends HTTPError {
  constructor(code, type, message) {
    super(401, code, type, message)
  }
}

export class Forbidden extends HTTPError {
  constructor(code, type, message) {
    super(403, code, type, message)
  }
}

export class NotFound extends HTTPError {
  constructor(code, type, message) {
    super(404, code, type, message)
  }
}

export class MethodNotAllowed extends HTTPError {
  constructor(code, type, message) {
    super(405, code, type, message)
  }
}

export class NotAcceptable extends HTTPError {
  constructor(code, type, message) {
    super(406, code, type, message)
  }
}

export class ProxyAuthenticationRequired extends HTTPError {
  constructor(code, type, message) {
    super(407, code, type, message)
  }
}

export class RequestTimeout extends HTTPError {
  constructor(code, type, message) {
    super(408, code, type, message)
  }
}

export class Conflict extends HTTPError {
  constructor(code, type, message) {
    super(409, code, type, message)
  }
}

export class Gone extends HTTPError {
  constructor(code, type, message) {
    super(410, code, type, message)
  }
}

export class LengthRequired extends HTTPError {
  constructor(code, type, message) {
    super(411, code, type, message)
  }
}

export class PreconditionFailed extends HTTPError {
  constructor(code, type, message) {
    super(412, code, type, message)
  }
}

export class RequestEntityTooLarge extends HTTPError {
  constructor(code, type, message) {
    super(413, code, type, message)
  }
}

export class RequestURITooLong extends HTTPError {
  constructor(code, type, message) {
    super(414, code, type, message)
  }
}

export class UnsupportedMediaType extends HTTPError {
  constructor(code, type, message) {
    super(415, code, type, message)
  }
}

export class RequestedRangeNotSatisfiable extends HTTPError {
  constructor(code, type, message) {
    super(416, code, type, message)
  }
}

export class ExpectationFailed extends HTTPError {
  constructor(code, type, message) {
    super(417, code, type, message)
  }
}

// 5xx
export class InternalServerError extends HTTPError {
  constructor(code, type, message) {
    super(500, code, type, message)
  }
}

export class NotImplemented extends HTTPError {
  constructor(code, type, message) {
    super(501, code, type, message)
  }
}

export class BadGateway extends HTTPError {
  constructor(code, type, message) {
    super(502, code, type, message)
  }
}

export class ServiceUnavailable extends HTTPError {
  constructor(code, type, message) {
    super(503, code, type, message)
  }
}

export class GatewayTimeout extends HTTPError {
  constructor(code, type, message) {
    super(504, code, type, message)
  }
}

export class HttpVersionNotSupported extends HTTPError {
  constructor(code, type, message) {
    super(505, code, type, message)
  }
}
