import assert from 'assert'

const types = {}

export default types

export class ErrorType {
  constructor(message, status, code, id) {
    this.message = message
    this.status = status
    this.code = code
    this.id = id
    register(this)
  }
}

export function register(type) {
  assert.ok(type.message)
  assert.ok(type.status)
  assert.ok(type.code)
  assert.ok(type.id)

  Object.defineProperty(types, type.code, {
    enumerable: true,
    configurable: false,
    writable: false,
    value: type
  })
}

register(new ErrorType('Generic Error', 500, 'GENERIC_ERROR', 1000))
