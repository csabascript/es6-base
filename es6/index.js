'use strict';

class Base {
  get() {
    return 'pina'
  }
}

class Test extends Base {
  get() {
    return super.get();
  }
}

new Test();
