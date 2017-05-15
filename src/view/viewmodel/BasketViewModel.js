'use strict';

import DomEventViewModel from './DomEventViewModel';
import BasketItemViewModel from './BasketItemViewModel';
import PriceDecorator from '../decorator/PriceDecorator';
import EventEnum from '../../model/EventEnum';

const priceDecorator = new PriceDecorator();

export default class BasketViewModel extends DomEventViewModel {
  render({basket, currency}) {
    let el = this.createElement('ul', 'list-group');
    let sum = this.createElement('p');
    let value = 0;

    Object.keys(basket.items).forEach((id) => {
      let basketItem = basket.items[id];
      let basketItemViewModel = new BasketItemViewModel(basketItem);

      basketItemViewModel.subscribe(EventEnum.REMOVE_FROM_BASKET_BUTTON_CLICK, () => this.emit(EventEnum.REMOVE_FROM_BASKET_BUTTON_CLICK, basketItem));
      basketItemViewModel.subscribe(EventEnum.DECREASE_BASKET_ITEM_COUNT_BUTTON_CLICK, () => this.emit(EventEnum.DECREASE_BASKET_ITEM_COUNT_BUTTON_CLICK, basketItem));
      basketItemViewModel.subscribe(EventEnum.INCREASE_BASKET_ITEM_COUNT_BUTTON_CLICK, () => this.emit(EventEnum.INCREASE_BASKET_ITEM_COUNT_BUTTON_CLICK, basketItem));

      value += priceDecorator.calculate(currency, basketItem.item) * basketItem.quantity;
      el.appendChild(basketItemViewModel.render({basketItem, currency}));
    });

    sum.innerText = 'Total: ' + priceDecorator.decorate(currency, value.toFixed(2));
    el.appendChild(sum);
    return el;
  }
}
