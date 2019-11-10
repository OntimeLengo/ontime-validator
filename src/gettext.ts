const translation: any = {
  'validator.req': 'This field is required',
  'validator.email': 'The value is not a valid email',
  'validator.url': 'URL is not valid',
  'validator.max': 'The value of more than {{ max }}',
  'validator.min': 'The value less than {{ min }}',
  'validator.maxLen': 'The value is longer than {{ max }} characters',
  'validator.minLen': 'The value is less than {{ min }} characters',
  'validator.confirm': 'Values do not match',
  'validator.regExp': 'The expression is not correct',
  'validator.gt': 'The value is less than or equal to {{ gt }}',
  'validator.ge': 'The value is less than {{ ge }}',
  'validator.lt': 'The value greater than or equal to {{ lt }}',
  'validator.le': 'The value of more than {{ le }}',
  'validator.list': 'Please select value',
  'validator.listSelect': 'Please select value',
  'validator.alphabet': 'You can only enter letters and numbers',
  'validator.all': 'An invalid character'
};

function format(s: string, c: any = {}, formatter: RegExp = /{{\s?(\w+)\s?}}/g): string {
  return s.replace(formatter, (m: any, p: any) => c[p]);
}

let defGettext: Function = (key: string, options: any = {}): string => {
  return format(translation[key], options);
};

function gettext(...args: any[]): string {
  return defGettext(...args);
}

function setGettext(fn: Function): void {
  defGettext = fn;
}

export {
  gettext,
  setGettext
};
