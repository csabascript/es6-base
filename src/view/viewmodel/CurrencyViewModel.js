'use strict';

import DomEventViewModel from './DomEventViewModel';
import EventEnum from '../../model/EventEnum';

export default class CurrencyViewModel extends DomEventViewModel {
  render(currencies) {
    let el = this.createElement('div', 'btn-group');

    currencies.forEach((currency) => {
      let o = this.createButton(currency.name, 'btn-success');
      this.proxy(o, 'click', EventEnum.CURRENCY_BUTTON_CLICK, currency);
      el.appendChild(o);
    });

    return el;
  }
}
