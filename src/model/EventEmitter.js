'use strict';

import Event from './Event';

export default class EventEmitter {
  constructor() {
    this.listeners = [];
  }

  subscribe(event, cb, ctx) {
    this.listeners[event] = this.listeners[event] || [];

    if (!(typeof cb === 'function')) {
      throw new Error('Callback must be a function');
    }

    this.listeners[event].push({
      cb: cb,
      ctx: ctx
    });
  }

  emit(event, data) {
    !!this.listeners[event] && this.listeners[event].forEach((listener) => {
      listener.cb.call(listener.ctx || this, new Event(event, data));
    });
  }
}
