/* global describe, expect, it */
'use strict';

import ItemList from '../../src/model/ItemList';

describe('ItemList', () => {
  it('should initiate an empty list', () => {
    let model = new ItemList();
    expect(model.items.length).toBe(0);
  });

  it('should store items in the list', () => {
    let model = new ItemList();
    expect(model.items.length).toBe(0);
    model.add({name: 'item1'});
    expect(model.items[0].name).toBe('item1');
    model.add({name: 'item2'});
    expect(model.items[1].name).toBe('item2');
  });
});
