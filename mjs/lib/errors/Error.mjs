import CustomError from '@darkwolf/custom-error.mjs'

export default class ValidatorError extends CustomError {
  static name = 'ValidatorError'

  constructor(message, code) {
    super(message, code)
    this.setName(ValidatorError.name)
  }
}
