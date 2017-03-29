import { isNumber } from '../src/index';

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
