import { Validator, IRules } from '../src/index';

describe('confirm', () => {
  const rules: IRules = {
    name: {
      confirm: 'path'
    }
  };
  const validator: Validator = new Validator(rules);

  it('Check confirm value', async (next) => {
    const data: any = {
      name: '12345',
      path: '12345'
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check confirm value');
    }

    next();
  });

  it('Error. Check confirm value', async (next) => {
    const dataErrors: any[] = [
      'adasdasd',
      'a987as9d87a9s8d7'
    ];
    
    for await (let v of dataErrors) {
      let data = {
        name: '12345',
        path: v
      };

      try {
        await validator.validate(data);
  
        throw new Error('Check confirm value');
      } catch (error) {
        expect(true).toEqual(true);
      }
    }

    next();
  });

});