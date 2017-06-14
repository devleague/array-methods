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

var nameArray = [];
nameArray.push("John", "Atkins");
genericNumberArray.push(6, 7, 8, 9, 10);
var popResult = colors.pop();

for (var i = 0; i<Math.floor(scrambledWords.length/2); i++){
    var firstPosition = i;
    var lastPosition = (scrambledWords.length - 1) - i;
    var first = scrambledWords[firstPosition];
    var last = scrambledWords[lastPosition];
    scrambledWords[firstPosition] = last;
    scrambledWords[lastPosition] = first;
}

for (var i = 0; i<Math.floor(phoneNumber.length/2); i++){
    var firstPosition = i;
    var lastPosition = (phoneNumber.length - 1) - i;
    var first = phoneNumber[firstPosition];
    var last = phoneNumber[lastPosition];
    phoneNumber[firstPosition] = last;
    phoneNumber[lastPosition] = first;
}


var nextOrder = orderQueue.shift();
mixedNums.sort();
mixedWords.sort();
var notFruit = fruitCollection.splice(1, 3);

gemBox.splice(8);
gemBox.splice(5, 2);
upToTen.splice(2, 0, 3, 4, 5, 6, 7, 8);
brownOnly.splice(1, 5, "brown", "brown", "brown");
orderedValues.unshift(1, 2, 3);
orderedValuesNewLength = orderedValues.length;
var randomThingsArray = genericNumberArray.concat(colors);

var customOrders = [ { takeOut: 'Salisbury Steak' }, { takeOut: 'Poke Salad'} ];
var updatedOrders = orderQueue.concat(customOrders);
var sentence = scrambledWords.join(" ");
var myFruits = fruitCollection.join(" + ");
var favoriteFriends = friends.slice(1,3);
var owesMoney = friends.slice(3,6);
var monthNameString = monthNames.toString(' ');
var favoriteColor = colors.indexOf('Red');
var favoriteEvenNumber = mixedNums.indexOf(76);
var lastNine = bulkNumbers.lastIndexOf(9);
var lastFive = bulkNumbers.lastIndexOf(5);

