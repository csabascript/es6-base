'use strict';

export default class ItemListDataProvider {
  get() {
    return new Promise((resolve, reject) => {
      resolve([
        {
          name: 'item1',
          value: '2.0'
        },
        {
          name: 'item2',
          value: '1.0'
        },
        {
          name: 'item3',
          value: '3.0'
        },
        {
          name: 'item4',
          value: '4.0'
        }
      ])
    })
  }
}
