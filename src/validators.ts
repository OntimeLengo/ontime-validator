import { gettext } from './gettext';

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

function lang(key: string, options?: any): string {
  return gettext(key, options) || key;
}

async function Req(value: any = ''): Promise<boolean> {
  if (typeof value === 'undefined' || typeof value === 'boolean' || value === null) {
    value = '';
  }

  if (typeof value === 'number' && value > 0) {
    return true;
  } else if (typeof value === 'string') {
    value = value.trim();

    if (value && value.length > 0) {
      return true;
    } else {
      throw new Error(lang(errors.req));
    }
  } else if (Array.isArray(value)) {
    if (value.length > 0) {
      return true;
    } else {
      throw new Error(lang(errors.req));
    }
  } else if (typeof value === 'object') {
    if (Object.keys(value).length > 0) {
      return true;
    } else {
      throw new Error(lang(errors.req));
    }
  } else {
    throw new Error(lang(errors.req));
  }
}

async function Email(value: string = ''): Promise<boolean> {
  let r = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (value === null || value === '') {
    return true;
  } else {
    if (value && value.length > 0 && r.test(value)) {
      return true;
    } else {
      throw new Error(lang(errors.email));
    }
  }
}

async function Url(value: string = ''): Promise<boolean> {
  let r = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

  if (value === null) {
    return true;
  } else {
    if (value && value.length > 0 && r.test(value)) {
      return true;
    } else {
      throw new Error(lang(errors.url));
    }
  }
}

async function Max(value: any = 0, max: number): Promise<boolean> {
  if (value === null) {
    return true;
  } else {
    if (value.toString().indexOf('.') >= 0) {
      value = parseFloat(value as string);
    } else {
      value = parseInt(value, 10);
    }

    if (max >= value) {
      return true;
    } else {
      throw new Error(lang(errors.max, { max }));
    }
  }
}

async function Min(value: any = 0, min: number): Promise<boolean> {
  if (value === null) {
    return true;
  } else {
    if (value.toString().indexOf('.') >= 0) {
      value = parseFloat(value);
    } else {
      value = parseInt(value, 10);
    }
    if (min <= value) {
      return true;
    } else {
      throw new Error(lang(errors.min, { min }));
    }
  }
}

async function MaxLen(value: any = '', max: number): Promise<boolean> {
  if (value === null) {
    return true;
  } else {
    value = value.toString().trim();

    if (max >= value.length) {
      return true;
    } else {
      throw new Error(lang(errors.maxLen, { max }));
    }
  }
}

async function MinLen(value: any = '', min: number): Promise<boolean> {
  if (value === null) {
    return true;
  } else {
    value = value.toString().trim();

    if (min <= value.length) {
      return true;
    } else {
      throw new Error(lang(errors.minLen, { min }));
    }
  }
}

async function Reg(value: string = '', r: string = ''): Promise<boolean> {
  const reg: RegExp = new RegExp(r);

  if (value === null) {
    return true;
  } else {
    if (reg.test(value)) {
      return true;
    } else {
      throw new Error(lang(errors.regExp));
    }
  }
}

async function Confirm(value: any = '', confirm: any = ''): Promise<boolean> {
  if (value === confirm) {
    return true;
  } else {
    throw new Error(lang(errors.confirm));
  }
}

async function Gt(value: any = 0, gt: number): Promise<boolean> {
  value = parseInt(value, 10) || 0;

  if (value > gt) {
    return true;
  } else {
    throw new Error(lang(errors.gt, { gt }));
  }
}

async function Ge(value: any = 0, ge: number): Promise<boolean> {
  value = parseInt(value, 10) || 0;

  if (value >= ge) {
    return true;
  } else {
    throw new Error(lang(errors.ge, { ge }));
  }
}

async function Lt(value: any = 0, lt: number): Promise<boolean> {
  value = parseInt(value, 10) || 0;

  if (value < lt) {
    return true;
  } else {
    throw new Error(lang(errors.lt, { lt }));
  }
}

function Le(value: any = 0, le: boolean) {
  value = parseInt(value, 10) || 0;

  if (value <= le) {
    return true;
  } else {
    throw new Error(lang(errors.le, { le }));
  }
}

async function ListLen(value: any[] = []): Promise<boolean> {
  if (value.length > 0) {
    return true;
  } else {
    throw new Error(lang(errors.list));
  }
}

async function ListSelect(value: any[] = []): Promise<boolean> {
  if (value.length > 0) {
    return true;
  } else {
    throw new Error(lang(errors.listSelect));
  }
}

async function AlphaNumeric(value: any = ''): Promise<boolean> {
  const r: RegExp = /[^a-zA-Z0-9-\s]/;

  if (r.test(value)) {
    throw new Error(lang(errors.alphaNumeric));
  } else {
    return true;
  }
}

async function All(value: any = ''): Promise<boolean> {
  let r = /^[^<>]+$/;

  if (value === null || value === '') {
    return true;
  } else {
    if (r.test(value)) {
      return true;
    } else {
      throw new Error(lang(errors.all));
    }
  }
}

function registerValidator(key: string, value: Function): void {
  validators[key] = value;
}

const validators: IValidators = {
  req: Req,
  email: Email,
  url: Url,
  max: Max,
  min: Min,
  max_len: MaxLen,
  maxLen: MaxLen,
  min_len: MinLen,
  minLen: MinLen,
  confirm: Confirm,
  reg_exp: Reg,
  regExp: Reg,
  gt: Gt,
  ge: Ge,
  lt: Lt,
  le: Le,
  list: ListLen,
  listSelect: ListSelect,
  alphaNumeric: AlphaNumeric,
  all: All
};

export {
  IValidators,
  validators,
  registerValidator,
  errors
};
