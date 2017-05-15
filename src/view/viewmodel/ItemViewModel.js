'use strict';

import DomEventViewModel from './DomEventViewModel';

export default class ItemViewModel extends DomEventViewModel {
  render({item, currency}) {
    let el = this.createElement('li', 'list-group-item list-group-item-action');
    let name = this.createElement('span');
    let price = this.createElement('span');
    let addButton = this.createButton('+');

    name.innerText = item.name;
    price.innerText = [currency.symbol, item.price].join('');

    this.appendChildren(el, [name, price, addButton]);

    this.proxy(addButton, 'click', 'add-to-basket-click');

    return el;
  }
}
