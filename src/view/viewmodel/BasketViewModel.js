'use strict';

import DomEventViewModel from './DomEventViewModel';
import BasketItemViewModel from './BasketItemViewModel';
import PriceDecorator from '../decorator/PriceDecorator';

const priceDecorator = new PriceDecorator();

export default class BasketViewModel extends DomEventViewModel {
  render({basket, currency}) {
    let el = this.createElement('ul', 'list-group');
    let sum = this.createElement('p');
    let value = 0;

    Object.keys(basket.items).forEach((id) => {
      let basketItem = basket.items[id];
      let basketItemViewModel = new BasketItemViewModel(basketItem);

      basketItemViewModel.subscribe('remove-from-basket-click', () => this.emit('remove-from-basket-click', basketItem));
      basketItemViewModel.subscribe('decrease-from-basket-click', () => this.emit('decrease-from-basket-click', basketItem));
      basketItemViewModel.subscribe('increase-from-basket-click', () => this.emit('increase-from-basket-click', basketItem));

      value += priceDecorator.calculate(currency, basketItem.item) * basketItem.quantity;
      el.appendChild(basketItemViewModel.render({basketItem, currency}));
    });

    sum.innerText = priceDecorator.decorate(currency, value.toFixed(2));
    el.appendChild(sum);
    return el;
  }
}
