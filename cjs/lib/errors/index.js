const Error = require('./Error')
const ValidationError = require('./ValidationError')

class Errors {}
Errors.Error = Error
Errors.ValidationError = ValidationError

module.exports = Errors
