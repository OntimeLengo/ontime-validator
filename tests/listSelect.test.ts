import { Validator, IRules } from '../src/index';

describe('ListSelect', () => {
  const rules: IRules = {
    val: {
      listSelect: true
    }
  };
  const validator: Validator = new Validator(rules);

  it('Check listSelect value', async (next) => {
    const data: any = {
      val: [1,2,3]
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check listSelect value');
    }

    next();
  });

  it('Error. Check listSelect value', async (next) => {
    const dataErrors: any[] = [
      []
    ];
    
    for await (let v of dataErrors) {
      let data = {
        val: v
      };

      try {
        await validator.validate(data);
  
        throw new Error('Check listSelect value');
      } catch (error) {
        expect(true).toEqual(true);
      }
    }

    next();
  });

});