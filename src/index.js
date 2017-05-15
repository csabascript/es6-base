/* global window */
'use strict';

import PresenterFactory from './presenter/PresenterFactory';
import EventEnum from './model/EventEnum';

((document) => {
  let presenterFactory = new PresenterFactory();

  let basketPresenter = presenterFactory.getNewInstance('basket', document.getElementById('basket'));
  let itemListPresenter = presenterFactory.getNewInstance('itemlist', document.getElementById('item-list'));
  let currencyPresenter = presenterFactory.getNewInstance('currency', document.getElementById('currency'));

  currencyPresenter.init();

  currencyPresenter
    .subscribe(EventEnum.CURRENCY_BUTTON_CLICK, (e) => {
      itemListPresenter.init(e.data);
      basketPresenter.init(e.data);
    });

  itemListPresenter
    .subscribe(EventEnum.ADD_TO_BASKET_BUTTON_CLICK, (e) => basketPresenter.add(e.data));

  basketPresenter
    .subscribe(EventEnum.INCREASE_BASKET_ITEM_COUNT_BUTTON_CLICK, (e) => basketPresenter.add(e.data.item, 1))
    .subscribe(EventEnum.DECREASE_BASKET_ITEM_COUNT_BUTTON_CLICK, (e) => basketPresenter.remove(e.data.item, 1))
    .subscribe(EventEnum.REMOVE_FROM_BASKET_BUTTON_CLICK, (e) => basketPresenter.remove(e.data.item, e.data.quantity));

})(window.document);
