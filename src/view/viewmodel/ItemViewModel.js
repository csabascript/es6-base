'use strict';

import DomEventViewModel from './DomEventViewModel';

export default class ItemViewModel extends DomEventViewModel {
  render(item) {
    let el = this.createElement('div');
    let name = this.createElement('span');
    let value = this.createElement('span');
    let addButton = this.createElement('button');

    el.className = 'item';
    name.className = 'item-name';
    value.className = 'item-value';

    name.innerHTML = item.name;
    value.innerHTML = item.value;
    addButton.innerHTML = '+';

    el.appendChild(name);
    el.appendChild(value);
    el.appendChild(addButton);

    this.proxy(addButton, 'click', 'add-to-basket-click');

    return el;
  }
}
