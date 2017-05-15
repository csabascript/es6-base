'use strict';

import Item from './Item';

export default class ItemFactory {

  /**
   *
   * @param name {String}
   * @param price {Number}
   * @param unit {String}
   * @param currency {String}
   * @returns {Item}
   */
  getNewInstance(name, price, unit, currency) {
    return new Item(name, price, unit, currency);
  }
}
