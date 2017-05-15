'use strict';

import Presenter from './Presenter';
import CurrencyDataProvider from '../service/CurrencyDataProvider';
import CurrencyViewModel from '../view/viewmodel/CurrencyViewModel';

export default class CurrencyPresenter extends Presenter {
  constructor(dom) {
    super(dom);
    // overloaded constructor?
    // I don't want to add an additional layer
    this.dataProvider = new CurrencyDataProvider();
    this.viewModel = new CurrencyViewModel();
  }

  init() {
    this.dataProvider.get().then((currencies) => {
      this.render(currencies);
    });
  }
}
