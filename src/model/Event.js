'use strict';

export default class Event {

  /**
   *
   * @param name {String}
   * @param data {Object}
   */
  constructor(name, data) {
    this.name = name;
    this.data = data;
  }
}
