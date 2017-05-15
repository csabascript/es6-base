/* global spyOn, beforeEach, describe, expect, it */
'use strict';

import EventEmitter from '../../src/model/EventEmitter';

describe('EventEmitter', () => {
  let model;

  beforeEach(() => {
    model = new EventEmitter();
  });

  it('should set up the properties in constructor time', () => {
    expect(model.listeners.length).toBe(0);
  });

  it('should store the subscription', () => {
    let fn = () => {
    };
    let ctx = () => {
    };

    model.subscribe('event', fn, ctx);
    expect(model.listeners['event']).toBeDefined();
    expect(model.listeners['event'][0].cb).toBe(fn);
    expect(model.listeners['event'][0].ctx).toBe(ctx);

    model.subscribe('event', fn);
    expect(model.listeners['event']).toBeDefined();
    expect(model.listeners['event'][1].cb).toBe(fn);
    expect(model.listeners['event'][1].ctx).not.toBe(ctx);
  });

  it('should not store if fn is not a function', () => {
    let fn = 'string';
    expect(() => model.subscribe('event', fn)).toThrowError('Callback must be a function');
  });

  it('should call all listeners', () => {
    let cb = {
      fn: () => {
      },
      fn2: () => {
      }
    };
    spyOn(cb, 'fn');
    spyOn(cb, 'fn2');

    model.subscribe('event', cb.fn);
    model.subscribe('event', cb.fn2);

    model.emit('event');
    expect(cb.fn).toHaveBeenCalled();
    expect(cb.fn2).toHaveBeenCalled();
  });
});
