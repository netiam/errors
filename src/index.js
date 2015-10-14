import ExtendableError from 'es6-error'
import http from 'http'
import os from 'os'
import * as codes from './codes'

export const Codes = codes

/**
 * HTTPError
 * @param {Number}        [status=500]                    The description for status code
 * @param {String}        [type='HTTPError']              HTTP status code
 * @param {String|Error}  [message='Generic HTTP error']  Description of error
 * @param {*}             [data=undefined]                Arbitrary data
 * @constructor
 */
export default class HTTPError extends ExtendableError {
  constructor(status = 500,
              type = 'HTTPError',
              message = 'Generic HTTP error',
              data = undefined) {
    if (message instanceof Error) {
      message = err.message
    }
    super(message)
    this.status = status
    this.type = type
    this.data = data
  }

  toString() {
    let str = this.status + ' ' + http.STATUS_CODES[this.status] + os.EOL
      + '  Type: ' + this.type + os.EOL
      + os.EOL
      + this.message

    if (this.data) {
      str += os.EOL
        + os.EOL
        + '  Data:' + os.EOL
        + '  ' + JSON.stringify(this.data)
    }

    return str
  }
}

// 4xx
export class BadRequest extends HTTPError {
  constructor(type, message) {
    super(400, type, message)
  }
}

export class Unauthorized extends HTTPError {
  constructor(type, message) {
    super(401, type, message)
  }
}

export class Forbidden extends HTTPError {
  constructor(type, message) {
    super(403, type, message)
  }
}

export class NotFound extends HTTPError {
  constructor(type, message) {
    super(404, type, message)
  }
}

export class MethodNotAllowed extends HTTPError {
  constructor(type, message) {
    super(405, type, message)
  }
}

export class NotAcceptable extends HTTPError {
  constructor(type, message) {
    super(406, type, message)
  }
}

export class ProxyAuthenticationRequired extends HTTPError {
  constructor(type, message) {
    super(407, type, message)
  }
}

export class RequestTimeout extends HTTPError {
  constructor(type, message) {
    super(408, type, message)
  }
}

export class Conflict extends HTTPError {
  constructor(type, message) {
    super(409, type, message)
  }
}

export class Gone extends HTTPError {
  constructor(type, message) {
    super(410, type, message)
  }
}

export class LengthRequired extends HTTPError {
  constructor(type, message) {
    super(411, type, message)
  }
}

export class PreconditionFailed extends HTTPError {
  constructor(type, message) {
    super(412, type, message)
  }
}

export class RequestEntityTooLarge extends HTTPError {
  constructor(type, message) {
    super(413, type, message)
  }
}

export class RequestURITooLong extends HTTPError {
  constructor(type, message) {
    super(414, type, message)
  }
}

export class UnsupportedMediaType extends HTTPError {
  constructor(type, message) {
    super(415, type, message)
  }
}

export class RequestedRangeNotSatisfiable extends HTTPError {
  constructor(type, message) {
    super(416, type, message)
  }
}

export class ExpectationFailed extends HTTPError {
  constructor(type, message) {
    super(417, type, message)
  }
}

// 5xx
export class InternalServerError extends HTTPError {
  constructor(type, message) {
    super(500, type, message)
  }
}

export class NotImplemented extends HTTPError {
  constructor(type, message) {
    super(501, type, message)
  }
}

export class BadGateway extends HTTPError {
  constructor(type, message) {
    super(502, type, message)
  }
}

export class ServiceUnavailable extends HTTPError {
  constructor(type, message) {
    super(503, type, message)
  }
}

export class GatewayTimeout extends HTTPError {
  constructor(type, message) {
    super(504, type, message)
  }
}

export class HttpVersionNotSupported extends HTTPError {
  constructor(type, message) {
    super(505, type, message)
  }
}
