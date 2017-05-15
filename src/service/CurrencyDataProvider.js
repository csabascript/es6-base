'use strict';

export default class CurrencyDataProvider {

  /**
   *
   * @returns {Promise}
   */
  get() {
    return new Promise((resolve, reject) => {
      resolve([
        {
          name: 'pound',
          short: 'GBP',
          symbol: '£',
          exchangeRate: 1
        },
        {
          name: 'dollar',
          short: 'USD',
          symbol: '$',
          exchangeRate: 1.5
        }
      ])
    })
  }
}
