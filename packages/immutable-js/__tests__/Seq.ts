///<reference path='../resources/jest.d.ts'/>

import { isCollection, isIndexed, Seq } from '../';

describe('Seq', () => {

  it('can be empty', () => {
    expect(Seq().size).toBe(0);
  });

  it('accepts an array', () => {
    expect(Seq([1, 2, 3]).size).toBe(3);
  });

  it('accepts an object', () => {
    expect(Seq({a: 1, b: 2, c: 3}).size).toBe(3);
  });

  it('accepts a collection string', () => {
    expect(Seq('foo').size).toBe(3);
  });

  it('accepts arbitrary objects', () => {
    function Foo() {
      this.bar = 'bar';
      this.baz = 'baz';
    }
    expect(Seq(new Foo()).size).toBe(2);
  });

  it('of accepts varargs', () => {
    expect(Seq.of(1, 2, 3).size).toBe(3);
  });

  it('accepts another sequence', () => {
    let seq = Seq.of(1, 2, 3);
    expect(Seq(seq).size).toBe(3);
  });

  it('accepts a string', () => {
    let seq = Seq('abc');
    expect(seq.size).toBe(3);
    expect(seq.get(1)).toBe('b');
    expect(seq.join('')).toBe('abc');
  });

  it('accepts an array-like', () => {
    let alike: any = { length: 2, 0: 'a', 1: 'b' };
    let seq = Seq(alike);
    expect(isIndexed(seq)).toBe(true);
    expect(seq.size).toBe(2);
    expect(seq.get(1)).toBe('b');
  });

  it('does not accept a scalar', () => {
    expect(() => {
      Seq(3 as any);
    }).toThrow('Expected Array or collection object of values, or keyed object: 3');
  });

  it('detects sequences', () => {
    let seq = Seq.of(1, 2, 3);
    expect(Seq.isSeq(seq)).toBe(true);
    expect(isCollection(seq)).toBe(true);
  });

  it('Does not infinite loop when sliced with NaN', () => {
    let list = Seq([1, 2, 3, 4, 5]);
    expect(list.slice(0, NaN).toJS()).toEqual([]);
    expect(list.slice(NaN).toJS()).toEqual([1, 2, 3, 4, 5]);
  });

  it('Does not infinite loop when spliced with negative number #559', () => {
    let dog = Seq(['d', 'o', 'g']);
    let dg = dog.filter(c => c !== 'o');
    let dig = (<any> dg).splice(-1, 0, 'i');
    expect(dig.toJS()).toEqual(['d', 'i', 'g']);
  });

  it('Does not infinite loop when an undefined number is passed to take', () => {
    let list = Seq([1, 2, 3, 4, 5]);
    expect(list.take(NaN).toJS()).toEqual([]);
  });

});
