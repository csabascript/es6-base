'use strict';

import Item from './Item';

export default class ItemFactory {
  getNewInstance(name, value) {
    return new Item(name, value);
  }
}
