'use strict';

import DomEventViewModel from './DomEventViewModel';
import PriceDecorator from '../decorator/PriceDecorator';

const priceDecorator = new PriceDecorator();

export default class BasketItemViewModel extends DomEventViewModel {
  render({basketItem, currency}) {
    let el = this.createElement('li', 'list-group-item list-group-action');
    let calculatedPrice = priceDecorator.calculate(currency, basketItem.item);

    let name = this.createSpan(basketItem.item.name);
    let increaseButton = this.createButton('+', 'btn-success');
    let decreaseButton = this.createButton('-', 'btn-warning');
    let removeButton = this.createButton('x', 'btn-danger');
    let buttonGroup = this.createElement('div', 'btn-group');
    let unit = this.createSpan([basketItem.quantity, basketItem.item.unit].join(' '));
    let price = this.createSpan([priceDecorator.decorate(currency, calculatedPrice * basketItem.quantity)].join('/'));

    this.appendChildren(buttonGroup, [decreaseButton, increaseButton, removeButton]);
    this.appendChildren(el, [buttonGroup, name, unit, price]);

    this.proxy(decreaseButton, 'click', 'decrease-from-basket-click');
    this.proxy(increaseButton, 'click', 'increase-from-basket-click');
    this.proxy(removeButton, 'click', 'remove-from-basket-click');

    return el;
  }
}
