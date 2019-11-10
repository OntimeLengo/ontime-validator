import { Validator, IRules } from '../src/index';

describe('Custom', () => {
  const rules: IRules = {
    val: {
      custom: async (val: string): Promise<boolean> => {
        if (val !== 'qwerty') {
          throw new Error('Custom error');
        }

        return true;
      }
    }
  };
  const validator: Validator = new Validator(rules);

  it('Check custom value', async (next) => {
    const data: any = {
      val: 'qwerty'
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check custom value');
    }

    next();
  });

  it('Error. Check custom value', async (next) => {
    const dataErrors: any[] = [
      'asdfg'
    ];
    
    for await (let v of dataErrors) {
      let data = {
        val: v
      };

      try {
        await validator.validate(data);
  
        throw new Error('Check custom value');
      } catch (error) {
        expect(true).toEqual(true);
      }
    }

    next();
  });

});