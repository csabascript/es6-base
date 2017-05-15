'use strict';

import ItemList from './ItemList';
import ItemFactory from './ItemFactory';

const itemFactory = new ItemFactory();

export default class ItemListFactory {
  getNewInstance(items) {
    let itemList = new ItemList();
    items.map((item) => itemList.add(itemFactory.getNewInstance(item.name, item.price, item.unit, item.currency)));
    return itemList;
  }
}
