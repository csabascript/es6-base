'use strict';

import DomEventViewModel from './DomEventViewModel';
import PriceDecorator from '../decorator/PriceDecorator';
import EventEnum from '../../model/EventEnum';

const priceDecorator = new PriceDecorator();

export default class ItemViewModel extends DomEventViewModel {
  render({item, currency}) {
    let el = this.createElement('li', 'list-group-item list-group-item-action');
    let calculatedPrice = priceDecorator.calculate(currency, item);

    let name = this.createSpan(item.name);
    let price = this.createSpan([priceDecorator.decorate(currency, calculatedPrice), item.unit].join('/'));
    let addButton = this.createButton('+');
    this.appendChildren(el, [addButton, name, price]);

    this.proxy(addButton, 'click', EventEnum.ADD_TO_BASKET_BUTTON_CLICK);

    return el;
  }
}
