<h1>Ontime Validator</h1>

The library is used to validate any data. It has full async/await support. For instance, you are able to validate any form data.

<h2>How it works</h2>

<h3>Default usage</h3>

```javascript
import axios from 'axios';
import { Validator } from 'ontime-validator';

// define validator rules
const rules = {
  name: {
    req: true,
    maxLen: 50
  },
  email: {
    req: true,
    email: true,
    
    // Define own validation rules
    fn: async (value) => {
      try {
        await axios.get('/api/check-email/' + value);

        // Server returns as 200 status code that means email is used
        // throw exception
        throw new Error('Email is used. Please choose another.')
      } catch (err) {
        // Server returns us 404 status code that means email is not used
        // and all ok
      }
    }
  }
};

// define data
const dataToValidate = {
  name: 'John Snow',
  email: 'john.snow@gmail.com'
};

// create validator instance
const validator = new Validator(rules);

// First example, check correct data 
try {
  await validator.validate(dataToValidate);
} catch (err) {
  console.error(err);
}

// replace name as empty string
dataToValidate.name = '';

// Second example, check incorrect data 
try {
  await validator.validate(dataToValidate);
} catch (err) {
  console.error(err); // exception that name is required
}
```

<h3>Remove validation</h3>

```javascript
import { Validator } from 'ontime-validator';

// define validator rules
const rules = {
  name: {
    req: true,
    maxLen: 50
  },
  email: {
    req: true,
    email: true
  }
};

// define data
const dataToValidate = {
  name: 'John Snow',
  email: 'john.snow@gmail.com'
};

// create validator instance
const validator = new Validator(rules);

// First example, check correct data 
try {
  await validator.validate(dataToValidate);
} catch (err) {
  console.error(err);
}

// replace name as empty string
dataToValidate.name = '';

// Second example, check incorrect data 
try {
  await validator.validate(dataToValidate);
} catch (err) {
  console.error(err); // exception that name is required
}
```

<h2>Language support</h2>

Validator has support to translate mistake keys to your language. By default, error contains only English error keys. You are able to register your own translate function inside Validator and inside the function, you are able to use any languages engine which you want. See below simple example.

<strong>Translation keys</strong>

You are able to add these keys and translations for them to your translation engine.

```javascript
const errors: any = {
  req: 'validator.req',
  email: 'validator.email',
  url: 'validator.url',
  max: 'validator.max',
  min: 'validator.min',
  maxLen: 'validator.maxLen',
  minLen: 'validator.minLen',
  confirm: 'validator.confirm',
  regExp: 'validator.regExp',
  gt: 'validator.gt',
  ge: 'validator.ge',
  lt: 'validator.lt',
  le: 'validator.le',
  list: 'validator.list',
  listSelect: 'validator.listSelect',
  alphaNumeric: 'validator.alphaNumeric',
  all: 'validator.all'
};
```

<strong>Example</strong>

```javascript
import i18next from 'i18next';
import { Validator } from 'ontime-validator';

Validate.setGettext((...args) => i18next.t(...args));
```