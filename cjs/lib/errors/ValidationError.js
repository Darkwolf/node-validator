const Error = require('./Error')

class ValidationError extends Error {
  constructor(value, message) {
    super(`Invalid value: '${value}'.${message ? ` ${message}` : ''}`, ValidationError.code)
    this.setName(ValidationError.name)
  }
}
ValidationError.name = 'ValidationError'
ValidationError.code = 'invalid-value'

module.exports = ValidationError
