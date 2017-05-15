'use strict';


export default class ItemListDataProvider {
  get() {
    return new Promise((resolve, reject) => {
      resolve([
        {
          name: 'item1',
          price: 2.0
        },
        {
          name: 'item2',
          price: 1.0
        },
        {
          name: 'item3',
          price: 3.0
        },
        {
          name: 'item4',
          price: 4.0
        }
      ])
    })
  }
}
