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
    spy.restore();
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

    spy.reset();

    var movie = {
      movie: "The Perfect Host",
      actor: 'David Hyde Pierce'
    };
    var genericWordArray = ['Picard', 'Riker', 'LaForge', 'Worf'];

    appendToArray(genericWordArray, movie)
    expect(spy.args[0][0]).to.equal(movie);
  });
});

describe('pop()', function () {
  var removeFromArray = arrayMethods.removeFromArray;

  beforeEach(function () {
    spy = sinon.spy(Array.prototype, 'pop');
  });

  afterEach(function () {
    Array.prototype.pop.restore();
  });

  it('should have a function name `removedFromArray`', function () {
    expect(removeFromArray).to.be.defined;
    expect(removeFromArray).to.be.a('function');
  });

  it('should remove and return the last element of an array', function () {
    var genericWordArray = ['Picard', 'Riker', 'LaForge', 'Worf'];
    var returnValue = removeFromArray(genericWordArray);
    expect(returnValue).to.be.equal('Worf');
    expect(genericWordArray).to.deep.equal(['Picard', 'Riker', 'LaForge']);
    expect(spy).to.have.been.calledOn;
  });
});

describe('reverse()', function () {
  var reverseArray = arrayMethods.reverseArray;

  beforeEach(function () {
    spy = sinon.spy(Array.prototype, 'reverse');
  });

  afterEach(function () {
    Array.prototype.reverse.restore();
  });

  it('should be a function named `reverseArray`', function () {
    expect(reverseArray).to.be.defined;
    expect(reverseArray).to.be.a('function');
  });

  it('should reverse an array', function () {
    var genericWordArray = ['Picard', 'Riker', 'LaForge', 'Worf'];
    reverseArray(genericWordArray);

    expect(genericWordArray).to.be.deep.equal(['Worf', 'LaForge', 'Riker', 'Picard']);
    expect(spy).to.have.been.calledOn;

    spy.reset();

    var genericNumberArray = [1, 2, 3, 4, 5, 6];
    reverseArray(genericNumberArray);

    expect(genericNumberArray).to.be.deep.equal([6, 5, 4, 3, 2, 1]);
    expect(spy).to.have.been.calledOn;
  });
});

describe.skip('shift()', function () {

});

describe.skip('sort()', function () {

});

describe.skip('splice()', function () {

});

describe.skip('unshift()', function () {

});

describe('concat()', function () {

});

describe('join()', function () {

});

describe('slice()', function () {

});

describe('toString()', function () {

});

describe('indexOf()', function () {

});

describe('lastIndexOf()', function () {

});

describe('toLocaleString()', function () {

});