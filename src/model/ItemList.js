'use strict';

export default class ItemList {

  /**
   * @constructor
   */
  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }
}
