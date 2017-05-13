/* global describe, it, expect */

'use strict';

import Test from '../src/index'

describe('index', () => {
  it('should', () => {
    let x = new Test();

    expect(x.get()).toBe('basetest');
  })
});

