'use strict';

import DomEventViewModel from './DomEventViewModel';
import PriceDecorator from '../decorator/PriceDecorator';

const priceDecorator = new PriceDecorator();

export default class BasketItemViewModel extends DomEventViewModel {
  render({basketItem, currency}) {
    let el = this.createElement('li', 'list-group-item list-group-action');
    let name = this.createElement('span', 'basket-item-name');
    let price = this.createElement('span', 'basket-item-value');
    let quantity = this.createElement('span', 'basket-quantity');
    let sum = this.createElement('span');
    let increaseButton = this.createButton('+', 'btn-success');
    let decreaseButton = this.createButton('-', 'btn-warning');
    let removeButton = this.createButton('x', 'btn-danger');
    let buttonGroup = this.createElement('div', 'btn-group');
    // let exchangedPrice = priceDecorator.decorate(currency, basketItem.item);
    let calculatedPrice = priceDecorator.calculate(currency, basketItem.item);

    name.innerText = basketItem.item.name;
    price.innerText = priceDecorator.decorate(currency, calculatedPrice);
    quantity.innerText = basketItem.quantity;
    sum.innerText = priceDecorator.decorate(currency, calculatedPrice * basketItem.quantity);

    this.appendChildren(buttonGroup, [decreaseButton, increaseButton, removeButton]);
    this.appendChildren(el, [name, price, quantity, sum, buttonGroup]);

    this.proxy(decreaseButton, 'click', 'decrease-from-basket-click');
    this.proxy(increaseButton, 'click', 'increase-from-basket-click');
    this.proxy(removeButton, 'click', 'remove-from-basket-click');

    return el;
  }
}
