// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!

//push
var nameArray = [];
nameArray.push('Sheena', 'Galutira');

var genericNumberArray = [1, 2, 3, 4, 5];
genericNumberArray.push(6, 7, 8, 9, 10);


//pop
var colorArray = colors.pop();

var popResult = colorArray;

//reverse
var scrambledWords = ['win', 'the', 'for', 'burritos'];
scrambledWords.reverse();

var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
phoneNumber.reverse();

//shift
var nextOrder = orderQueue.shift();



//sort
mixedNums.sort();

mixedWords.sort();

//splice
var notFruit = fruitCollection.splice(1, 3);
// var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var spliceGemBox = gemBox.splice(8, 4);
var spliceGemBox2 = gemBox.splice(5, 2);

// var upToTen = [1, 2, 9, 10];

var spliceupToTen = upToTen.splice(2, 0, 3, 4, 5, 6, 7, 8);

brownOnly.splice(1, 5, 'brown', 'brown','brown');

//unshift
orderedValues.unshift(1, 2, 3);
var orderedValuesNewLength = orderedValues.length;

//concat
var randomThingsArray = genericNumberArray.concat(colors);

// var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];

var newOrders = [{ takeOut: 'Drinks'}, { takeOut: 'Fries'}];
var updatedOrders = orderQueue.concat(newOrders);


//join
// var scrambledWords = ['win', 'the', 'for', 'burritos'];
var sentence = scrambledWords.join(' ');

var myFruits = fruitCollection.join(' + ');

// var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];

var favoriteFriends = friends.slice(1, 3);

var owesMoney = friends.slice(3);


// var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var monthNameString = monthNames.toString();

// var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var favoriteColor = colors.indexOf('Red');

// var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];

var favoriteEvenNumber = mixedNums.indexOf(76);

// var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];
var lastNine = bulkNumbers.lastIndexOf(9);

var lastFive = bulkNumbers.lastIndexOf(5);














