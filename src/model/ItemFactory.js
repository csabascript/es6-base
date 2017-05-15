'use strict';

import Item from './Item';

export default class ItemFactory {
  getNewInstance(name, price) {
    return new Item(name, price);
  }
}
