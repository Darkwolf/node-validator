const Helper = require('@darkwolf/helper.cjs')
const errors = require('./errors')
const {
  Error,
  ValidationError
} = errors

class Validator {
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
Validator.valid = true
Validator.has = Helper.has
Validator.exists = Helper.exists
Validator.equals = Helper.equals
Validator.isType = Helper.isType
Validator.isTag = Helper.isTag
Validator.isInstance = Helper.isInstance
Validator.isUndefined = Helper.isUndefined
Validator.isPrimitive = Helper.isPrimitive
Validator.isNull = Helper.isNull
Validator.isNil = Helper.isNil
Validator.isObject = Helper.isObject
Validator.isObjectLike = Helper.isObjectLike
Validator.isPlainObject = Helper.isPlainObject
Validator.isFunction = Helper.isFunction
Validator.isAsyncFunction = Helper.isAsyncFunction
Validator.isBoolean = Helper.isBoolean
Validator.isNumber = Helper.isNumber
Validator.isString = Helper.isString
Validator.isSymbol = Helper.isSymbol
Validator.isArray = Helper.isArray
Validator.isBuffer = Helper.isBuffer
Validator.isTypedArray = Helper.isTypedArray
Validator.isRegExp = Helper.isRegExp
Validator.isSet = Helper.isSet
Validator.isMap = Helper.isMap
Validator.isWeakSet = Helper.isWeakSet
Validator.isWeakMap = Helper.isWeakMap
Validator.isPromise = Helper.isPromise
Validator.isDate = Helper.isDate
Validator.isError = Helper.isError
Validator.isFinite = Helper.isFinite
Validator.isFloat = Helper.isFloat
Validator.isInteger = Helper.isInteger
Validator.isSafeInteger = Helper.isSafeInteger
Validator.isNaN = Helper.isNaN
Validator.isInfinity = Helper.isInfinity
Validator.isDecimal = Helper.isDecimal
Validator.isPositive = Helper.isPositive
Validator.isNegative = Helper.isNegative
Validator.isNonNegative = Helper.isNonNegative
Validator.isNonPositive = Helper.isNonPositive
Validator.isNatural = Helper.isNatural
Validator.isWhole = Helper.isWhole
Validator.isEmpty = Helper.isEmpty
Validator.isJSON = Helper.isJSON
Validator.isASCII = Helper.isASCII
Validator.isBase64 = Helper.isBase64
Validator.isEmail = value => /^[\w-.]+@(?:(?:[a-z\d](?:[a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}$/.test(value)
Validator.isPhoneNumber = value => /^\+[1-9]\d{6,14}$/.test(value)
Validator.from = value => new Validator(value)
Validator.errors = errors
Validator.Error = Error
Validator.ValidationError = ValidationError

module.exports = Validator