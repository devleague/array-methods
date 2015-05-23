var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var arrayMethods = require('./../arrayMethods.js');

var expect = chai.expect;
var should = chai.should();
chai.use(sinonChai);

var spy;

var methodList = ['push', 'pop', 'reverse', 'shift', 'sort', 'splice', 'unshift', 'concat', 'join', 'slice', 'toString', 'indexOf', 'lastIndexOf', 'toLocaleString'];
