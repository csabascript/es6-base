'use strict';

import Presenter from './Presenter';
import Basket from '../model/Basket';
import BasketViewModel from '../view/viewmodel/BasketViewModel';

export default class BasketPresenter extends Presenter {

  /**
   *
   * @constructor
   * @override
   * @param dom {DOMElement}
   */
  constructor(dom) {
    super(dom);
    this.basket = new Basket();
    this.viewModel = new BasketViewModel();
  }

  /**
   *
   * @param currency {Object}
   * @returns {BasketPresenter}
   */
  setCurrency(currency) {
    this.currency = currency;
    return this;
  }

  /**
   *
   * @param currency {Object}
   */
  init(currency) {
    // get stored basket data and render
    this.setCurrency(currency);
    this.render({ basket: this.basket, currency: this.currency });
  }

  /**
   *
   * @param item {Item}
   * @param quantity {Number}
   */
  add(item, quantity = 1) {
    this.basket.add(item, quantity);
    this.render({ basket: this.basket, currency: this.currency });
  }

  /**
   *
   * @param item {Item}
   * @param quantity {Number}
   */
  remove(item, quantity = 1) {
    this.basket.remove(item, quantity);
    this.render({ basket: this.basket, currency: this.currency });
  }
}
