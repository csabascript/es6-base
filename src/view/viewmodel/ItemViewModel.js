'use strict';

import DomEventViewModel from './DomEventViewModel';

export default class ItemViewModel extends DomEventViewModel {
  render(item) {
    let el = this.createElement('li', 'list-group-item list-group-item-action');
    let name = this.createElement('span');
    let value = this.createElement('span');
    let addButton = this.createButton('+');

    name.innerText = item.name;
    value.innerText = item.value;

    this.appendChildren(el, [name, value, addButton]);

    this.proxy(addButton, 'click', 'add-to-basket-click');

    return el;
  }
}
