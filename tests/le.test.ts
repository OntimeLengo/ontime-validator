import { Validator, IRules } from '../src/index';

describe('Le', () => {
  const rules: IRules = {
    val: {
      le: 5
    }
  };
  const validator: Validator = new Validator(rules);

  it('Check le value', async (next) => {
    const data: any = {
      val: 5
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check le value');
    }

    next();
  });

  it('Error. Check le value', async (next) => {
    const dataErrors: any[] = [
      6,
      7,
      8
    ];
    
    for await (let v of dataErrors) {
      let data = {
        val: v
      };

      try {
        await validator.validate(data);
  
        throw new Error('Check le value');
      } catch (error) {
        expect(true).toEqual(true);
      }
    }

    next();
  });

});