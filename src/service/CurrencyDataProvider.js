'use strict';

export default class CurrencyDataProvider {
  get() {
    return new Promise((resolve, reject) => {
      resolve([
        {
          name: 'pound',
          short: 'gbp',
          symbol: '£'
        },
        {
          name: 'euro',
          short: 'eur',
          symbol: '€'
        },
        {
          name: 'dollar',
          short: 'usd',
          symbol: '$'
        }
      ])
    })
  }
}
