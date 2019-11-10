import { Validator } from './Validator';
import { IValidators, IRule, IRules } from './interfaces';

const createValidator: Function = (rules: IRules): Validator => {
  return new Validator(rules);
}

export {
  IValidators, IRule, IRules,
  Validator
};

export default createValidator;
