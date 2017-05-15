'use strict';

import DomEventViewModel from './DomEventViewModel';
import PriceDecorator from '../decorator/PriceDecorator';

const priceDecorator = new PriceDecorator();

export default class ItemViewModel extends DomEventViewModel {
  render({item, currency}) {
    let el = this.createElement('li', 'list-group-item list-group-item-action');
    let calculatedPrice = priceDecorator.calculate(currency, item);

    let name = this.createSpan(item.name);
    let unit = this.createSpan(item.unit);
    let price = this.createSpan(priceDecorator.decorate(currency, calculatedPrice));
    let addButton = this.createButton('+');

    this.appendChildren(el, [addButton, name, price, unit]);

    this.proxy(addButton, 'click', 'add-to-basket-click');

    return el;
  }
}
