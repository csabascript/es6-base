'use strict';

export default class PriceDecorator {
  decorate(currency, price) {
    return [currency.symbol, (parseFloat(price)).toFixed(2)].join('')
  }

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
