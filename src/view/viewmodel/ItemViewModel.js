'use strict';

import DomEventViewModel from './DomEventViewModel';
import PriceDecorator from '../decorator/PriceDecorator';

const priceDecorator = new PriceDecorator();

export default class ItemViewModel extends DomEventViewModel {
  render({item, currency}) {
    let el = this.createElement('li', 'list-group-item list-group-item-action');
    let name = this.createElement('span');
    let price = this.createElement('span');
    let unit = this.createElement('span');
    let addButton = this.createButton('+');
    let calculatedPrice = priceDecorator.calculate(currency, item);

    name.innerText = item.name;
    unit.innerText = item.unit;
    price.innerText = priceDecorator.decorate(currency, calculatedPrice);

    this.appendChildren(el, [addButton, name, price, unit]);

    this.proxy(addButton, 'click', 'add-to-basket-click');

    return el;
  }
}
