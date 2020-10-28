import Helper from '@darkwolf/helper.mjs'
import errors, {
  Error,
  ValidationError
} from './errors/index.mjs'

export {
  errors,
  Error,
  ValidationError
}

export default class Validator {
  static valid = true
  static has = Helper.has
  static exists = Helper.exists
  static equals = Helper.equals
  static isType = Helper.isType
  static isTag = Helper.isTag
  static isInstance = Helper.isInstance
  static isUndefined = Helper.isUndefined
  static isPrimitive = Helper.isPrimitive
  static isNull = Helper.isNull
  static isNil = Helper.isNil
  static isObject = Helper.isObject
  static isObjectLike = Helper.isObjectLike
  static isPlainObject = Helper.isPlainObject
  static isFunction = Helper.isFunction
  static isAsyncFunction = Helper.isAsyncFunction
  static isBoolean = Helper.isBoolean
  static isNumber = Helper.isNumber
  static isString = Helper.isString
  static isSymbol = Helper.isSymbol
  static isArray = Helper.isArray
  static isBuffer = Helper.isBuffer
  static isTypedArray = Helper.isTypedArray
  static isRegExp = Helper.isRegExp
  static isSet = Helper.isSet
  static isMap = Helper.isMap
  static isWeakSet = Helper.isWeakSet
  static isWeakMap = Helper.isWeakMap
  static isPromise = Helper.isPromise
  static isDate = Helper.isDate
  static isError = Helper.isError
  static isFinite = Helper.isFinite
  static isFloat = Helper.isFloat
  static isInteger = Helper.isInteger
  static isSafeInteger = Helper.isSafeInteger
  static isNaN = Helper.isNaN
  static isInfinity = Helper.isInfinity
  static isDecimal = Helper.isDecimal
  static isPositive = Helper.isPositive
  static isNegative = Helper.isNegative
  static isNonNegative = Helper.isNonNegative
  static isNonPositive = Helper.isNonPositive
  static isNatural = Helper.isNatural
  static isWhole = Helper.isWhole
  static isEmpty = Helper.isEmpty
  static isJSON = Helper.isJSON
  static isASCII = Helper.isASCII
  static isBase64 = Helper.isBase64
  static isIPv4 = Helper.isIPv4
  static isIPv6 = Helper.isIPv6
  static isURL = Helper.isURL
  static isUUID = Helper.isUUID
  static errors = errors
  static Error = Error
  static ValidationError = ValidationError

  static isEmail(value) {
    return /^[\w-.]+@(?:(?:[a-z\d](?:[a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}$/.test(value)
  }

  static isPhoneNumber(value) {
    return /^\+[1-9]\d{6,14}$/.test(value)
  }

  static from(value) {
    return new Validator(value)
  }

  constructor(value) {
    this
      .reset()
      .setValue(value)
  }

  get isValid() {
    return this.valid
  }

  get [Symbol.toStringTag]() {
    return 'Validator'
  }

  setValue(value) {
    this.value = value
    return this
  }

  setValid(boolean) {
    this.valid = boolean
    return this
  }

  is(callback, ...args) {
    if (this.valid) {
      this.setValid(this.valid && !!(Helper.isFunction(callback) ? callback(this.value, ...args) : callback))
    }
    return this
  }

  validate(callback) {
    const valid = callback(this.valid, this.value, this)
    if (Helper.exists(valid)) {
      this.setValid(!!valid)
    }
    return this
  }

  has(path) {
    return this.is(Helper.has, path)
  }

  exists(path) {
    return this.is(Helper.exists, path)
  }

  equals(value) {
    return this.is(Helper.equals, value)
  }

  isType(type) {
    return this.is(Helper.isType, type)
  }

  isTag(tag) {
    return this.is(Helper.isTag, tag)
  }

  isInstance(constructor) {
    return this.is(Helper.isInstance, constructor)
  }

  isUndefined() {
    return this.is(Helper.isUndefined)
  }

  isPrimitive() {
    return this.is(Helper.isPrimitive)
  }

  isNull() {
    return this.is(Helper.isNull)
  }

  isNil() {
    return this.is(Helper.isNil)
  }

  isObject() {
    return this.is(Helper.isObject)
  }

  isObjectLike() {
    return this.is(Helper.isObjectLike)
  }

  isPlainObject() {
    return this.is(Helper.isPlainObject)
  }

  isFunction() {
    return this.is(Helper.isFunction)
  }

  isAsyncFunction() {
    return this.is(Helper.isAsyncFunction)
  }

  isBoolean() {
    return this.is(Helper.isBoolean)
  }

  isNumber() {
    return this.is(Helper.isNumber)
  }

  isString() {
    return this.is(Helper.isString)
  }

  isSymbol() {
    return this.is(Helper.isSymbol)
  }

  isArray() {
    return this.is(Helper.isArray)
  }

  isBuffer() {
    return this.is(Helper.isBuffer)
  }

  isTypedArray() {
    return this.is(Helper.isTypedArray)
  }

  isRegExp() {
    return this.is(Helper.isRegExp)
  }

  isSet() {
    return this.is(Helper.isSet)
  }

  isMap() {
    return this.is(Helper.isMap)
  }

  isWeakSet() {
    return this.is(Helper.isWeakSet)
  }

  isWeakMap() {
    return this.is(Helper.isWeakMap)
  }

  isPromise() {
    return this.is(Helper.isPromise)
  }

  isDate() {
    return this.is(Helper.isDate)
  }

  isError() {
    return this.is(Helper.isError)
  }

  isFinite() {
    return this.is(Helper.isFinite)
  }

  isFloat() {
    return this.is(Helper.isFloat)
  }

  isInteger() {
    return this.is(Helper.isInteger)
  }

  isSafeInteger() {
    return this.is(Helper.isSafeInteger)
  }

  isNaN() {
    return this.is(Helper.isNaN)
  }

  isInfinity() {
    return this.is(Helper.isInfinity)
  }

  isDecimal() {
    return this.is(Helper.isDecimal)
  }

  isPositive() {
    return this.is(Helper.isPositive)
  }

  isNegative() {
    return this.is(Helper.isNegative)
  }

  isNonNegative() {
    return this.is(Helper.isNonNegative)
  }

  isNonPositive() {
    return this.is(Helper.isNonPositive)
  }

  isNatural() {
    return this.is(Helper.isNatural)
  }

  isWhole() {
    return this.is(Helper.isWhole)
  }

  isEmpty() {
    return this.is(Helper.isEmpty)
  }

  isJSON() {
    return this.is(Helper.isJSON)
  }

  isASCII() {
    return this.is(Helper.isASCII)
  }

  isBase64() {
    return this.is(Helper.isBase64)
  }

  isIPv4() {
    return this.is(Helper.isIPv4)
  }

  isIPv6() {
    return this.is(Helper.isIPv6)
  }

  isURL() {
    return this.is(Helper.isURL)
  }

  isUUID() {
    return this.is(Helper.isUUID)
  }

  isEmail() {
    return this.is(Validator.isEmail)
  }

  isPhoneNumber() {
    return this.is(Validator.isPhoneNumber)
  }

  reset() {
    return this.setValid(Validator.valid)
  }

  clone() {
    return new Validator(this.value).setValid(this.valid)
  }

  toString() {
    return `${this.valid}`
  }

  valueOf() {
    return this.valid
  }

  toJSON() {
    return this.valid
  }

  [Symbol.toPrimitive](hint) {
    return hint === 'string' ? this.toString() : this.valueOf()
  }
}
