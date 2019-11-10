import { Validator, IRules } from '../src/index';

describe('Req', () => {
  const rules: IRules = {
    name: {
      req: true
    },
    path: {
      req: true
    }
  };
  const validator: Validator = new Validator(rules);

  it('Check req value - string', async (next) => {
    const data: any = {
      name: '111',
      path: '222'
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check req value - string');
    }

    next();
  });

  it('Check req value - number', async (next) => {
    const data: any = {
      name: 111,
      path: 222
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check req value - number: incorrect value');
    }

    next();
  });

  it('Check req value - array', async (next) => {
    const data: any = {
      name: [1,2,3],
      path: [4,5,6]
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check req value - array: incorrect value');
    }

    next();
  });

  it('Check req value - object', async (next) => {
    const data: any = {
      name: {a: 1},
      path: {b: 2}
    };

    try {
      await validator.validate(data);

      expect(true).toEqual(true);
    } catch (error) {
      throw new Error('Check req value - object: incorrect value');
    }

    next();
  });

  // Error

  it('Error. Check req value - string', async (next) => {
    let data: any = {
      name: '',
      path: ''
    };

    try {
      await validator.validate(data);

      throw new Error('Error. Check req value - string');
    } catch (error) {
      expect(true).toEqual(true);
    }

    data = {};

    try {
      await validator.validate(data);

      throw new Error('Error. Check req value - string');
    } catch (error) {
      expect(true).toEqual(true);
    }

    next();
  });

  it('Error. Check req value - number', async (next) => {
    let data: any = {
      name: 111,
      path: 222
    };

    try {
      await validator.validate(data);

      throw new Error('Error. Check req value - number: incorrect value');
    } catch (error) {
      expect(true).toEqual(true);
    }

    data = {};

    try {
      await validator.validate(data);

      throw new Error('Error. Check req value - number: incorrect value');
    } catch (error) {
      expect(true).toEqual(true);
    }

    data = {
      name: 0,
      path: 0
    };

    try {
      await validator.validate(data);

      throw new Error('Error. Check req value - number: incorrect value');
    } catch (error) {
      expect(true).toEqual(true);
    }

    data = {
      name: -1,
      path: -1
    };

    try {
      await validator.validate(data);

      throw new Error('Error. Check req value - number: incorrect value');
    } catch (error) {
      expect(true).toEqual(true);
    }

    next();
  });

  it('Error. Check req value - array', async (next) => {
    let data: any = {
      name: [],
      path: []
    };

    try {
      await validator.validate(data);

      throw new Error('Error. Check req value - array: incorrect value');
    } catch (error) {
      expect(true).toEqual(true);
    }

    data = {};

    try {
      await validator.validate(data);

      throw new Error('Error. Check req value - array: incorrect value');
    } catch (error) {
      expect(true).toEqual(true);
    }

    next();
  });

  it('Error. Check req value - object', async (next) => {
    let data: any = {
      name: {},
      path: {}
    };

    try {
      await validator.validate(data);

      throw new Error('Check req value - object: incorrect value');
    } catch (error) {
      expect(true).toEqual(true);
    }

    data = {};

    try {
      await validator.validate(data);

      throw new Error('Check req value - object: incorrect value');
    } catch (error) {
      expect(true).toEqual(true);
    }

    next();
  });

});