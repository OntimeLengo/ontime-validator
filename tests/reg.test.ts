import { Validator, IRules } from '../src/index';

describe('Reg', () => {
  const rules: IRules = {
    name: {
      reg: '[0-9]'
    }
  };
  const validator: Validator = new Validator(rules);

  it('Check reg value', async (next) => {
    const data: any = {
      name: '12345'
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check reg value');
    }

    next();
  });

  it('Error. Check reg value', async (next) => {
    const dataErrors: any[] = [
      'adasdasd',
      'a987as9d87a9s8d7'
    ];
    
    for await (let v of dataErrors) {
      let data = {
        name: v
      };

      try {
        await validator.validate(data);
  
        throw new Error('Check reg value');
      } catch (error) {
        expect(true).toEqual(true);
      }
    }

    next();
  });

});