'use strict';

import Presenter from './Presenter';
import Basket from '../model/Basket';
import BasketViewModel from '../view/viewmodel/BasketViewModel';

export default class BasketPresenter extends Presenter {
  constructor(dom) {
    super(dom);
    this.basket = new Basket();
    this.viewModel = new BasketViewModel();
  }

  init() {
    // get stored basket data and render
    this.render(this.basket);
  }

  add(item, quantity = 1) {
    this.basket.add(item, quantity);
    this.render(this.basket);
  }

  remove(item, quantity) {
    this.basket.remove(item, quantity);
    this.render(this.basket);
  }
}
