const Helper = require('@darkwolf/helper.cjs')
const errors = require('./errors')
const {
  Error,
  ValidationError
} = errors

class Validator {
  constructor(value, valid) {
    this
      .setValue(value)
      .setValid(valid)
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
    this.valid = Helper.isBoolean(boolean) ? boolean : true
    return this
  }

  is(callback, ...args) {
    if (this.valid) {
      const valid = callback(this.value, ...args)
      if (!valid) {
        this.valid = false
      }
    }
    return this
  }

  validate(callback) {
    const valid = callback(this.value, this.valid, this)
    if (Helper.exists(valid)) {
      this.valid = !!valid
    }
    return this
  }

  has(path) {
    return this.is(Helper.has, path)
  }

  hasIn(path) {
    return this.is(Helper.hasIn, path)
  }

  exists() {
    return this.is(Helper.exists)
  }

  existsIn(path) {
    return this.is(Helper.existsIn, path)
  }

  equals(value) {
    return this.is(Helper.equals, value)
  }

  startsWith(searchValue, position) {
    return this.is(Helper.startsWith, searchValue, position)
  }

  endsWith(searchValue, length) {
    return this.is(Helper.endsWith, searchValue, length)
  }

  includes(searchValue, fromIndex) {
    return this.is(Helper.includes, searchValue, fromIndex)
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

  isKey() {
    return this.is(Helper.isKey)
  }

  isIndex() {
    return this.is(Helper.isIndex)
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
    this.valid = true
    return this
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

  clone() {
    return new Validator(this.value, this.valid)
  }

  [Symbol.toPrimitive](hint) {
    return hint === 'string' ? this.toString() : this.valueOf()
  }
}
Validator.valid = true
Validator.has = Helper.has
Validator.hasIn = Helper.hasIn
Validator.exists = Helper.exists
Validator.existsIn = Helper.existsIn
Validator.equals = Helper.equals
Validator.startsWith = Helper.startsWith
Validator.endsWith = Helper.endsWith
Validator.includes = Helper.includes
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
Validator.isKey = Helper.isKey
Validator.isIndex = Helper.isIndex
Validator.isJSON = Helper.isJSON
Validator.isASCII = Helper.isASCII
Validator.isBase64 = Helper.isBase64
Validator.isIPv4 = Helper.isIPv4
Validator.isIPv6 = Helper.isIPv6
Validator.isURL = Helper.isURL
Validator.isUUID = Helper.isUUID
Validator.isEmail = value => /^[\w-.]+@(?:(?:[a-z\d](?:[a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}$/.test(value)
Validator.isPhoneNumber = value => /^\+[1-9]\d{6,14}$/.test(value)
Validator.from = value => new Validator(value)
Validator.errors = errors
Validator.Error = Error
Validator.ValidationError = ValidationError

module.exports = Validator
