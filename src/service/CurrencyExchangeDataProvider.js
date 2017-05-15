'use strict';

import AjaxService from './AjaxService';

const API_KEY = '35e026709372ce02e797b1e013aa4137';

export default class CurrencyExchangeDataProvider extends AjaxService {

  /**
   * @constructor
   * @param baseCurrency {String}
   */
  constructor(baseCurrency) {
    super();
    this.baseCurrency = baseCurrency;
    this.baseUrl = 'http://apilayer.net/api/live';
  }

  /**
   *
   * @param to {String}
   * @returns {Promise}
   */
  get(to) {
    // worst free api ever
    let url = this.baseUrl + '?access_key=' + API_KEY + '&source=' + this.baseCurrency + '&currencies=' + to;

    return new Promise((resolve, reject) => {
      super.get(url).then(response => resolve(JSON.parse(response)));
    });
  }
}
