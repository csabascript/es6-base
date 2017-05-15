'use strict';

export default class BasketItem {

  /**
   *
   * @param item {Item}
   * @param quantity {Number}
   */
  constructor(item, quantity) {
    this.item = item;
    this.quantity = quantity;
  }
}
