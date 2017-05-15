///<reference path='../resources/jest.d.ts'/>

import { OrderedSet } from '../';

describe('OrderedSet', () => {

  it('provides initial values in a mixed order', () => {
    let s = OrderedSet.of('C', 'B', 'A');
    expect(s.has('A')).toBe(true);
    expect(s.has('B')).toBe(true);
    expect(s.has('C')).toBe(true);
    expect(s.size).toBe(3);
    expect(s.toArray()).toEqual(['C', 'B', 'A']);
  });

  it('maintains order when new values are added', () => {
    let s = OrderedSet()
      .add('A')
      .add('Z')
      .add('A');
    expect(s.size).toBe(2);
    expect(s.toArray()).toEqual(['A', 'Z']);
  });

  it('resets order when a value is deleted', () => {
    let s = OrderedSet()
      .add('A')
      .add('Z')
      .remove('A')
      .add('A');
    expect(s.size).toBe(2);
    expect(s.toArray()).toEqual(['Z', 'A']);
  });

  it('removes correctly', () => {
    let s = OrderedSet([ 'A', 'Z' ]).remove('A');
    expect(s.size).toBe(1);
    expect(s.has('A')).toBe(false);
    expect(s.has('Z')).toBe(true);
  });

  it('respects order for equality', () => {
    let s1 = OrderedSet.of('A', 'Z');
    let s2 = OrderedSet.of('Z', 'A');
    expect(s1.equals(s2)).toBe(false);
    expect(s1.equals(s2.reverse())).toBe(true);
  });

  it('respects order when unioning', () => {
    let s1 = OrderedSet.of('A', 'B', 'C');
    let s2 = OrderedSet.of('C', 'B', 'D');
    expect(s1.union(s2).toArray()).toEqual(['A', 'B', 'C', 'D']);
    expect(s2.union(s1).toArray()).toEqual(['C', 'B', 'D', 'A']);
  });

  it('can be zipped', () => {
    let s1 = OrderedSet.of('A', 'B', 'C');
    let s2 = OrderedSet.of('C', 'B', 'D');
    expect(s1.zip(s2).toArray()).toEqual([['A', 'C'], ['B', 'B'], ['C', 'D']]);
    expect(s1.zipWith((c1, c2) => c1 + c2, s2).toArray()).toEqual(['AC', 'BB', 'CD']);
  });

});
