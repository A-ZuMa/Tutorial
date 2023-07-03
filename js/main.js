// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   console.log(totalPrice);
//   return totalPrice;
// };
//   calculateTotalPrice(5, 100);
//   calculateTotalPrice(8, 60);
//   calculateTotalPrice(3, 400);
//   calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);
  
//   // ***** #12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`



//   // Change code above this line
//   console.log(message);
//   return message;
// }
// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);

// // ***** 1-13
// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   console.log(passed);
//   return passed;
// }
// isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37);

// // ***** 1-14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   console.log(isMatch);
//   return isMatch;
// }
// isValidPassword("mangodab3st");
// isValidPassword("kiwirul3z");
// isValidPassword("jqueryismyjam");

// // ***** 1-15
// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
// console.log(message);
//   return message;
// }
// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);


// // ***** 1-16
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (available < ordered) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }

//   // Change code above this line
//   console.log(message);
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// // ***** 1-17
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// // ***** 1-18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   const creditsLeft = customerCredits - totalPrice;
//   if (totalPrice > customerCredits) {
//     message = `Insufficient funds!`;
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${creditsLeft} credits left`
//   }
//   // Change code above this line
//   console.log(message);
//   return message;
// }
// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

// // ***** 1-19
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   console.log(message);
//   return message;
// }
// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// // ***** 1-20
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = `There are no products in the order!`;
//   } else if (ordered > available) {
//     message = `Your order is too large, there are not enough items in stock!`;
//   } else {
//     message = `The order is accepted, our manager will contact you`;
//   }

//   // Change code above this line
//   console.log(message);
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// // ***** 1-21
// function isNumberInRange(start, end, number) {
//   const isInRange = (number >= start && number <= end); // Change this line

//   console.log(isInRange);
//   return isInRange;
// }
// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

// // ***** 1-22
// function checkIfCanAccessContent(subType) {

//     const canAccessContent = (subType === "pro" || subType === "vip"); // Change this line

//   console.log(canAccessContent);
//   return canAccessContent;
// }
// checkIfCanAccessContent("pro");
// checkIfCanAccessContent("starter");
// checkIfCanAccessContent("vip");
// checkIfCanAccessContent("free");

// // ***** 1-23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   console.log(isNotInRange);
//   return isNotInRange;
// }
// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);
// isNumberNotInRange(20, 50, 76);

// // ***** 1-24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT
//   } else {
//     discount = BASE_DISCOUNT
//   }

//   // Change code above this line
//   console.log(discount);
//   return discount;
// }
// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);

// // ***** 1-25
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  

//   // Change code above this line
//   console.log(message);
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// // ***** 1-26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";

//   // Change code above this line
//   console.log(message);
//   return message;
// }
// checkPassword("jqueryismyjam");
// checkPassword("angul4r1sl1f3");
// checkPassword("r3actsux");

// // ***** 1-27
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case ("professional"): // Change this line
//       price = 20; // Change this line
//       break;

//     case ("organization"): // Change this line
//       price = 50; // Change this line
//       break;

//     case ("starter"): // Change this line
//       price = 0; // Change this line
//       break;
//   }

//   // Change code above this line
//   console.log(price);
//   return price;
// }
// getSubscriptionPrice("professional");
// getSubscriptionPrice("organization");
// getSubscriptionPrice("starter");

// // ***** 1-28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   switch (password) {
//     case (null):
//       message = "Canceled by user!";
//       break;
    
//     case (ADMIN_PASSWORD):
//       message = "Welcome!";
//       break;
    
//     default:
//       message = "Access denied, wrong password!";
//   }

//   // Change code above this line
//   console.log(message);
//   return message;
// }
// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// // ***** 1-29
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case ("Australia"):
//       message = "Shipping to Australia will cost 170 credits";
//       break;
//     case ("China"):
//       message = "Shipping to China will cost 100 credits";
//       break;
//     case ("Chile"):
//       message = "Shipping to Chile will cost 250 credits";
//       break;
//     case ("Jamaica"):
//       message = "Shipping to Jamaica will cost 120 credits";
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country";
//   }

//   // Change code above this line
//   console.log(message);
//   return message;
// }
// getShippingCost("Australia");
// getShippingCost("Germany");
// getShippingCost("China");
// getShippingCost("Chile");
// getShippingCost("Jamaica");
// getShippingCost("Sweden");

// // ***** 1-30
// function getNameLength(name) {
//     const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   console.log(message);
//   return message;
// }
// getNameLength("Poly");
// getNameLength("Harambe");
// getNameLength("Billy");
// getNameLength("Joe");

// // ***** 1-31
// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Change code above this line
// console.log(courseTopic);
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// // ***** 1-32
// function getSubstring(string, length) {
//   const substring = string.slice(0,length); // Change this line

//   console.log(substring);
//   return substring;
// }
// getSubstring("Hello world", 3);
// getSubstring("Hello world", 6);
// getSubstring("Hello world", 8);
// getSubstring("Hello world", 11);
// getSubstring("Hello world", 0);

// // ***** 1-33
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else if (message.length > maxLength) {
//     result = (message.slice(0, maxLength)+"...");
//   }
   
//   /// Change code above this line
//   console.log(result);
//   return result;
// }
// formatMessage("Curabitur ligula sapien", 16);
// formatMessage("Curabitur ligula sapien", 23);
// formatMessage("Vestibulum facilisis purus nec", 20);
// formatMessage("Vestibulum facilisis purus nec", 30);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);

// // ***** 1-34
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   console.log(normalizedInput);
//   return normalizedInput;
// }
// normalizeInput("Hello world");
// normalizeInput("This ISN'T SpaM");
// normalizeInput("Big SALE");

// // ***** 1-35
// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   console.log(result);
//   return result;
// }
// checkForName("Egor Kolbasov", "Egor");
// checkForName("Egor Kolbasov", "egor");
// checkForName("Egor Kolbasov", "egOr");
// checkForName("Egor Kolbasov", "Zhenya");
// checkForName("Vadim Nekrasov", "Vadim");
// checkForName("Vadim Nekrasov", "vadim");
// checkForName("Vadim Nekrasov", "Dima");

// // ***** 1-36
// function checkForSpam(message) {
//   let result;
//   let normalizedMessage;
//   // Change code below this line
//   normalizedMessage = message.toLowerCase()
//   result = (normalizedMessage.includes("spam") || normalizedMessage.includes("sale"));

//   // Change code above this line
//   console.log(result);
//   return result;
// }
// checkForSpam("Latest technology news");
// checkForSpam("JavaScript weekly newsletter");
// checkForSpam("Get best sale offers now!");
// checkForSpam("Amazing SalE, only tonight!");
// checkForSpam("Trust me, this is not a spam message");
// checkForSpam("Get rid of sPaM emails. Our book in on sale!");
// checkForSpam("[SPAM] How to earn fast money?");

// **************************** Module 2 ***************************************
// // ***** 2-1
// function checkAge(age) {
//   if (age>=18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
//   console.log(checkAge);
// }
// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// // ***** #2-2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   // Change code above this line
//   return "Access denied, wrong password!";

//   // console.log(password === ADMIN_PASSWORD ? "Welcome!" : "Access denied, wrong password!");
// }
// checkPassword("mangohackzor");
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// // ***** #2-3
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   } if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//     return "The order is accepted, our manager will contact you";
  

//   return message;
//   // Change code above this line
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// // ***** 2-9
// function getExtremeElements(array) {
//   // Change code below this line
//   const lastElementElement = array.length - 1;
//   const arrayNew = [array[0], array[lastElementElement]];

//   // Change code above this line
//   return arrayNew;
// }
// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);

// // ***** 2-10
// function splitMessage (message, delimiter) {
//   let words;
//   // Change code below this line
//   words = (message.split(delimiter));
//   // Change code above this line
//   return words;
// }
// splitMessage("Mango hurries to the train", " ");
// splitMessage("Mango", "");
// splitMessage("best_for_week", "_");

// // ***** 2-11
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   // let words;
//   // let wordsCount;
//   const words = (message.split(" "));
//   const wordsCount = words.length;
  
  
//   // Change code above this line
//   // console.log(words, wordsCount);
//   return wordsCount * pricePerWord;
// }
// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);

// // ***** 2-12
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
// string = array.join(delimiter)
// console.log(string);

//   // Change code above this line
//   return string;
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// makeStringFromArray(["top", "picks", "for", "you"], "_");

// // ***** 2-13
// function slugify(title) {
//   // Change code below this line
//   title = title.toLowerCase();
//   title = title.replace(/\s+/g, '-');
// // string = title.slug(title, {lower: true} + "-")
//   return title;
  
//   // Change code above this line
// }
// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");

// // ***** 2-14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// // ***** 2-15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

// ***** 2-16
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   // const string = firstArray.concat(secondArray);
//   // const newArray = string.slice(0, maxLength)
  
//   const newArray = firstArray.concat(secondArray).length > maxLength ? firstArray.concat(secondArray).slice(0, maxLength) : firstArray.concat(secondArray);


//     // Change code above this line
//   return newArray;
//   // console.log(newArray);
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

// // ***** 2-17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// // ***** 2-18
// function calculateTotal(number) {
//  // Change code below this line
//   let result = 0;
//   for (let i = 0; i < number; i += 1) {
//     result = result + (i + 1);
//     // console.log(i);
//   }


//   // Change code above this line
//   console.log(result);
//   return result;
// }
// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);

// // ***** 2-19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// // ***** 2-20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total = total + order[i];
//   }

//   // Change code above this line
//   console.log(total);
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// // ***** 2-21
// function findLongestWord(string) {
//   // Change code below this line
//   let longestWord = `a`;
//   let longestWordIDX = 0;
//   const array = (string.split(" "));
//   // console.log(string);
//   for (let i = 0; i < array.length; i += 1) {
//     if (longestWord.length < array[i].length) {
//       longestWordIDX = i;
//       longestWord = array[longestWordIDX];
//     }
//   }
//   // Change code above this line
//   return (longestWord);
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");

// // ***** 2-22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   let count = 0;
//   // Change code below this line
//   for (let i = min - 1; i < max; i += 1) {
//     numbers.push(min+count);
//     count += 1;
//   }

//   // Change code above this line
//   console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

// // ***** 2-23
// function filterArray(numbers, value) {
//    // Change code below this line
//   let result = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     // if (numbers[i] > value || numbers[i] !== value) {
//       // numbers.splice(i, 1);
//       // i -= 1;
//     if (numbers[i] > value) {
//       result.push(numbers[i]);
//     }
//   }
  
//   // Change code above this line
//   // console.log(numbers);
//   // return numbers
//   console.log(result);
//   return result;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// // ***** 2-24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//       console.log(fruits.includes(fruit));

//   return (fruits.includes(fruit)); // Change this line
// }
// checkFruit("plum");
// checkFruit("mandarin");
// checkFruit("pear");
// checkFruit("Pear");
// checkFruit("apple");

// // ***** 2-25
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let result = [];
//   for (let i = 0; i < array2.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       result.push(array1[i]);
//     }
//   }
//   // Change code above this line
//   console.log(result);
//   return result;
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// // ***** 2-26
// function calculateTotalPrice(order) {
//   let total = 0;
//   let count = 0;
//   // Change code below this line

//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }
//   for (count of order) {
//     total = total + count;
//   }
//   // Change code above this line
//   console.log(total);
// return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);

// // ***** 2-27
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }

//   for (number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   // Change code above this line
//   console.log(filteredNumbers);
//   return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// // ***** 2-28
// // Change code below this line
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;
// console.log(a ,b ,c, d, e);

// // ***** 2-29
// function getEvenNumbers(start, end) {
//    // Change code below this line
//   let pairNumbers = [];
//   for (let i = 0; start <= end; i += 1){
//     if (start % 2 === 0) {
//       pairNumbers.push(start);
//     }
//     start += 1;
//   }

//     // Change code above this line
//   console.log(pairNumbers);
//   return pairNumbers;
// }
// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);

// // ***** 2-30
// const start = 6;
// const end = 27;
// let number;
// let i = start;

// for (; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
//   // start += 1;
// }
// console.log(number);

// // ***** 2-31
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number = 0;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       // number = i;
//       console.log(i);
//       return i;
//       // break;
//     }
//   }
//   // Change code above this line
// }
// const pureNumber = findNumber()
// findNumber(2, 6, 5);
// findNumber(8, 17, 3);
// findNumber(6, 9, 4);
// findNumber(16, 35, 7);

// // ***** 2-32
// function includes(array, value) {
//   // Change code below this line
//   let check;
//   for (let i = 0; i < array.length; i += 1) {
//     // if (value % array[i] !== value) {
//     //   return array[i]
//     // }

//     if (array[i].includes(value)) {
//       console.log(array[i].includes(value));
//       return true;
//     }
//   }
//   // Change code above this line
//   check = false;
//   console.log(check);
//   return false;
// }
// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// includes(["apple", "plum", "pear", "orange"], "plum");
// includes(["apple", "plum", "pear", "orange"], "kiwi");
//
// ****************** VARIAN #2************************
//
// function includes(array, value) {
//   // Change code below this line
//   let check;
//   for (let number of array) {
//     if (number === value) {
//       // check = true;
//       console.log(check);
//       return true;
//   }
// }

//   // Change code above this line
//   // check = false;
//   console.log(check);
//   return false;
// }
// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// includes(["apple", "plum", "pear", "orange"], "plum");
// includes(["apple", "plum", "pear", "orange"], "kiwi");

// *********************************** AC #3 *******************************

// // ***** 3-1
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// }

// // ***** 3-2
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//   }
// };

// // ***** 3-3
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// // ***** 3-4
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// // const appTags = apartment.tags;
// // const numberOfTags = appTags.length;
// // const firstTag = appTags[0];
// // const lastTag = appTags[numberOfTags-1];
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[numberOfTags-1];
// // Change code above this line
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// // ***** 3-5
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// // ***** 3-6
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// // ***** 3-7
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// }

// // ***** 3-8
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//     name,
//     price,
//     image,
//     tags,
//   // Change code above this line
// };

// // ***** 3-9
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//     [emailInputName]:"henry.carter@aptmail.com",
//     [passwordInputName]:"jqueryismyjam",


//   // Change code above this line
// };

// // *****3-10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
//   console.log(keys);
//   console.log(values);
// }

// // ***** 3-11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {

//   keys.push(key);
//     values.push(apartment[key]);
//     }

//   // Change code above this line
// }

// // ***** 3-12
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   // Change code above this line
//   return propCount;
// }

// // ***** 3-13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   if (keys.hasOwnProperty(key)) {
//   }
//   values.push(apartment[key])
// }
// console.log(values);
// console.log(keys);

// // ***** 3-14
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const subKeys = Object.keys(object);
//   console.log(subKeys);
//     console.log(Object.keys(object).length);
//     propCount = Object.keys(object).length;
//     console.log(propCount);
//   return propCount;
//   // Change code above this line
// }
// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// // ***** 3-15
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// // const subKeys = Object.keys(apartment);
// // const subValues = Object.values(apartment);
// // keys = Object.keys(apartment);
// // values = Object.values(apartment);
// // console.log(subKeys);
// // console.log(subValues);

// console.log(keys);
// console.log(values);

// // ***** 3-16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const subValues = Object.values(salaries);
//   for (const key of subValues) {
//     totalSalary = totalSalary + key;
//   }
//   // Change code above this line
//   console.log(totalSalary);
//   return totalSalary;
// }

// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

// // ***** 3-17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// // ***** 3-18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   let price = null;
//   let namePr = productName;
//   const productNames = [];
//   const productPrices = [];
//   for (const key of products) {
//     productNames.push(key.name);
//     productPrices.push(key.price);
//   }
//   // console.log(productNames);
//   // console.log(productPrices);
//   for (let i = 0; i < productNames.length; i += 1) {
//     // price = null;
//     if (productNames[i] === productName) {
//       namePr = productNames[i];
//       price = productPrices[i];
//       console.log(namePr, price);
//       return namePr, price;
//     }
//   }
//     return null;
  
//   // Change code above this line
//   console.log(namePr, price);
// }
// getProductPrice("Radar");
// getProductPrice("Grip");
// getProductPrice("Scanner");
// getProductPrice("Droid");
// getProductPrice("Engine");

// // ***** 3-19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let string = [];
//   let bigValue = [];

//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       string.push(product[propName]);
//       continue;
//     }
//     return string;
//   }
//   console.log(string);
  
//   // Change code above this line
//   return [];
// }
// getAllPropValues("name");
// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category");

// // ***** 3-20
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalSpent = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       totalSpent = product.price * product.quantity;
//       console.log(totalSpent);
//       return totalSpent;
//   }
// }
//   return totalSpent;


//   // Change code above this line
// }
// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");
// calculateTotalPrice("Scanner");

// ***** 3-21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// // ***** 3-23
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// console.log(highTemperatures);

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// // ***** 3-24
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// // ***** 3-25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// const {
//   today: {low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", }, tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", }

// } = forecast;

// ***** 3-26
// Change code below this line
function calculateMeanTemperature(forecast) {
  const todayLow = forecast.today.low;
  const todayHigh = forecast.today.high;
  const tomorrowLow = forecast.tomorrow.low;
  const tomorrowHigh = forecast.tomorrow.high;

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
