'use strict';

import ViewModel from './ViewModel';
import EventEmitter from '../../model/EventEmitter';

export default class DomEventViewModel extends ViewModel {

  /**
   * @constructor
   */
  constructor() {
    super();
    this.ee = new EventEmitter();
  }

  /**
   *
   * @param event {String}
   * @param cb {Function}
   */
  subscribe(event, cb) {
    this.ee.subscribe(event, cb, this);
  }

  /**
   *
   * @param el {DOMElement}
   * @param event {String}
   * @param newEvent {String}
   * @param data {Object}
   */
  proxy(el, event, newEvent, data) {
    el.addEventListener(event, (e) => this.emit(newEvent, data || e));
  }

  /**
   *
   * @param event {String}
   * @param data {Object}
   */
  emit(event, data) {
    this.ee.emit(event, data);
  }
}
