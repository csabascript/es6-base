'use strict';

import DomEventViewModel from './DomEventViewModel';
import ItemViewModel from './ItemViewModel';
import EventEnum from '../../model/EventEnum';

export default class ItemListViewModel extends DomEventViewModel {

  /**
   *
   * @override
   * @param itemList {ItemList}
   * @param currency {Object}
   * @returns {DOMElement}
   */
  render({itemList, currency}) {
    let el = this.createElement('ul', 'list-group');

    itemList.items.forEach((item) => {
      let itemViewModel = new ItemViewModel();
      itemViewModel.subscribe(EventEnum.ADD_TO_BASKET_BUTTON_CLICK, () => this.emit(EventEnum.ADD_TO_BASKET_BUTTON_CLICK, item));
      el.appendChild(itemViewModel.render({item, currency}));
    });

    return el;
  }
}
