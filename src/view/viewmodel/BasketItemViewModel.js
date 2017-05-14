'use strict';

import DomEventViewModel from './DomEventViewModel';

export default class BasketItemViewModel extends DomEventViewModel {
  render(basketItem) {
    let el = this.createElement('div');
    let name = this.createElement('span');
    let value = this.createElement('span');
    let quantity = this.createElement('span');
    let sum = this.createElement('span');
    let increaseButton = this.createElement('button');
    let decreaseButton = this.createElement('button');
    let removeButton = this.createElement('button');

    el.className = 'basket-item';
    name.className = 'basket-item-name';
    value.className = 'basket-item-value';
    quantity.className = 'basket-quantity';

    name.innerHTML = basketItem.item.name;
    value.innerHTML = basketItem.item.value;
    quantity.innerHTML = basketItem.quantity;
    sum.innerHTML = basketItem.item.value * basketItem.quantity;

    decreaseButton.innerHTML = '-';
    increaseButton.innerHTML = '+';
    removeButton.innerHTML = 'x';

    el.appendChild(name);
    el.appendChild(value);
    el.appendChild(quantity);
    el.appendChild(sum);
    el.appendChild(decreaseButton);
    el.appendChild(increaseButton);
    el.appendChild(removeButton);

    this.proxy(decreaseButton, 'click', 'decrease-from-basket-click');
    this.proxy(increaseButton, 'click', 'increase-from-basket-click');
    this.proxy(removeButton, 'click', 'remove-from-basket-click');

    return el;
  }
}
