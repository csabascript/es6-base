'use strict';

import DomEventViewModel from './DomEventViewModel';
import PriceDecorator from '../decorator/PriceDecorator';

const priceDecorator = new PriceDecorator();

export default class BasketItemViewModel extends DomEventViewModel {
  render({basketItem, currency}) {
    let el = this.createElement('li', 'list-group-item list-group-action');
    let calculatedPrice = priceDecorator.calculate(currency, basketItem.item);

    let name = this.createSpan(basketItem.item.name);
    let price = this.createSpan(priceDecorator.decorate(currency, calculatedPrice));
    let quantity = this.createSpan([basketItem.quantity, basketItem.item.unit].join(''));
    let sum = this.createSpan(priceDecorator.decorate(currency, calculatedPrice * basketItem.quantity));
    let increaseButton = this.createButton('+', 'btn-success');
    let decreaseButton = this.createButton('-', 'btn-warning');
    let removeButton = this.createButton('x', 'btn-danger');
    let buttonGroup = this.createElement('div', 'btn-group');

    this.appendChildren(buttonGroup, [decreaseButton, increaseButton, removeButton]);
    this.appendChildren(el, [buttonGroup, name, price, quantity, sum]);

    this.proxy(decreaseButton, 'click', 'decrease-from-basket-click');
    this.proxy(increaseButton, 'click', 'increase-from-basket-click');
    this.proxy(removeButton, 'click', 'remove-from-basket-click');

    return el;
  }
}
