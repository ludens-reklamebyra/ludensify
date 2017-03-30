import {
  isNumber,
  isPlainObject,
  isFunction,
  isString,
  isArray,
  toggle,
  isEmptyString
} from '../src/index';

describe('isNumber', () => {
  it('returns false if input is not a number', () => {
    expect(
      isNumber([])
    ).toEqual(false)
  });

  it('returns true if input is a number', () => {
    expect(
      isNumber(100)
    ).toEqual(true);
  });
});

describe('isPlainObject', () => {
  it('should return false if input is not a plain object', () => {
    expect(
      isPlainObject([])
    ).toEqual(false)
  });

  it('should return true if input is a plain object', () => {
    expect(
      isPlainObject({})
    ).toEqual(true)
  });
});

describe('isFunction', () => {
  it('should return false if input is not a function', () => {
    expect(
      isFunction('hello world')
    ).toEqual(false)
  });

  it('should return true if input is a function', () => {
    expect(
      isFunction(() => {  })
    ).toEqual(true)
  });
});

describe('isString', () => {
  it('should return false if input is not a string', () => {
    expect(
      isString({hello: 'world'})
    ).toEqual(false)
  });

  it('should return true if input is a string', () => {
    expect(
      isString('hello')
    ).toEqual(true)
  });
});

describe('isArray', () => {
  it('should return false if input is not an array', () => {
    expect(
      isArray({hello: 'world'})
    ).toEqual(false)
  });

  it('should return true if input is an array', () => {
    expect(
      isArray([])
    ).toEqual(true)
  });
});

describe('toggle', () => {
  it('should throw when not defining trigger and element', () => {
    expect(() => {
      toggle({})
    }).toThrow(Error)
  })
})

describe('isEmptyString', () => {
  it('should return true when input is empty', () => {
    expect(
      isEmptyString('test')
    ).toEqual(false)
  })
})
