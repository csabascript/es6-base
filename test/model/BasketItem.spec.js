/* global describe, expect, it */
'use strict';

import BasketItem from '../../src/model/BasketItem';

describe('BasketItem', () => {
  it('should set up the item and quantity in constructor time', () => {
    let model = new BasketItem({name: 'test'}, 1);

    expect(model.quantity).toBe(1);
    expect(model.item).toEqual({name: 'test'});
  });
});

