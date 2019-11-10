import { Validator, IRules } from '../src/index';

describe('AlphaNumeric', () => {
  const rules: IRules = {
    val: {
      alphaNumeric: true
    }
  };
  const validator: Validator = new Validator(rules);

  it('Check alphaNumeric value', async (next) => {
    const data: any = {
      val: 'adasdasdKJHG7657657657'
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check alphaNumeric value');
    }

    next();
  });

  it('Error. Check alphaNumeric value', async (next) => {
    const dataErrors: any[] = [
      '*&(*&^',
      'ЛОРПЛОПЛОРПЛОРП123123',
      'JHGKJHG9(*&(*&(*&#@$#$#245'
    ];
    
    for await (let v of dataErrors) {
      let data = {
        val: v
      };

      try {
        await validator.validate(data);
  
        throw new Error('Check alphaNumeric value');
      } catch (error) {
        expect(true).toEqual(true);
      }
    }

    next();
  });

});