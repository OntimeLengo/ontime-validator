import { Validator, IRules } from '../src/index';

describe('Min', () => {
  const rules: IRules = {
    min: {
      min: 20
    }
  };
  const validator: Validator = new Validator(rules);

  it('Check min value', async (next) => {
    const data: any = {
      min: 30
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check min value');
    }

    next();
  });

  it('Error. Check min value', async (next) => {
    const dataErrors: any[] = [
      20,
      19,
      0,
      -10
    ];
    
    for await (let v of dataErrors) {
      let data = {
        min: v
      };

      try {
        await validator.validate(data);
  
        throw new Error('Check min value');
      } catch (error) {
        expect(true).toEqual(true);
      }
    }

    next();
  });

});