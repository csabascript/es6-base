'use strict';

class Base {
  get() {
    return 'base'
  }
}

class Test extends Base {
  get() {
    return [super.get(), 'test'].join('');
  }
}

export default Test;
