/* global window */
'use strict';

import PresenterFactory from './presenter/PresenterFactory';

((document) => {
  let presenterFactory = new PresenterFactory();

  let basketPresenter = presenterFactory.getNewInstance('basket', document.getElementById('basket'));
  let itemListPresenter = presenterFactory.getNewInstance('itemlist', document.getElementById('item-list'));

  itemListPresenter.init();
  basketPresenter.init();

  itemListPresenter
    .subscribe('add-to-basket-click', (e) => basketPresenter.add(e.data));

  basketPresenter
    .subscribe('increase-from-basket-click', (e) => basketPresenter.add(e.data.item, 1))
    .subscribe('decrease-from-basket-click', (e) => basketPresenter.remove(e.data.item, 1))
    .subscribe('remove-from-basket-click', (e) => basketPresenter.remove(e.data.item, e.data.quantity));

})(window.document);
