///<reference path='../resources/jest.d.ts'/>

import { Range } from '../';

describe('interpose', () => {

  it('separates with a value', () => {
    let range = Range(10, 15);
    let interposed = range.interpose(0);
    expect(interposed.toArray()).toEqual(
      [ 10, 0, 11, 0, 12, 0, 13, 0, 14 ],
    );
  });

  it('can be iterated', () => {
    let range = Range(10, 15);
    let interposed = range.interpose(0);
    let values = interposed.values();
    expect(values.next()).toEqual({ value: 10, done: false });
    expect(values.next()).toEqual({ value: 0, done: false });
    expect(values.next()).toEqual({ value: 11, done: false });
    expect(values.next()).toEqual({ value: 0, done: false });
    expect(values.next()).toEqual({ value: 12, done: false });
    expect(values.next()).toEqual({ value: 0, done: false });
    expect(values.next()).toEqual({ value: 13, done: false });
    expect(values.next()).toEqual({ value: 0, done: false });
    expect(values.next()).toEqual({ value: 14, done: false });
    expect(values.next()).toEqual({ value: undefined, done: true });
  });

});
