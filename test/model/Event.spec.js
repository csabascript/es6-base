/* global describe, expect, it */
'use strict';

import Event from '../../src/model/Event';

describe('Event', () => {
  it('should set up the name and data in constructor time', () => {
    let model = new Event('event', {data: 'data'});

    expect(model.name).toBe('event');
    expect(model.data).toEqual({data: 'data'});
  });
});

