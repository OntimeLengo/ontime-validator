import { Validator, IRules } from '../src/index';

describe('All', () => {
  const rules: IRules = {
    val: {
      all: true
    }
  };
  const validator: Validator = new Validator(rules);

  it('Check all value', async (next) => {
    const data: any = {
      val: 'adasdasdKJHG7657657657))(*)67656545.,45234525$#@#$^$%&%*&FhfadfjaxРПЛОВРПЛОРПцу'
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check all value');
    }

    next();
  });

  it('Error. Check all value', async (next) => {
    const dataErrors: any[] = [
      '><><<>sdrgasdfasdfasfd'
    ];
    
    for await (let v of dataErrors) {
      let data = {
        val: v
      };

      try {
        await validator.validate(data);
  
        throw new Error('Check all value');
      } catch (error) {
        expect(true).toEqual(true);
      }
    }

    next();
  });

});