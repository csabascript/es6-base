/* global beforeEach, describe, expect, it */
'use strict';

import Basket from '../../src/model/Basket';

describe('Basket', () => {
  let model;

  beforeEach(() => {
    model = new Basket();
  });

  it('should map items by name', () => {
    model.add({name: 'test'}, 1);
    expect(model.items['test']).toBeDefined();
  });

  it('should set the quantity if add was called', () => {
    model.add({name: 'test'}, 1);
    expect(model.items['test'].quantity).toBe(1);

    model.add({name: 'test1'}, 10);
    expect(model.items['test1'].quantity).toBe(10);

    model.add({name: 'test'}, 1);
    expect(model.items['test'].quantity).toBe(2);
  });

  it('should set the quantity if remove was called', () => {
    model.add({name: 'test'}, 10);
    expect(model.items['test'].quantity).toBe(10);
    model.remove({name: 'test'}, 1);
    expect(model.items['test'].quantity).toBe(9);
    model.remove({name: 'test'}, 1);
    expect(model.items['test'].quantity).toBe(8);
    model.remove({name: 'test'}, 8);
    expect(model.items['test']).not.toBeDefined();
  });
});
