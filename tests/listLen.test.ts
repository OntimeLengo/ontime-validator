import { Validator, IRules } from '../src/index';

describe('ListLen', () => {
  const rules: IRules = {
    val: {
      listLen: true
    }
  };
  const validator: Validator = new Validator(rules);

  it('Check listLen value', async (next) => {
    const data: any = {
      val: [1,2,3]
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check listLen value');
    }

    next();
  });

  it('Error. Check listLen value', async (next) => {
    const dataErrors: any[] = [
      []
    ];
    
    for await (let v of dataErrors) {
      let data = {
        val: v
      };

      try {
        await validator.validate(data);
  
        throw new Error('Check listLen value');
      } catch (error) {
        expect(true).toEqual(true);
      }
    }

    next();
  });

});