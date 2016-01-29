import _ from 'lodash'
import ExtendableError from 'es6-error'
import http from 'http'
import os from 'os'
import * as codes from './codes'

export const Codes = codes

/**
 * HTTPError
 * @param {String}        [message='']        Error description
 * @param {Number}        [status=500]        HTTP status code
 * @param {String}        [code=codes.E1000]  The error type
 * @param {*}             [data=undefined]    Arbitrary data
 * @constructor
 */
export class HTTPError extends ExtendableError {
  constructor({message = '', status = 500, code = codes.E1000.type, data} = {}) {
    super(message)
    this.status = status
    this.code = code
    this.data = data
  }

  toJSON() {
    return Object.freeze(
      Object.assign(
        {name: this.name},
        _.fromPairs(
          _.filter(
            _.map(
              _.pick(this, Object.getOwnPropertyNames(this)),
              (value, key) => {
                value = value && _.isFunction(value.toString) ? value.toString() : value
                return [key, value]
              }),
            node => !_.isNil(node[1])
          )
        )
      ))
  }
}

// 4xx
export class BadRequest extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {} = {}) {
    super({
      status: 400,
      message,
      code,
      data
    })
  }
}

export class Unauthorized extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 401,
      message,
      code,
      data
    })
  }
}

export class Forbidden extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 403,
      message,
      code,
      data
    })
  }
}

export class NotFound extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 404,
      message,
      code,
      data
    })
  }
}

export class MethodNotAllowed extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 405,
      message,
      code,
      data
    })
  }
}

export class NotAcceptable extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 406,
      message,
      code,
      data
    })
  }
}

export class ProxyAuthenticationRequired extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 407,
      message,
      code,
      data
    })
  }
}

export class RequestTimeout extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 408,
      message,
      code,
      data
    })
  }
}

export class Conflict extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 409,
      message,
      code,
      data
    })
  }
}

export class Gone extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 410,
      message,
      code,
      data
    })
  }
}

export class LengthRequired extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 411,
      message,
      code,
      data
    })
  }
}

export class PreconditionFailed extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 412,
      message,
      code,
      data
    })
  }
}

export class RequestEntityTooLarge extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 413,
      message,
      code,
      data
    })
  }
}

export class RequestURITooLong extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 414,
      message,
      code,
      data
    })
  }
}

export class UnsupportedMediaType extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 415,
      message,
      code,
      data
    })
  }
}

export class RequestedRangeNotSatisfiable extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 416,
      message,
      code,
      data
    })
  }
}

export class ExpectationFailed extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 417,
      message,
      code,
      data
    })
  }
}

// 5xx
export class InternalServerError extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 500,
      message,
      code,
      data
    })
  }
}

export class NotImplemented extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 501,
      message,
      code,
      data
    })
  }
}

export class BadGateway extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 502,
      message,
      code,
      data
    })
  }
}

export class ServiceUnavailable extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 503,
      message,
      code,
      data
    })
  }
}

export class GatewayTimeout extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 504,
      message,
      code,
      data
    })
  }
}

export class HttpVersionNotSupported extends HTTPError {
  constructor({message = '', code = codes.E1000.type, data = undefined} = {}) {
    super({
      status: 505,
      message,
      code,
      data
    })
  }
}

// OAuth
export class OAuthError extends HTTPError {
  constructor({status, code, description, uri, state, data}) {
    super({
      status,
      message: description,
      code,
      data
    })
    this.error = Code.getError(code)
    this.error_description = description
    this.error_uri = uri
    this.state = state
  }
}
