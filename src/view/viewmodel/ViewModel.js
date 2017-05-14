'use strict';

export default class ViewModel {
  createElement(nodeType) {
    return document.createElement(nodeType);
  }

  render(model) {
    throw new Error('Render function is not implemented');
  }
}
