/* global document, beforeEach, describe, expect, it */
'use strict';

import BootstrapDecorator from '../../../src/view/decorator/BootstrapDecorator';

describe('BootstrapDecorator', () => {
  let model;

  beforeEach(() => {
    model = new BootstrapDecorator();
  });

  it('should decorate a button element with bootstrap classes', () => {
    let button = document.createElement('button');

    model.button(button);
    expect(button.classList + '').toEqual(' btn btn-primary');

    button.className = '';

    model.button(button, 'btn-success');
    expect(button.classList + '').toEqual(' btn btn-success');
  });

  it('should decorate an element with badge classes', () => {
    let span = document.createElement('span');

    model.badge(span);
    expect(span.classList + '').toEqual(' badge badge-default badge-pill');
  });
});

