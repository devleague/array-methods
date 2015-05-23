var expect = chai.expect;
var should = chai.should();
var sandbox;
// chai.use(sinonChai);

var spy;

var methodList = ['push', 'pop', 'reverse', 'shift', 'sort', 'splice', 'unshift', 'concat', 'join', 'slice', 'toString', 'indexOf', 'lastIndexOf', 'toLocaleString'];

describe.skip('push()', function () {
  it('Push your First and Last Name into an empty array', function () {
    expect(nameArray).to.be.defined;
    expect(nameArray).to.be.an('array');
    expect(nameArray).to.have.length(2);
  });

  it('to an already existing array', function () {
    expect(genericNumberArray).to.be.defined;
    expect(genericNumberArray).have.length(10);
    expect(genericNumberArray).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});

describe.skip('pop()', function () {
  it('removes the last element of an array`', function () {
    expect(colors).to.be.defined;
    expect(colors).to.deep.equal(['Blue', 'Red', 'Yellow']);
  });

  it('`popResult` is storing the return value', function () {
    expect(popResult).to.be.defined;
    expect(popResult).to.equal('Charlie');
  });
});

describe.skip('reverse()', function () {
  it('the array named `scrambledWords', function () {
    expect(scrambledWords).to.be.defined;
    expect(scrambledWords).to.be.deep.equal(['burritos', 'for', 'the', 'win']);
  });
  it('the array named `phoneNumber', function () {
    expect(phoneNumber).to.be.defined;
    expect(phoneNumber).to.be.deep.equal([8, 6, 7, 5, 3, 0, 9]);
  });
});

describe.skip('shift()', function () {
  it('removes the first element of an array', function () {
    expect(orderQueue).to.be.defined;
    expect(orderQueue).to.deep.equal([{ takeOut: 'Medium Salad'}, { takeOut: 'Burger'}]);
  });
  it('`nextOrder` is storing the return vale', function () {
    expect(nextOrder).to.be.defined;
    expect(nextOrder).to.deep.equal({ takeOut: 'Ice Cream' });
  });
});

describe.skip('sort()', function () {
  it('the `mixedNums` array', function () {
    expect(mixedNums).to.be.defined;
    expect(mixedNums).to.have.length(13);
    expect(mixedNums).to.deep.equal([1, 10, 2, 21, 3, 4, 40, 5, 7, 7, 76, 805, 81]);
  });
  it('the `mixedWords` array', function () {
    expect(mixedWords).to.be.defined;
    expect(mixedWords).to.have.length(5);
    expect(mixedWords).to.deep.equal(["About", "Dont", "Forget", "Me", "You"]);
  });
});

describe('splice()', function () {
  describe.skip('removing elements', function () {
    it('`fruitCollection` has only fruits inside of it', function () {
      expect(fruitCollection).to.be.defined;
      expect(fruitCollection).to.have.length(3);
      expect(fruitCollection).to.deep.equal(['Apple', 'Banana', 'Pear']);
    });
    it('`notFruit` variable is storing the items removed from `fruitCollection`', function () {
      expect(notFruit).to.be.defined;
      expect(notFruit).to.an('array');
      expect(notFruit).to.have.length(3);
      expect(notFruit).to.deep.equal(['Scissors', 'Pug', 'Lady Bug']);
    });
    it('`gemBox` has only gems inside of it', function () {
      console.log(gemBox);
      expect(gemBox).to.be.defined;
      expect(gemBox).to.have.length(6);
      expect(gemBox).to.be.deep.equal(["Ruby", "Diamond", "Diamond", "Emerald", "Moonstone", "Sapphire"]);
    });
  });

  describe.skip('inserting elements', function () {
    it('`upToTen` should have a length of 10', function () {
      console.log(upToTen);
      expect(upToTen).to.be.defined;
      expect(upToTen).to.be.an('array');
      expect(upToTen).to.have.length(10);
      expect(upToTen).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });

  describe.skip('"why not both?"', function () {
    it('`brownOnly` has only the word "brown" in it and a length of 5', function () {
      expect(brownOnly).to.be.defined;
      expect(brownOnly).to.an('array');
      expect(brownOnly).to.have.length(5);
      expect(brownOnly).to.deep.equal(["brown", "brown", "brown", "brown", "brown"]);
    });
  });

});

describe('unshift()', function () {
  it('expectation', function () {

  });
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