'use strict';

import DomEventViewModel from './DomEventViewModel';
import ItemViewModel from './ItemViewModel';

export default class ItemListViewModel extends DomEventViewModel {
  render(itemList) {
    let el = this.createElement('ul', 'list-group');

    itemList.items.forEach((item) => {
      let itemViewModel = new ItemViewModel();
      itemViewModel.subscribe('add-to-basket-click', () => this.emit('add-to-basket-click', item));
      el.appendChild(itemViewModel.render(item));
    });

    return el;
  }
}
