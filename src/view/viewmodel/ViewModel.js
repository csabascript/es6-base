/* global document */
'use strict';

import BootstrapDecorator from '../decorator/BootstrapDecorator';

const bootstrapDecorator = new BootstrapDecorator();

export default class ViewModel {
  /**
   *
   * @param nodeType {String}
   * @param className {String}
   * @returns {DOMElement}
   */
  createElement(nodeType, className = '') {
    let el = document.createElement(nodeType);
    el.className = className;
    return el;
  }

  /**
   *
   * @param text {String}
   * @param className {String}
   * @returns {DOMElemnent}
   */
  createSpan(text, className = '') {
    let el = this.createElement('span');
    el.className = className;
    el.innerText = text;
    return bootstrapDecorator.badge(el);
  }

  /**
   *
   * @param text {String}
   * @param className {String}
   * @returns {DOMElemnent}
   */
  createButton(text, className) {
    let el = this.createElement('button');
    el.innerText = text;
    return bootstrapDecorator.button(el, className);
  }

  /**
   *
   * @param el {DOMElement}
   * @param children {Array<DOMElement>}
   */
  appendChildren(el, children) {
    children.map((child) => el.appendChild(child));
  }

  /**
   * @throws Error
   */
  render() {
    throw new Error('Render function is not implemented');
  }
}
