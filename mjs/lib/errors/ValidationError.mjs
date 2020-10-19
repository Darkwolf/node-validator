import Error from './Error.mjs'

export default class ValidationError extends Error {
  static name = 'ValidationError'
  static code = 'invalid-value'

  constructor(value, message) {
    super(`Invalid value: '${value}'.${message ? ` ${message}` : ''}`, ValidationError.code)
    this.setName(ValidationError.name)
  }
}
