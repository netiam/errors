import _ from 'lodash'

const types = []
const codes = []
const typeTable = {}
const errorTable = {}

export function code({code, type, error}) {
  if (_.includes(codes, code)) {
    throw new Error(`Code already exists: ${code}`)
  }
  if (_.includes(types, type)) {
    throw new Error(`Type already exists: ${type}`)
  }

  codes.push(code)
  types.push(type)

  typeTable[code] = type

  if (error) {
    errorTable[code] = error
  }

  return Object.freeze({
    code,
    type,
    error,
    toString() {
      return type
    }
  })
}

export function getType(code) {
  if (_.isObject(code) && code.type) {
    return code.type
  }

  if (_.isNumber(code) && _.isString(typeTable[code])) {
    return typeTable[code]
  }

  return String(code)
}

export function getError(code) {
  if (_.isObject(code) && code.error) {
    return code.error
  }

  if (_.isNumber(code) && _.isString(errorTable[code])) {
    return errorTable[code]
  }

  return String(code)
}

export const E1000 = code({
  code: 1000,
  type: 'ERROR'
})

export const E2000 = code({
  code: 2000,
  type: 'AUTHENTICATION_ERROR'
})

export const E3000 = code({
  code: 3000,
  type: 'AUTHORIZATION_ERROR'
})

export const E4000 = code({
  code: 4000,
  type: 'OAUTH_ERROR'
})

export const E4001 = code({
  code: 4001,
  type: 'OAUTH_INVALID_REQUEST_ERROR',
  error: 'invalid_request'
})

export const E4002 = code({
  code: 4002,
  type: 'OAUTH_INVALID_CLIENT_ERROR',
  error: 'invalid_client'
})

export const E4003 = code({
  code: 4003,
  type: 'OAUTH_INVALID_GRANT_ERROR',
  error: 'invalid_grant'
})

export const E4004 = code({
  code: 4004,
  type: 'OAUTH_UNAUTHORIZED_CLIENT_ERROR',
  error: 'unauthorized_client'
})

export const E4005 = code({
  code: 4005,
  type: 'OAUTH_UNSUPPORTED_GRANT_TYPE_ERROR',
  error: 'unsupported_grant_type'
})

export const E4006 = code({
  code: 4006,
  type: 'OAUTH_INVALID_SCOPE_ERROR',
  error: 'invalid_scope'
})
