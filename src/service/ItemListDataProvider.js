'use strict';

/**
 *
 * Peas – 95p per bag
 * Eggs – £2.10 per dozen
 * Milk – £1.30 per bottle
 * Beans – 73p per can
 *
 */
export default class ItemListDataProvider {
  get() {
    return new Promise((resolve) => {
      resolve([
        {
          name: 'Peas',
          price: 0.95,
          currency: 'GBP',
          unit: 'bag'
        },
        {
          name: 'Eggs',
          price: 2.10,
          currency: 'GBP',
          unit: 'dozen'
        },
        {
          name: 'Milk',
          price: 1.30,
          currency: 'GBP',
          unit: 'bottle'
        },
        {
          name: 'Beans',
          price: 0.73,
          currency: 'GBP',
          unit: 'can'
        }
      ])
    })
  }
}
