var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var arrayMethods = require('./../arrayMethods.js');

var expect = chai.expect;
var should = chai.should();
chai.use(sinonChai);

var spy;

var methodList = ['push', 'pop', 'reverse', 'shift', 'sort', 'splice', 'unshift', 'concat', 'join', 'slice', 'toString', 'indexOf', 'lastIndexOf', 'toLocaleString'];

describe('push()', function () {
  var appendToArray = arrayMethods.appendToArray;

  beforeEach(function () {
    spy = sinon.spy(Array.prototype, 'push');
  });

  afterEach(function () {
    Array.prototype.push.restore();
  });

  it('should have a function named `appendToArray`', function () {
    expect(appendToArray).to.be.defined;
    expect(appendToArray).to.be.a('function');
  });

  it('should append a new item to an array', function () {
    var newValue = '4';
    var genericNumberArray = [1, 2, 3];
    appendToArray(genericNumberArray, newValue);
    expect(spy.args[0][0]).to.equal('4');
  });
});