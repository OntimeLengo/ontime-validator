import { Validator, IRules } from '../src/index';

describe('Ge', () => {
  const rules: IRules = {
    val: {
      ge: 5
    }
  };
  const validator: Validator = new Validator(rules);

  it('Check ge value', async (next) => {
    const data: any = {
      val: 5
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check ge value');
    }

    next();
  });

  it('Error. Check ge value', async (next) => {
    const dataErrors: any[] = [
      4,
      3,
      2,
      0
    ];
    
    for await (let v of dataErrors) {
      let data = {
        val: v
      };

      try {
        await validator.validate(data);
  
        throw new Error('Check ge value');
      } catch (error) {
        expect(true).toEqual(true);
      }
    }

    next();
  });

});