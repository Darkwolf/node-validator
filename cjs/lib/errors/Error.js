const CustomError = require('@darkwolf/custom-error.cjs')

class ValidatorError extends CustomError {
  constructor(message, code) {
    super(message, code)
    this.setName(ValidatorError.name)
  }
}
ValidatorError.name = 'ValidatorError'

module.exports = ValidatorError
