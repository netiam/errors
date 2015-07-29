/**
 * HTTPError
 * @param {String} message
 * @param {Number} [code=500]
 * @param {String} [status]
 * @param {*} [data]
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
}

HTTPError.prototype = new Error()

export default HTTPError

// 4xx
export function badRequest(message = undefined, data = undefined) {
  return new HTTPError(message, 400, 'Bad Request', data)
}

export function unauthorized(message = undefined, data = undefined) {
  return new HTTPError(message, 401, 'Unauthorized', data)
}

export function forbidden(message = undefined, data = undefined) {
  return new HTTPError(message, 403, 'Forbidden', data)
}

export function notFound(message = undefined, data = undefined) {
  return new HTTPError(message, 404, 'Not Found', data)
}

export function methodNotAllowed(message = undefined, data = undefined) {
  return new HTTPError(message, 405, 'Method Not Allowed', data)
}

export function notAcceptable(message = undefined, data = undefined) {
  return new HTTPError(message, 406, 'Not Acceptable', data)
}

export function proxyAuthenticationRequired(message = undefined, data = undefined) {
  return new HTTPError(message, 407, 'Proxy Authentication Required', data)
}

export function requestTimeout(message = undefined, data = undefined) {
  return new HTTPError(message, 408, 'Request Timeout', data)
}

export function conflict(message = undefined, data = undefined) {
  return new HTTPError(message, 409, 'Conflict', data)
}

export function gone(message = undefined, data = undefined) {
  return new HTTPError(message, 410, 'Gone', data)
}

export function lengthRequired(message = undefined, data = undefined) {
  return new HTTPError(message, 411, 'Length Required', data)
}

export function preconditionFailed(message = undefined, data = undefined) {
  return new HTTPError(message, 412, 'Precondition Failed', data)
}

export function requestEntityTooLarge(message = undefined, data = undefined) {
  return new HTTPError(message, 413, 'Request Entity Too Large', data)
}

export function requestURITooLong(message = undefined, data = undefined) {
  return new HTTPError(message, 414, 'Request URI Too Long', data)
}

export function unsupportedMediaType(message = undefined, data = undefined) {
  return new HTTPError(message, 415, 'Unsupported Media Type', data)
}

export function requestedRangeNotSatisfiable(message = undefined, data = undefined) {
  return new HTTPError(message, 416, 'Requested Range Not Satisfiable', data)
}

export function expectationFailed(message = undefined, data = undefined) {
  return new HTTPError(message, 417, 'Expectation Failed', data)
}

// 5xx
export function internalServerError(message = undefined, data = undefined) {
  return new HTTPError(message, 500, 'Internal Server Error', data)
}

export function notImplemnted(message = undefined, data = undefined) {
  return new HTTPError(message, 501, 'Not Implemented', data)
}

export function badGateway(message = undefined, data = undefined) {
  return new HTTPError(message, 502, 'Bad Gateway', data)
}

export function serviceUnavailable(message = undefined, data = undefined) {
  return new HTTPError(message, 503, 'Service Unavailable', data)
}

export function gatewayTimeout(message = undefined, data = undefined) {
  return new HTTPError(message, 504, 'Gateway Timeout', data)
}

export function httpVersionNotSupported(message = undefined, data = undefined) {
  return new HTTPError(message, 505, 'HTTP Version Not Supported', data)
}
