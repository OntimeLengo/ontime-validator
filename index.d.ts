export class ValidatorErrors {
  constructor(errors: any)
  contains(): boolean;
  has(key: string): boolean;
  set(key: string, val: string | Error): void;
  toJSON(): any;
}

export class Validator {
  static ValidatorErrors: ValidatorErrors;
  static setGettext(fn: Function): void;
  static getValidators(): any;
  static registerValidator(key: string, value: Function): void;
  static getDefaultErrors(): any;
  constructor(allRules: any);
  validate(data: any, onlyOne?: string): Promise<boolean>;
}
