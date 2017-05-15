'use strict';

export default class PriceDecorator {

  /**
   *
   * @param currency {Object
   * @param price {Number}
   * @returns {string}
   */
  decorate(currency, price) {
    return [currency.symbol, (parseFloat(price)).toFixed(2)].join('')
  }

  /**
   *
   * @param currency {Object}
   * @param item {Item}
   * @returns {Number}
   */
  calculate(currency, item) {
    if (currency.short === item.currency) {
      return (item.price);
    } else {
      let change = currency.rate[currency.short + item.currency];
      let exchangeRate = currency.exchangeRate;
      return (item.price / change * exchangeRate);
    }
  }
}
