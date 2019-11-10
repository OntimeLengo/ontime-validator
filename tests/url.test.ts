import { Validator, IRules } from '../src/index';

describe('Url', () => {
  const rules: IRules = {
    url: {
      url: true
    }
  };
  const validator: Validator = new Validator(rules);

  it('Check url value', async (next) => {
    const data: any = {
      url: 'http://www.test.com'
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check url value');
    }

    next();
  });

  it('Error. Check url value', async (next) => {
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
        url: v
      };

      try {
        await validator.validate(data);
  
        throw new Error('Check url value');
      } catch (error) {
        expect(true).toEqual(true);
      }
    }

    next();
  });

});