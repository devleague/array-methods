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
//-push()-
//1 of 2
var nameArray = [];
var pushName = nameArray.push("Christie", "Reindle");

//2 of 2
var pushGenericNumberArray = genericNumberArray.push(6, 7, 8, 9, 10);

//-pop()-
//1 of 2
var poppedColors = colors.pop();

//2 of 2
var popResult = poppedColors;

//-reverse()-
//1 of 2
var reverseScrambledWords = scrambledWords.reverse();

//2 of 2
var reversePhoneNumber = phoneNumber.reverse();

//-shift()-
//1 of 2
var shiftOrderQueue = orderQueue.shift();

//2 of 2
var nextOrder = shiftOrderQueue;

//-sort()-
//1 of 2
var sortMixedNumx = mixedNums.sort();

//2 of 2
var sortMixedWords = mixedWords.sort();

//-splice()-
//1 of 5
var spliceFruitCollection = fruitCollection.splice(fruitCollection.length -5, 3);

//2 of 5
var notFruit = spliceFruitCollection;

//3 of 5
var spliceGemBox = gemBox.splice(gemBox.length -4, 4);
var spliceGemBoxAgain = gemBox.splice(gemBox.length -3, 2);

//4 of 5
var spliceUpToTen = upToTen.splice(2, 0, 3, 4, 5, 6, 7, 8);

//5 of 5
var spliceBrownOnly = brownOnly.splice(1, 5, 'brown', 'brown', 'brown');

//-unshift()-
//1 of 2
var unshiftOrderedValues = orderedValues.unshift(1, 2, 3);

//2 of 2
var orderedValuesNewLength = orderedValues.length;

//-concat()-
//1 of 2
var randomThingsArray = genericNumberArray.concat(colors);

//2 of 2
var updatedOrders = orderQueue.concat({takeOut: 'Tacos'}, {takeOut: 'BBQ'});

//-join()-
//1 of 2
var sentence = scrambledWords.join(' ');

//2 of 2
var myFruits = fruitCollection.join(' + ');

//-slice()-
//1 of 2
//var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var favoriteFriends = friends.slice(1, 3);

//2 of 2
var owesMoney = friends.slice(3, 6);

//-toString()-
//1 of 1
var monthNameString = monthNames.toString();

//-indexOf()-
//1 of 2
var favoriteColor = colors.indexOf('Red');

//2 of 2
var favoriteEvenNumber = mixedNums.indexOf(76);

//-lastIndexOf()-
//1 of 2
var lastNine = bulkNumbers.lastIndexOf(9);

//2 of 2
var lastFive = bulkNumbers.lastIndexOf(5);