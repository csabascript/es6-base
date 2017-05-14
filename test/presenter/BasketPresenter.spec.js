/* global describe, it, expect, beforeEach */

import BasketPresenter from '../../src/presenter/BasketPresenter';

describe('BasketPresenter', () => {
  let presenter;

  beforeEach(() => {
    presenter = new BasketPresenter();
  });

  it('should do smt', () => {
    expect(false).toBeFalsy();
    expect(presenter.getViewModel()).toBe('xxx');
  });
});
