import { validators, registerValidator, errors } from './validators';
import { setGettext } from './gettext';

class Validator {

  static setGettext(fn: Function): void {
    setGettext(fn);
  }

  static getValidators(): any {
    return validators;
  }

  static registerValidator(key: string, value: Function): void {
    registerValidator(key, value);
  }

  static getDefaultErrors(): any {
    return errors;
  }

  private _allRules: any;
  private _allRulesKeys: any[string];

  constructor(allRules: any) {
    this._allRules = allRules;
    this._allRulesKeys = Object.keys(allRules);
  }

  async validate(data: any = {}, onlyOne?: string): Promise<boolean> {
    const errors: any = {};

    let keys: string[];

    if (onlyOne) {
      if (this._allRules[onlyOne]) {
        keys = [onlyOne];
      } else {
        return true;
      }
    } else {
      keys = this._allRulesKeys;
    }

    for (let i = 0; keys[i]; i++) {
      const name: string = keys[i];
      const rules: any = this._allRules[name];
      const value: any = data[name];
      const rulesKeys: string[] = Object.keys(rules);

      for (let k = 0; rulesKeys[k]; k++) {
        const ruleName: string = rulesKeys[k];
        const rule: any = rules[ruleName];

        let fn;

        if (typeof rule === 'function') {
          fn = rule;
        } else if (validators[ruleName]) {
          fn = validators[ruleName];
        } else {
          break;
        }

        if (ruleName === 'confirm') {
          try {
            await fn(value, data[rule], data);
          } catch (err) {
            (!errors[name]) && (errors[name] = []);

            errors[name].push(err);
          }
        } else if (typeof rule === 'function') {
          try {
            await fn(value, data);
          } catch (err) {
            (!errors[name]) && (errors[name] = []);

            errors[name].push(err);
          }
        } else {
          try {
            await fn(value, rule, data);
          } catch (err) {
            (!errors[name]) && (errors[name] = []);

            errors[name].push(err);
          }
        }
      }
    }

    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      throw errors;
    }
  }

}

export {
  Validator
};
