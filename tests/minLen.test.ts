import { Validator, IRules } from '../src/index';

describe('MinLen', () => {
  const rules: IRules = {
    name: {
      minLen: 5
    }
  };
  const validator: Validator = new Validator(rules);

  it('Check minLen value', async (next) => {
    const data: any = {
      name: '123456789'
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check minLen value');
    }

    next();
  });

  it('Error. Check minLen value', async (next) => {
    const dataErrors: any[] = [
      '1234',
      '1',
      ''
    ];
    
    for await (let v of dataErrors) {
      let data = {
        name: v
      };

      try {
        await validator.validate(data);
  
        throw new Error('Check minLen value');
      } catch (error) {
        expect(true).toEqual(true);
      }
    }

    next();
  });

});