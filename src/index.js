import http from 'http'
import os from 'os'
import util from 'util'

/**
 * HTTPError
 * @param {String}  message     Description of error
 * @param {Number}  [code=500]  HTTP status code
 * @param {String}  [status]    The description for status code
 * @param {*}       [data]      Arbitrary data
 * @constructor
 */
function HTTPError(message, code, status, data) {
  if (message instanceof Error) {
    this.message = message.message
  } else {
    this.message = message
  }

  this.code = code || 500
  this.status = status
  this.data = data

  Error.captureStackTrace(this, this.constructor)

  const modifiedStack = this.stack.split(os.EOL)
  modifiedStack.splice(1, 1)
  this.stack = modifiedStack.join(os.EOL)
}

util.inherits(HTTPError, Error)

HTTPError.prototype.toString = function() {
  return this.name + ': ' + this.message
}

export default HTTPError

export const Codes = {
  E1000: {
    code: 1000,
    message: 'User Error'
  },
  E1001: {
    code: 1001,
    message: 'A user with this identifier already exists'
  },
  E1002: {
    code: 1002,
    message: 'Either the user\'s identifier or credential is invalid'
  },
  E1003: {
    code: 1003,
    message: 'A user with this identifier does not exist'
  },

  E2000: {
    code: 2000,
    message: 'Client Error'
  },
  E2001: {
    code: 2001,
    message: 'Missing header "api-client-id"'
  },
  E2002: {
    code: 2002,
    message: 'Invalid Client ID'
  },

  E3000: {
    code: 3000,
    message: 'REST Error'
  },
  E3001: {
    code: 3001,
    message: 'Invalid filter string'
  },
  E3002: {
    code: 3002,
    message: 'Validation Error'
  },

  E4000: {
    code: 4000,
    message: 'OAuth2 Error'
  },
  E4001: {
    code: 4001,
    message: 'Invalid Request'
  },
  E4002: {
    code: 4002,
    message: 'Unauthorized Client'
  },
  E4003: {
    code: 4003,
    message: 'Access Denied'
  },
  E4004: {
    code: 4004,
    message: 'Unsupported Response Type'
  },
  E4005: {
    code: 4005,
    message: 'Invalid Scope'
  },
  E4006: {
    code: 4006,
    message: 'Server Error'
  },
  E4007: {
    code: 4007,
    message: 'Temporary Unavailable'
  },
  E4008: {
    code: 4008,
    message: 'This grant_type is not supported yet'
  },
  E4009: {
    code: 4009,
    message: 'The response_type must be set to "token"'
  },
  E4010: {
    code: 4010,
    message: 'The provided credentials are invalid'
  },
  E4011: {
    code: 4011,
    message: 'The grant_type parameter must be set to "refresh_token"'
  },
  E4012: {
    code: 4012,
    message: 'Cannot find token'
  },
  E4013: {
    code: 4013,
    message: 'Unauthorized invocation attempt'
  },
  E4014: {
    code: 4014,
    message: 'Invalid token_type'
  }
}

// 4xx
export function badRequest(message = undefined, data = undefined) {
  return new HTTPError(message, 400, http.STATUS_CODES[400], data)
}

export function unauthorized(message = undefined, data = undefined) {
  return new HTTPError(message, 401, http.STATUS_CODES[401], data)
}

export function forbidden(message = undefined, data = undefined) {
  return new HTTPError(message, 403, http.STATUS_CODES[403], data)
}

export function notFound(message = undefined, data = undefined) {
  return new HTTPError(message, 404, http.STATUS_CODES[404], data)
}

export function methodNotAllowed(message = undefined, data = undefined) {
  return new HTTPError(message, 405, http.STATUS_CODES[405], data)
}

export function notAcceptable(message = undefined, data = undefined) {
  return new HTTPError(message, 406, http.STATUS_CODES[406], data)
}

export function proxyAuthenticationRequired(message = undefined, data = undefined) {
  return new HTTPError(message, 407, http.STATUS_CODES[407], data)
}

export function requestTimeout(message = undefined, data = undefined) {
  return new HTTPError(message, 408, http.STATUS_CODES[408], data)
}

export function conflict(message = undefined, data = undefined) {
  return new HTTPError(message, 409, http.STATUS_CODES[409], data)
}

export function gone(message = undefined, data = undefined) {
  return new HTTPError(message, 410, http.STATUS_CODES[410], data)
}

export function lengthRequired(message = undefined, data = undefined) {
  return new HTTPError(message, 411, http.STATUS_CODES[411], data)
}

export function preconditionFailed(message = undefined, data = undefined) {
  return new HTTPError(message, 412, http.STATUS_CODES[412], data)
}

export function requestEntityTooLarge(message = undefined, data = undefined) {
  return new HTTPError(message, 413, http.STATUS_CODES[413], data)
}

export function requestURITooLong(message = undefined, data = undefined) {
  return new HTTPError(message, 414, http.STATUS_CODES[414], data)
}

export function unsupportedMediaType(message = undefined, data = undefined) {
  return new HTTPError(message, 415, http.STATUS_CODES[415], data)
}

export function requestedRangeNotSatisfiable(message = undefined, data = undefined) {
  return new HTTPError(message, 416, http.STATUS_CODES[416], data)
}

export function expectationFailed(message = undefined, data = undefined) {
  return new HTTPError(message, 417, http.STATUS_CODES[417], data)
}

// 5xx
export function internalServerError(message = undefined, data = undefined) {
  return new HTTPError(message, 500, http.STATUS_CODES[500], data)
}

export function notImplemented(message = undefined, data = undefined) {
  return new HTTPError(message, 501, http.STATUS_CODES[501], data)
}

export function badGateway(message = undefined, data = undefined) {
  return new HTTPError(message, 502, http.STATUS_CODES[502], data)
}

export function serviceUnavailable(message = undefined, data = undefined) {
  return new HTTPError(message, 503, http.STATUS_CODES[503], data)
}

export function gatewayTimeout(message = undefined, data = undefined) {
  return new HTTPError(message, 504, http.STATUS_CODES[504], data)
}

export function httpVersionNotSupported(message = undefined, data = undefined) {
  return new HTTPError(message, 505, http.STATUS_CODES[505], data)
}
