/* global describe, it, expect, beforeEach */

import Presenter from '../../src/presenter/Presenter';

describe('Presenter', () => {
  let presenter;

  beforeEach(() => {
    presenter = new Presenter();
  });

  it('should do smt', () => {
    expect(false).toBeFalsy();
    expect(presenter.getViewModel()).toBe('xxx');
  });
});
