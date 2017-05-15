'use strict';

import BasketItem from './BasketItem';

export default class Basket {

  /**
   * @constructor
   */
  constructor() {
    this.items = {};
  }

  /**
   *
   * @param item {Item}
   * @param quantity {Number}
   */
  add(item, quantity) {
    if (!this.items[item.name]) {
      this.items[item.name] = new BasketItem(item, 0);
    }

    this.items[item.name].quantity += quantity;
  }

  /**
   *
   * @param item {Item}
   * @param quantity {Number}
   */
  remove(item, quantity) {
    if (this.items[item.name]) {
      this.items[item.name].quantity -= quantity;

      if (this.items[item.name].quantity <= 0) {
        delete this.items[item.name];
      }
    }
  }
}
