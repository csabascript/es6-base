'use strict';

import Presenter from './Presenter';
import ItemListViewModel from '../view/viewmodel/ItemListViewModel';
import ItemListFactory from '../model/ItemListFactory';
import ItemListDataProvider from '../service/ItemListDataProvider';

const itemListFactory = new ItemListFactory();

export default class ItemListPresenter extends Presenter {
  constructor(dom) {
    super(dom);
    this.dataProvider = new ItemListDataProvider();
    this.viewModel = new ItemListViewModel();
  }

  setCurrency(currency) {
    this.currency = currency;
    return this;
  }

  init(currency) {
    this.setCurrency(currency);

    this.dataProvider.get().then((items) => {
      this.render({ itemList: itemListFactory.getNewInstance(items), currency: this.currency });
    });
  }
}
