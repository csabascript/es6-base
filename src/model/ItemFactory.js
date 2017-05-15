'use strict';

import Item from './Item';

export default class ItemFactory {
  getNewInstance(name, price, unit, currency) {
    return new Item(name, price, unit, currency);
  }
}
