interface IValidators {
  req: Function;
  email: Function;
  url: Function;
  max: Function;
  min: Function;
  max_len: Function;
  maxLen: Function;
  min_len: Function;
  minLen: Function;
  confirm: Function;
  reg_exp: Function;
  regExp: Function;
  gt: Function;
  ge: Function;
  lt: Function;
  le: Function;
  list: Function;
  listSelect: Function;
  alphaNumeric: Function;
  all: Function;
  [index: string]: Function;
}

interface IRule {
  [key: string]: boolean | number | string | Function;
}

interface IRules {
  [key: string]: IRule
}

export {
  IValidators,
  IRule,
  IRules
};
