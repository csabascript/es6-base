'use strict';

export default class Presenter {
  constructor(dom) {
    this.dom = dom;
    this.viewModel = null;
    this.model = null;
  }

  subscribe(event, cb) {
    if (!this.viewModel) {
      throw new Error('No view model is set to subscribe');
    }

    this.viewModel.subscribe(event, cb);
    return this;
  }

  emit(event, data) {
    this.viewModel.emit(event, data);
  }

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

  empty() {
    this.dom.innerHTML = '';
  }
}
