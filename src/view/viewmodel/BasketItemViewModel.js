'use strict';

import DomEventViewModel from './DomEventViewModel';

export default class BasketItemViewModel extends DomEventViewModel {
  render(basketItem) {
    let el = this.createElement('li', 'list-group-item list-group-action');
    let name = this.createElement('span', 'basket-item-name');
    let value = this.createElement('span', 'basket-item-value');
    let quantity = this.createElement('span', 'basket-quantity');
    let sum = this.createElement('span');
    let increaseButton = this.createButton('+', 'btn-success');
    let decreaseButton = this.createButton('-', 'btn-warning');
    let removeButton = this.createButton('x', 'btn-danger');
    let buttonGroup = this.createElement('div', 'btn-group');

    name.innerText = basketItem.item.name;
    value.innerText = basketItem.item.value;
    quantity.innerText = basketItem.quantity;
    sum.innerText = basketItem.item.value * basketItem.quantity;

    this.appendChildren(buttonGroup, [decreaseButton, increaseButton, removeButton]);
    this.appendChildren(el, [name, value, quantity, sum, buttonGroup]);

    this.proxy(decreaseButton, 'click', 'decrease-from-basket-click');
    this.proxy(increaseButton, 'click', 'increase-from-basket-click');
    this.proxy(removeButton, 'click', 'remove-from-basket-click');

    return el;
  }
}
