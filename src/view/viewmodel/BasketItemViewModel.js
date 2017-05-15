'use strict';

import DomEventViewModel from './DomEventViewModel';
import PriceDecorator from '../decorator/PriceDecorator';
import EventEnum from '../../model/EventEnum';

const priceDecorator = new PriceDecorator();

export default class BasketItemViewModel extends DomEventViewModel {

  /**
   * @override
   * @param basketItem {BasketItem}
   * @param currency {Object}
   * @returns {DOMElement}
   */
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

    this.proxy(decreaseButton, 'click', EventEnum.DECREASE_BASKET_ITEM_COUNT_BUTTON_CLICK);
    this.proxy(increaseButton, 'click', EventEnum.INCREASE_BASKET_ITEM_COUNT_BUTTON_CLICK);
    this.proxy(removeButton, 'click', EventEnum.REMOVE_FROM_BASKET_BUTTON_CLICK);

    return el;
  }
}
