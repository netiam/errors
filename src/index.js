import _ from 'lodash'
import ExtendableError from 'es6-error'
import http from 'http'
import os from 'os'
import types from './types'

/**
 * HTTPError
 * @param {ErrorType}  [type='GENERIC_ERROR']  The Error Type
 * @constructor
 */
export class HTTPError extends ExtendableError {
  constructor(type) {
    super(type.message)
    this.status = type.status
    this.code = type.code
    this.id = type.id
  }

  toJSON() {
    return Object.freeze({
      message: this.message,
      status: this.status,
      code: this.code,
      id: this.id
    })
  }
}
