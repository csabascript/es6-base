'use strict';

export default class Presenter {

  /**
   * @constructor
   * @param dom
   */
  constructor(dom) {
    this.dom = dom;
    this.viewModel = null;
    this.model = null;
  }

  /**
   *
   * @param event {String}
   * @param cb {Function}
   * @returns {Presenter}
   */
  subscribe(event, cb) {
    if (!this.viewModel) {
      throw new Error('No view model is set to subscribe');
    }

    this.viewModel.subscribe(event, cb);
    return this;
  }

  /**
   *
   * @param event {String}
   * @param data {Object}
   */
  emit(event, data) {
    this.viewModel.emit(event, data);
  }

  /**
   *
   * @param model {Object}
   * @returns {Presenter}
   */
  render(model) {
    if (!this.viewModel) {
      throw new Error('No view model is set to render');
    }

    // window is accessed directly :/
    // lets assume for now that browser supports it
    window.requestAnimationFrame(() => {
      this.empty();
      this.dom.appendChild(this.viewModel.render(model));
    });

    return this;
  }

  /**
   * @void
   */
  empty() {
    this.dom.innerHTML = '';
  }
}
