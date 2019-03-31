class ValidatorErrors {

  constructor(errors: any = {}) {
    Object.keys(errors).forEach((k: string) => {
      const vals: string[] = errors[k];

      vals.forEach((v: string) => this.set(k, v));
    });
  }

  contains(): boolean {
    return !!Object.keys(this).length;
  }

  has(key: string): boolean {
    return this.hasOwnProperty(key);
  }

  set(key: string, val: string | Error): void {
    const self: any = this;

    if (!this.has(key)) {
      self[key] = [];
    }

    self[key].push(val);
  }

  toJSON(): any {
    const self: any = this;
    const flatErrors: any = {};

    Object.keys(this).forEach((k: string) => {
      flatErrors[k] = self[k].map((v: string | Error) => {
        return (v instanceof Error) ? v.message : v;
      });
    });

    return flatErrors;
  }

}

export {
  ValidatorErrors
};