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
  var pushToArray = arrayMethods.pushToArray;

  beforeEach(function () {
    spy = sinon.spy(Array.prototype, 'push');
  });

  afterEach(function () {
    spy.restore();
  });

  it('should have a function named `pushToArray`', function () {
    expect(pushToArray).to.be.defined;
    expect(pushToArray).to.be.a('function');
  });

  it('should append a new item to an array', function () {
    // test 1
    var newValue = '4';
    var genericNumberArray = [1, 2, 3];

    pushToArray(genericNumberArray, newValue);
    expect(spy.args[0][0]).to.equal('4');

    spy.reset();

    // test 2
    var movie = {
      movie: "The Perfect Host",
      actor: 'David Hyde Pierce'
    };
    var genericWordArray = ['Picard', 'Riker', 'LaForge', 'Worf'];

    pushToArray(genericWordArray, movie)
    expect(spy.args[0][0]).to.equal(movie);
  });
});

describe('pop()', function () {
  var shiftArray = arrayMethods.shiftArray;

  beforeEach(function () {
    spy = sinon.spy(Array.prototype, 'pop');
  });

  afterEach(function () {
    Array.prototype.pop.restore();
  });

  it('should have a function name `removedFromArray`', function () {
    expect(shiftArray).to.be.defined;
    expect(shiftArray).to.be.a('function');
  });

  it('should remove and return the last element of an array', function () {
    // test 1
    var genericWordArray = ['Picard', 'Riker', 'LaForge', 'Worf'];
    var returnValue = shiftArray(genericWordArray);
    expect(returnValue).to.be.equal('Picard');
    expect(genericWordArray).to.deep.equal(['Riker', 'LaForge', 'Worf']);
    expect(spy).to.have.been.calledOn;

    spy.reset();

    // test 2
    var genericNumberArray = [1, 2, 3];
    returnValue = shiftArray(genericNumberArray);
    expect(returnValue).to.be.equal(1);
    expect(genericNumberArray).to.be.deep.equal([2, 3]);

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
    // test 1
    var genericWordArray = ['Picard', 'Riker', 'LaForge', 'Worf'];
    reverseArray(genericWordArray);

    expect(genericWordArray).to.be.deep.equal(['Worf', 'LaForge', 'Riker', 'Picard']);
    expect(spy).to.have.been.calledOn;

    spy.reset();

    // test 2
    var genericNumberArray = [1, 2, 3, 4, 5, 6];
    reverseArray(genericNumberArray);

    expect(genericNumberArray).to.be.deep.equal([6, 5, 4, 3, 2, 1]);
    expect(spy).to.have.been.calledOn;
  });
});

describe('shift()', function () {
  var shiftArray = arrayMethods.shiftArray;

  beforeEach(function () {
    spy = sinon.spy(Array.prototype, 'shift');
  });

  afterEach(function () {
    Array.prototype.shift.restore();
  });

  it('should be a function named `shiftArray`', function () {
    expect(shiftArray).to.be.defined;
    expect(shiftArray).to.be.a('function');
  });

  it('should remove the first element in an array', function () {
    // test 1
    var genericWordArray = ['Picard', 'Riker', 'LaForge', 'Worf'];
    var result = shiftArray(genericWordArray);

    expect(result).to.be.equal('Picard');
    expect(spy).to.be.calledOn;

    spy.reset();

    // test 2
    var genericNumberArray = [1, 2, 3];
    result = shiftArray(genericNumberArray);

    expect(result).to.be.equal(1);
    expect(spy).to.be.calledOn;
  });
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