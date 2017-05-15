'use strict';

export default class BootstrapDecorator {
  button(el, className = 'btn-primary') {
    el.className += ' btn ' + className;
    el.setAttribute('type', 'button');
    return el;
  }

  badge(el) {
    el.className += ' badge badge-default badge-pill';
    return el;
  }
}
