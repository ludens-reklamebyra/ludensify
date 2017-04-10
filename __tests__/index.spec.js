import {
  isNumber,
  isPlainObject,
  isFunction,
  isString,
  isArray,
  toggle,
  isEmptyString,
  checkNumberLength,
  isEmail,
  isPhone,
  formatDate,
  arrayMax
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

describe('checkNumberLength', () => {
  it('should return false if input length is higher than set max length', () => {
    expect(
      checkNumberLength('123456789', 8)
    ).toEqual(false)
  })
})

describe('isEmail', () => {
  it('should return false if does not match', () => {
    expect(
      isEmail('hell.com')
    ).toEqual(false)
  });

  it('should return true if it matches regex', () => {
    expect(
      isEmail('oyvind@ludensreklame.no')
    ).toEqual(true)
  });
});

describe('isPhone', () => {
  it('should return false if does not match', () => {
    expect(
      isPhone('232323')
    ).toEqual(false)
  });

  it('should return true if it matches regex', () => {
    expect(
      isPhone(12345678)
    ).toEqual(true)
  });
});

describe('formatDate', () => {
  it('should return correct output', () => {
    const now = new Date();
    expect(
      formatDate(now)
    ).toEqual(formatDate(now))
  });
});

describe('arrayMax', () => {
  it('should return the heighest number in given array', () => {
    expect(
      arrayMax([1, 2, 300, 100, 10])
    ).toEqual(300);
  })
})
