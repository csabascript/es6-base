'use strict';

export default class Item {

  /**
   * @constructor
   *
   * @param name {String}
   * @param price {Number}
   * @param unit {String}
   * @param currency {String}
   */
  constructor(name, price, unit, currency) {
    this.name = name;
    this.price = price;
    this.unit = unit;
    this.currency = currency;
  }
}
