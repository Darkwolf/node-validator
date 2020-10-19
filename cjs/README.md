# Validator
## Install
#### ECMAScript (Node.js v12.x LTS or higher)
`npm i --save @darkwolf/validator.mjs`
#### CommonJS (Node.js v10.x LTS or higher)
`npm i --save @darkwolf/validator.cjs`
## Using
```javascript
// ECMAScript
import Validator, { ValidationError } from '@darkwolf/validator.mjs'

// CommonJS
const Validator = require('@darkwolf/validator.cjs')
const { ValidationError } = Validator

const validation = new Validator('Ave, Darkwolf!')
  .isString() // Equivalent to .is(Validator.isString)
  .validate((valid, value) => {
    if (!valid) {
      throw new ValidationError(value, 'Value must be a string.')
    }
  })
  .is(value => value.startsWith('Ave'))
validation.valid // true
if (!+validation) {
  throw new ValidationError(validation.value, 'Value must start with \'Ave\'.')
}
```
## [API Documentation](https://github.com/Darkwolf/node-validator/blob/master/docs/API.md)
## Contact Me
#### GitHub: [@PavelWolfDark](https://github.com/PavelWolfDark)
#### Telegram: [@PavelWolfDark](https://t.me/PavelWolfDark)
#### Email: [PavelWolfDark@gmail.com](mailto:PavelWolfDark@gmail.com)
