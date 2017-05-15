'use strict';

import BootstrapDecorator from '../decorator/BootstrapDecorator';

const bootstrapDecorator = new BootstrapDecorator();

export default class ViewModel {
  createElement(nodeType, className = '') {
    let el = document.createElement(nodeType);
    el.className = className;
    return el;
  }

  createSpan(text, className) {
    let el = this.createElement('span');
    el.className = className;
    el.innerText = text;
    return el;
  }

  createButton(text, className) {
    let el = this.createElement('button');
    el.innerText = text;
    return bootstrapDecorator.button(el, className);
  }

  appendChildren(el, children) {
    children.map((child) => el.appendChild(child));
  }

  render(model) {
    throw new Error('Render function is not implemented');
  }
}
