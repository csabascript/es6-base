'use strict';

import DomEventViewModel from './DomEventViewModel';
import BasketItemViewModel from './BasketItemViewModel';

export default class BasketViewModel extends DomEventViewModel {
  render(basket) {
    let el = this.createElement('ul', 'list-group');
    let sum = this.createElement('p');
    let value = 0;

    Object.keys(basket.items).forEach((id) => {
      let item = basket.items[id];
      let basketItemViewModel = new BasketItemViewModel(item);

      basketItemViewModel.subscribe('remove-from-basket-click', () => this.emit('remove-from-basket-click', item));
      basketItemViewModel.subscribe('decrease-from-basket-click', () => this.emit('decrease-from-basket-click', item));
      basketItemViewModel.subscribe('increase-from-basket-click', () => this.emit('increase-from-basket-click', item));

      value += item.item.value * item.quantity;
      el.appendChild(basketItemViewModel.render(item));
    });

    sum.innerText = value;
    el.appendChild(sum);
    return el;
  }
}
