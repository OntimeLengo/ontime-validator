import { Validator, IRules } from '../src/index';

describe('Gt', () => {
  const rules: IRules = {
    val: {
      gt: 5
    }
  };
  const validator: Validator = new Validator(rules);

  it('Check gt value', async (next) => {
    const data: any = {
      val: 10
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check gt value');
    }

    next();
  });

  it('Error. Check gt value', async (next) => {
    const dataErrors: any[] = [
      5,
      4,
      3
    ];
    
    for await (let v of dataErrors) {
      let data = {
        val: v
      };

      try {
        await validator.validate(data);
  
        throw new Error('Check gt value');
      } catch (error) {
        expect(true).toEqual(true);
      }
    }

    next();
  });

});