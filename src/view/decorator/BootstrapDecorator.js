'use strict';

export default class BootstrapDecorator {

  /**
   *
   * @param el {DOMElemnent}
   * @param className {String}
   * @returns {DOMElemnent}
   */
  button(el, className = 'btn-primary') {
    el.className += ' btn ' + className;
    el.setAttribute('type', 'button');
    return el;
  }

  /**
   *
   * @param el {DOMElemnent}
   * @returns {DOMElemnent}
   */
  badge(el) {
    el.className += ' badge badge-default badge-pill';
    return el;
  }
}
