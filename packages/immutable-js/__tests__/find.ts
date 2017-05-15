///<reference path='../resources/jest.d.ts'/>

import * as jasmineCheck from 'jasmine-check';
jasmineCheck.install();

import { List, Range, Seq } from '../';

describe('find', () => {

  it('find returns notSetValue when match is not found', () => {
    expect(Seq.of(1, 2, 3, 4, 5, 6).find(function () {
      return false;
    }, null, 9)).toEqual(9);
  });

  it('findEntry returns notSetValue when match is not found', () => {
    expect(Seq.of(1, 2, 3, 4, 5, 6).findEntry(function () {
      return false;
    }, null, 9)).toEqual(9);
  });

  it('findLastEntry returns notSetValue when match is not found', () => {
    expect(Seq.of(1, 2, 3, 4, 5, 6).findLastEntry(function () {
      return false;
    }, null, 9)).toEqual(9);
  });

});
