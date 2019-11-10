import { Validator, IRules } from '../src/index';

describe('Max', () => {
  const rules: IRules = {
    max: {
      max: 20
    }
  };
  const validator: Validator = new Validator(rules);

  it('Check max value', async (next) => {
    const data: any = {
      max: 10
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check max value');
    }

    next();
  });

  it('Error. Check max value', async (next) => {
    const dataErrors: any[] = [
      21,
      100
    ];
    
    for await (let v of dataErrors) {
      let data = {
        max: v
      };

      try {
        await validator.validate(data);
  
        throw new Error('Check max value');
      } catch (error) {
        expect(true).toEqual(true);
      }
    }

    next();
  });

});