import { Validator, IRules } from '../src/index';

describe('MaxLen', () => {
  const rules: IRules = {
    name: {
      maxLen: 5
    }
  };
  const validator: Validator = new Validator(rules);

  it('Check maxLen value', async (next) => {
    const data: any = {
      name: '12345'
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check maxLen value');
    }

    next();
  });

  it('Error. Check maxLen value', async (next) => {
    const dataErrors: any[] = [
      '123456',
      '1234567890'
    ];
    
    for await (let v of dataErrors) {
      let data = {
        name: v
      };

      try {
        await validator.validate(data);
  
        throw new Error('Check maxLen value');
      } catch (error) {
        expect(true).toEqual(true);
      }
    }

    next();
  });

});