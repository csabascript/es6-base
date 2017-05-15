'use strict';

import Presenter from './Presenter';
import CurrencyDataProvider from '../service/CurrencyDataProvider';
import CurrencyViewModel from '../view/viewmodel/CurrencyViewModel';
import CurrencyExchangeDataProvider from '../service/CurrencyExchangeDataProvider';

export default class CurrencyPresenter extends Presenter {

  /**
   * @constructor
   * @override
   * @param dom {DOMElement}
   */
  constructor(dom) {
    super(dom);
    // overloaded constructor?
    // I don't want to add an additional layer
    this.dataProvider = new CurrencyDataProvider();
    // USD is the base only coz that's how this API responds...
    this.exchangeProvider = new CurrencyExchangeDataProvider('USD');
    this.viewModel = new CurrencyViewModel();
  }

  /**
   * @void
   */
  init() {
    this.dataProvider.get().then((currencies) => {
      let cs = new Set();
      cs.add((currencies).map((currency) => currency.short));

      this.exchangeProvider.get([...cs].join(',')).then(response => {
        currencies.map(currency => currency.rate = response.quotes);
        this.render(currencies);
      });
    });
  }
}
