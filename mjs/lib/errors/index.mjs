import Error from './Error.mjs'
import ValidationError from './ValidationError.mjs'

export {
  Error,
  ValidationError
}

export default class Errors {
  static Error = Error
  static ValidationError = ValidationError
}
