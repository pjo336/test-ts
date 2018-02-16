const sinon = require('sinon');

before(() => {
  global.sandbox = sinon.sandbox.create();
});

afterEach(function () {
  global.sandbox.restore();
});