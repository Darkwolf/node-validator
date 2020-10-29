[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[Function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[CustomError]: https://github.com/Darkwolf/node-custom-error/blob/main/docs/API.md

# API
### class: Validator
#### `static` Validator.valid
* returns: <[boolean][boolean]> Defaults to `true`.

#### `static` Validator.errors
* returns: <[Errors](#class-errors)>

#### `static` Validator.Error
* returns: <[ValidatorError](#class-validatorerror)>

#### `static` Validator.ValidationError
* returns: <[ValidationError](#class-validationerror)>

#### `static` Validator.has(object, path)
* `object` <[Object][Object]>
* `path` <[string][string] | [Array][Array]<[string][string]>> Must have format: `'object.property.name.array[0]'`, `['object', 'property', 'name', 'array[0]']`, `['object.property', 'name.array[0]']` or `'[-1]'`. Path with index `'[-1]'` will validate the last argument of the array, then `'[-2]'` will validate the second last argument. If the negative modulo index is greater than the length of the array, the first argument will be validated.
* returns: <[boolean][boolean]>

#### `static` Validator.exists(value[, path])
* `value` <[any][Object]> If `undefined` or `null` will be return `false`.
* `path` <[string][string] | [Array][Array]<[string][string]>> Must have format: `'object.property.name.array[0]'`, `['object', 'property', 'name', 'array[0]']`, `['object.property', 'name.array[0]']` or `'[-1]'`. Path with index `'[-1]'` will validate the last argument of the array, then `'[-2]'` will validate the second last argument. If the negative modulo index is greater than the length of the array, the first argument will be validated.
* returns: <[boolean][boolean]>

#### `static` Validator.equals(value, other)
* `value` <[any][Object]>
* `other` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.startsWith(string, searchValue[, position])
* `string` <[string][string]>
* `searchValue` <[any][Object]>
* `position` <[number][number]>
* returns: <[boolean][boolean]>

#### `static` Validator.endsWith(string, searchValue[, length])
* `string` <[string][string]>
* `searchValue` <[any][Object]>
* `length` <[number][number]>
* returns: <[boolean][boolean]>

#### `static` Validator.includes(input, searchValue[, fromIndex])
* `input` <[string][string] | [Array][Array]>
* `searchValue` <[any][Object]>
* `fromIndex` <[number][number]>
* returns: <[boolean][boolean]>

#### `static` Validator.isType(value, type)
* `value` <[any][Object]>
* `type` <[string][string]>
* returns: <[boolean][boolean]>

#### `static` Validator.isTag(value, tag)
* `value` <[any][Object]>
* `tag` <[string][string]> Must have format: `[object <Tag>]`.
* returns: <[boolean][boolean]>

#### `static` Validator.isInstance(value, constructor)
* `value` <[any][Object]>
* `constructor` <[Object][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isUndefined(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isPrimitive(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isNull(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isNil(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isObject(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isObjectLike(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isPlainObject(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isFunction(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isAsyncFunction(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isBoolean(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isNumber(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isString(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isSymbol(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isArray(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isBuffer(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isTypedArray(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isRegExp(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isSet(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isMap(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isWeakSet(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isWeakMap(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isPromise(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isDate(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isError(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isFinite(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isFloat(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isInteger(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isSafeInteger()
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isNaN(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isInfinity(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isDecimal(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isPositive(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isNegative(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isNonNegative(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isNonPositive(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isNatural(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isWhole(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isEmpty(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isJSON(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isASCII(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isBase64(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isIPv4(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isIPv6(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isURL(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isUUID(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isEmail(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.isPhoneNumber(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Validator.from(value)
* `value` <[any][Object]>
* returns: <[Validator](#class-validator)>

#### `init` new Validator(value)
* `value` <[any][Object]>
* returns: <[Validator](#class-validator)>

#### validator.valid
* returns: <[boolean][boolean]> Defaults to `true`.

#### validator.value
* returns: <[any][Object]>

#### `get` validator.isValid
Equivalent to <[validator.valid](#validatorvalid)>
* returns: <[boolean][boolean]>

#### validator.setValue(value)
* `value` <[any][Object]>
* returns: <[this](#class-validator)>

#### validator.setValid(boolean)
* `boolean` <[boolean][boolean]>
* returns: <[this](#class-validator)>

#### validator.is(callback[, ...args])
* `callback` <[Function][Function]([any][Object], ...<[any][Object]>>)>
  * `value` <[any][Object]>
  * `...args` <...[any][Object]>
* `...args` <...[any][Object]> The arguments will be passed to the callback function.
* returns: <[this](#class-validator)>

#### validator.validate(callback)
* `callback` <[Function][Function]([boolean][boolean], [any][Object], [this](#class-validator))>
  * `valid` <[boolean][boolean]> Defaults to `true`.
  * `value` <[any][Object]>
  * `validator` <[this](#class-validator)>
* returns: <[this](#class-validator)>

#### validator.has(path)
* `path` <[string][string] | [Array][Array]<[string][string]>> Must have format: `'object.property.name.array[0]'`, `['object', 'property', 'name', 'array[0]']`, `['object.property', 'name.array[0]']` or `'[-1]'`. Path with index `'[-1]'` will validate the last argument of the array, then `'[-2]'` will validate the second last argument. If the negative modulo index is greater than the length of the array, the first argument will be validated.
* returns: <[this](#class-validator)>

#### validator.exists([path])
* `path` <[string][string] | [Array][Array]<[string][string]>> Must have format: `'object.property.name.array[0]'`, `['object', 'property', 'name', 'array[0]']`, `['object.property', 'name.array[0]']` or `'[-1]'`. Path with index `'[-1]'` will validate the last argument of the array, then `'[-2]'` will validate the second last argument. If the negative modulo index is greater than the length of the array, the first argument will be validated.
* returns: <[this](#class-validator)>

#### validator.equals(value)
* `value` <[any][Object]>
* returns: <[this](#class-validator)>

#### validator.startsWith(searchValue[, position])
* `searchValue` <[any][Object]>
* `position` <[number][number]>
* returns: <[this](#class-validator)>

#### validator.endsWith(searchValue[, length])
* `searchValue` <[any][Object]>
* `length` <[number][number]>
* returns: <[this](#class-validator)>

#### validator.includes(searchValue[, fromIndex])
* `searchValue` <[any][Object]>
* `fromIndex` <[number][number]>
* returns: <[this](#class-validator)>

#### validator.isType(type)
* `type` <[string][string]>
* returns: <[this](#class-validator)>

#### validator.isTag(tag)
* `tag` <[string][string]> Must have format: `[object <Tag>]`.
* returns: <[this](#class-validator)>

#### validator.isInstance(constructor)
* `constructor` <[Object][Object]>
* returns: <[this](#class-validator)>

#### validator.isUndefined()
* returns: <[this](#class-validator)>

#### validator.isPrimitive()
* returns: <[this](#class-validator)>

#### validator.isNull()
* returns: <[this](#class-validator)>

#### validator.isNil()
* returns: <[this](#class-validator)>

#### validator.isObject()
* returns: <[this](#class-validator)>

#### validator.isObjectLike()
* returns: <[this](#class-validator)>

#### validator.isPlainObject()
* returns: <[this](#class-validator)>

#### validator.isFunction()
* returns: <[this](#class-validator)>

#### validator.isAsyncFunction()
* returns: <[this](#class-validator)>

#### validator.isBoolean()
* returns: <[this](#class-validator)>

#### validator.isNumber()
* returns: <[this](#class-validator)>

#### validator.isString()
* returns: <[this](#class-validator)>

#### validator.isSymbol()
* returns: <[this](#class-validator)>

#### validator.isArray()
* returns: <[this](#class-validator)>

#### validator.isBuffer()
* returns: <[this](#class-validator)>

#### validator.isTypedArray()
* returns: <[this](#class-validator)>

#### validator.isRegExp()
* returns: <[this](#class-validator)>

#### validator.isSet()
* returns: <[this](#class-validator)>

#### validator.isMap()
* returns: <[this](#class-validator)>

#### validator.isWeakSet()
* returns: <[this](#class-validator)>

#### validator.isWeakMap()
* returns: <[this](#class-validator)>

#### validator.isPromise()
* returns: <[this](#class-validator)>

#### validator.isDate()
* returns: <[this](#class-validator)>

#### validator.isError()
* returns: <[this](#class-validator)>

#### validator.isFinite()
* returns: <[this](#class-validator)>

#### validator.isFloat()
* returns: <[this](#class-validator)>

#### validator.isInteger()
* returns: <[this](#class-validator)>

#### validator.isSafeInteger()
* returns: <[this](#class-validator)>

#### validator.isNaN()
* returns: <[this](#class-validator)>

#### validator.isInfinity()
* returns: <[this](#class-validator)>

#### validator.isDecimal()
* returns: <[this](#class-validator)>

#### validator.isPositive()
* returns: <[this](#class-validator)>

#### validator.isNegative()
* returns: <[this](#class-validator)>

#### validator.isNonNegative()
* returns: <[this](#class-validator)>

#### validator.isNonPositive()
* returns: <[this](#class-validator)>

#### validator.isNatural()
* returns: <[this](#class-validator)>

#### validator.isWhole()
* returns: <[this](#class-validator)>

#### validator.isEmpty()
* returns: <[this](#class-validator)>

#### validator.isJSON()
* returns: <[this](#class-validator)>

#### validator.isASCII()
* returns: <[this](#class-validator)>

#### validator.isBase64()
* returns: <[this](#class-validator)>

#### validator.isIPv4()
* returns: <[this](#class-validator)>

#### validator.isIPv6()
* returns: <[this](#class-validator)>

#### validator.isURL()
* returns: <[this](#class-validator)>

#### validate.isUUID()
* returns: <[this](#class-validator)>

#### validator.isEmail()
* returns: <[this](#class-validator)>

#### validator.isPhoneNumber()
* returns: <[this](#class-validator)>

#### validator.reset()
* returns: <[this](#class-validator)>

#### validator.clone()
* returns: <[Validator](#class-validator)>

#### validator.toString()
* returns: <[string][string]>

#### validator.valueOf()
* returns: <[boolean][boolean]>

#### validator.toJSON()
* returns: <[boolean][boolean]>

#### validator\[Symbol.toPrimitive](hint)
* `hint` <[string][string]> Must be `'string'`, `'number'` or `'default'`.
* returns: <[string][string] | [boolean][boolean]>

### class: Errors
#### `static` Errors.Error
* returns: <[ValidatorError](#class-validatorerror)>

#### `static` Errors.ValidationError
* returns: <[ValidationError](#class-validationerror)>

### class: ValidatorError
* extends: <[CustomError][CustomError]>

#### `static` ValidatorError.name
* returns: <[string][string]> Defaults to `'ValidatorError'`.

### class: ValidationError
* extends: <[ValidatorError](#class-validatorerror)>

#### `static` ValidationError.name
* returns: <[string][string]> Defaults to `'ValidationError'`.

#### `static` ValidationError.code
* returns: <[string][string]> Defaults to `'invalid-value'`.
