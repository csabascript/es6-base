'use strict';

export default class BootstrapDecorator {
  button(el, className = 'btn-primary') {
    el.className += ' btn ' + className;
    el.setAttribute('type', 'button');
    return el;
  }
}
