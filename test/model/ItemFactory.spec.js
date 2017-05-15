/* global describe, expect, it */
'use strict';

import ItemFactory from '../../src/model/ItemFactory';

describe('ItemFactory', () => {
  it('should create an Item', () => {
    let model = new ItemFactory();
    let item = model.getNewInstance('name', 1.1, 'bag', 'GBP');

    expect(item.name).toBe('name');
    expect(item.price).toBe(1.1);
    expect(item.unit).toBe('bag');
    expect(item.currency).toBe('GBP');
  });
});
