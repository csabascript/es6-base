/* global document, beforeEach, describe, expect, it */
'use strict';

import ViewModel from '../../../src/view/viewmodel/ViewModel';

describe('ViewModel', () => {
  let model;

  beforeEach(() => {
    model = new ViewModel();
  });

  it('should create a DOM element', () => {
    let node = model.createElement('div', 'testclass');

    expect(node).toBeDefined();
    expect(node.nodeName).toBe('DIV');
    expect(node.classList + '').toEqual('testclass');
  });

  it('should create a span element', () => {
    let node = model.createSpan('inner text', 'testclass');

    expect(node).toBeDefined();
    expect(node.nodeName).toBe('SPAN');
    expect(node.innerText).toBe('inner text');
  });

  it('should create a button element', () => {
    let node = model.createButton('inner text', 'testclass');

    expect(node).toBeDefined();
    expect(node.nodeName).toBe('BUTTON');
    expect(node.innerHTML).toBe('inner text');
  });

  it('should append array of children to an element', () => {
    let rootNode = document.createElement('div');
    let els = [
      document.createElement('div'),
      document.createElement('div'),
      document.createElement('div'),
    ];

    model.appendChildren(rootNode, els);
    expect(rootNode.childElementCount).toBe(3);
  });

  it('should throw an Error in the abstract render function', () => {
    expect(() => model.render()).toThrowError();
  });
});

