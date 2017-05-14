'use strict';

export default class ItemList {
  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }
}
