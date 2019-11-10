import { Validator, IRules } from '../src/index';

describe('Email', () => {
  const rules: IRules = {
    email: {
      email: true
    }
  };
  const validator: Validator = new Validator(rules);

  it('Check email value', async (next) => {
    const data: any = {
      email: 'test@test.com'
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check email value');
    }

    next();
  });

  it('Error. Check email value', async (next) => {
    const dataErrors: any[] = [
      void(0),
      null,
      true,
      false,
      '',
      111,
      0,
      -1,
      'asdfasdfasdf',
      [],
      {},
      NaN
    ];
    
    for await (let v of dataErrors) {
      let data = {
        email: v
      };

      try {
        await validator.validate(data);
  
        throw new Error('Check email value');
      } catch (error) {
        expect(true).toEqual(true);
      }
    }

    next();
  });

});