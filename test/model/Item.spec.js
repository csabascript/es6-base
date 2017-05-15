/* global describe, expect, it */
'use strict';

import Item from '../../src/model/Item';

describe('Item', () => {
  it('should set up the properties in constructor time', () => {
    let model = new Item('name', 1.1, 'bag', 'GBP');

    expect(model.name).toBe('name');
    expect(model.price).toBe(1.1);
    expect(model.unit).toBe('bag');
    expect(model.currency).toBe('GBP');
  });
});
