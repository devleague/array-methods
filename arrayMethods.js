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

// push first and last name into empty array
var nameArray =[];

nameArray.push('Chaz', 'Leong');

// push remaining numbers into number arr
genericNumberArray.push(6, 7, 8, 9, 10);

// pop/remove last element from colors and store it in popResult
var popResult = colors.pop();

// reverse scrambled words
scrambledWords.reverse();

// reverse phone number
phoneNumber.reverse();

// shift/remove first element of orderQueue and store return value in nextOrder
var nextOrder = orderQueue.shift();

// sort mixedNums
mixedNums.sort();

// sort mixedWords
mixedWords.sort();

// splice fruitCollection and store return value in notFruit
var notFruit = fruitCollection.splice(1, 3);

// splice gemBox to have gems only
var notGems = gemBox.splice(5, 2);
gemBox.splice(6, 4);

// insert all missing numbers up to 10
upToTen.splice(2, 0, 3, 4, 5, 6, 7, 8);

// make brownOnly have only the word brown in it
brownOnly.splice(1, 5, 'brown', 'brown', 'brown');

// add missing numbers to beginning of array and store length
var orderedValuesNewLength = orderedValues.unshift(1, 2, 3);

// define randomThingsArray, concat genericNumberArray and colors
var randomThingsArray = genericNumberArray.concat(colors);

// define updatedOrders, concat orderQueue and two custom orders you define
var updatedOrders = orderQueue.concat({takeOut: 'French Fries'}, {takeOut: 'Pizza'});

// join scrambledWords
var sentence = scrambledWords.join(' ');

// myFruits to store result of calling join on fruitCollection
var myFruits = fruitCollection.join(' + ');

// define favoriteFriends and have it store all my favs from friends using slice
var favoriteFriends = friends.slice(1, 3);

// define owes money and have it store all names of people who owe me money
var owesMoney = friends.slice(3, 6);

// define monthNameString and have it store result of toString called on monthNames
var monthNameString = monthNames.toString();

// define favoriteColor and store index of where 'Red' can be found in 'colors' array
var favoriteColor = colors.indexOf('Red');

// defind favoriteEvenNumber and store index of where '76' can be found in 'mixedNums' array
var favoriteEvenNumber = mixedNums.indexOf(76);

// define lastNine and store index of last 9 that can be found in 'bulkNumbers' array
var lastNine = bulkNumbers.lastIndexOf(9);

// define lastFive and store index of last 5 that can be found in 'bulkNumbers' array
var lastFive = bulkNumbers.lastIndexOf(5);