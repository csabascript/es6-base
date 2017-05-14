'use strict';

import ViewModel from './ViewModel';
import EventEmitter from '../../model/EventEmitter';

export default class DomEventViewModel extends ViewModel {
  constructor() {
    super();
    this.ee = new EventEmitter();
  }

  subscribe(event, cb) {
    this.ee.subscribe(event, cb, this);
  }

  proxy(el, event, newEvent) {
    el.addEventListener(event, (e) => this.emit(newEvent, e));
  }

  emit(event, data) {
    this.ee.emit(event, data);
  }
}
