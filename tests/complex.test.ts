import { Validator, IRules } from '../src/index';

describe('Complex', () => {
  const rules: IRules = {
    val: {
      req: true,
      maxLen: 10,
      mixLen: 3,
      alphaNumber: true,
      fn: async (val: string): Promise<boolean> => {
        if (val === 'qwerty') {
          throw new Error('Complex error');
        }

        return true;
      }
    }
  };
  const validator: Validator = new Validator(rules);

  it('Check complex value', async (next) => {
    const data: any = {
      val: 'asdfgh'
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check complex value');
    }

    next();
  });

  it('Error. Check complex value', async (next) => {
    const dataErrors: any[] = [
      '',
      'qw',
      'slkfjhlsfghalkhglakjfhgalfkjhlakjsfh',
      '><*(*KJHKJhkflgksfngmb',
      'ДЛОР',
      'qwerty'
    ];
    
    for await (let v of dataErrors) {
      let data = {
        val: v
      };

      try {
        await validator.validate(data);
  
        throw new Error('Check complex value');
      } catch (error) {
        expect(true).toEqual(true);
      }
    }

    next();
  });

});