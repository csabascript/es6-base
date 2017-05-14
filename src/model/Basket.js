'use strict';

import BasketItem from './BasketItem';

export default class Basket {
  constructor() {
    this.items = {};
  }

  add(item, quantity) {
    if (!this.items[item.name]) {
      this.items[item.name] = new BasketItem(item, 0);
    }

    this.items[item.name].quantity += quantity;
  }

  remove(item, quantity) {
    if (this.items[item.name]) {
      this.items[item.name].quantity -= quantity;

      if (this.items[item.name].quantity <=0) {
        delete this.items[item.name];
      }
    }
  }
}
