'use strict';

import BasketPresenter from '../presenter/BasketPresenter';
import ItemListPresenter from '../presenter/ItemListPresenter';
import CurrencyPresenter from '../presenter/CurrencyPresenter';

const PRESENTERS = {
  'basket': BasketPresenter,
  'itemlist': ItemListPresenter,
  'currency': CurrencyPresenter
};

export default class PresenterFactory {
  getNewInstance(type, dom) {
    if (!PRESENTERS[type]) {
      throw new Error('Invalid presenter type');
    }

    if (!dom) {
      throw new Error('DOM is required for a presenter');
    }

    return new PRESENTERS[type](dom);
  }
}
