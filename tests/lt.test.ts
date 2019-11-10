import { Validator, IRules } from '../src/index';

describe('Lt', () => {
  const rules: IRules = {
    val: {
      lt: 5
    }
  };
  const validator: Validator = new Validator(rules);

  it('Check lt value', async (next) => {
    const data: any = {
      val: 4
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check lt value');
    }

    next();
  });

  it('Error. Check lt value', async (next) => {
    const dataErrors: any[] = [
      5,
      6,
      7
    ];
    
    for await (let v of dataErrors) {
      let data = {
        val: v
      };

      try {
        await validator.validate(data);
  
        throw new Error('Check lt value');
      } catch (error) {
        expect(true).toEqual(true);
      }
    }

    next();
  });

});