// console.log("ok");
// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = (courseTopic[0]);
// const lastElement =(courseTopic[courseTopic.length -1]);

// ==========================Задача============================================================================

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length > maxLength) {
//    result = message.slice (0, maxLength - 3) + '...';
//   } else {
//     result = message.slice (0, maxLength);
//   }
//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla',30));


// ==========================Задача============================================================================


// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase() ; // Change this line

//     return normalizedInput;
//   }

//   console.log(normalizeInput('MoNdEo'));

// ==========================Задача============================================================================


// function checkForName(fullName, name) {
//     const result = fullName.includes (name) ; // Change this line
//      return result;
//    }
//    console.log(checkForName('Петров Саша', 'саша'));

// console.log('ok');

// ==========================Задача============================================================================


// function checkForSpam(message) {
//     let result;
//     // Change code below this line
//   messageToLowerCase = message.toLowerCase();
//   result = messageToLowerCase.includes('spam') || messageToLowerCase.includes('sale');
//     // Change code above this line
//     return result;
//   }

//   console.log(checkForSpam("Amazing SalE, only tonight!"));


// ==========================Задача============================================================================


// function getExtremeElements(array) {
//     // Change code below this line
//   const firstElement = array[0];
//   const lastElement = array[array.length-1];
//   console.log(lastElement);
//    let result = `${firstElement}, ${lastElement}`;
//     return result;
//     // Change code above this line
//   }
//   console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

// function getExtremeElements(array) {
//     // Change code below this line
//     return [array[0],array[array.length-1]]
//     // Change code above this line
//   }
//   console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));


// ==========================Задача============================================================================

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
// words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage("best_for_week", "_"));


// ==========================Задача============================================================================


// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//     let separatedWords;
//     separatedWords = message.split(" ");
//     console.log(separatedWords);
//     let engravingPrice = pricePerWord * separatedWords.length;
//     return (engravingPrice);

// or

// return message.split(' ').length * pricePerWord;


//     // Change code above this line
// }
// console.log(calculateEngravingPrice("Web-development is creative work", 20));


// ==========================Задача============================================================================



// `Напишите функцию initSnake(str), которая преобразует стиль написания составных
// слов строки из CamelCase в snake_case, при котором несколько слов разделяются
// символом подчеркивания(_), причём каждое слово пишется с маленькой буквы.`


// function initSnake(str) {
//     let result = str.replace(/([A-Z])/g, " $1");
//     return result.split(' ').join('_').toLowerCase().substring(1);
//                                                     // или можно .slise(1)
// }

// console.log(initSnake('CamelCaseIsMoreFunToReadThenSnakeCase'));




// ==========================Задача============================================================================

// function slugify(title) {
//    let slug = title.toLowerCase(); 
//    console.log(slug);
//   return slug.replaceAll(' ','-');

// //   return title.replaceAll(' ', '-').toLowerCase();
//   }
//   console.log(slugify('Ten secrets of JavaScript'));



// function slugify(title) {
//   // Change code below this line
// let slug = title.toLowerCase().split(' '); 
//   return slug.join('-');
//   // Change code above this line
// }





// ==========================Задача============================================================================
// 17
// console.log("ok");
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line  
//   let NewArray = firstArray.concat(secondArray);
// console.log(NewArray);
//   if (NewArray.length > maxLength) {
//  NewArray = NewArray.slice(0,maxLength);
// }
// return NewArray;
// }
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));


// ==========================Задача============================================================================

// function calculateTotal(number) {
//     // Change code below this line
//      let total = 0;
//    for (let i = 0; i <= number; i++) {
//      total+=i;
//    }
//      return total;
// }
// console.log(calculateTotal(5));



// ==========================Задача============================================================================

// Find Longhest word in the string



// function findLongestWord(string) {
//   // Change code below this line

//   let stringSplit = string.split(" ");
//   let wordlength = 0;
//   let longestWordInString;
//   for (let i = 0; i < stringSplit.length; i++) {
//     wordlength = stringSplit.length;
//     if (stringSplit[i].length > wordlength) {
//       longestWordInString = stringSplit[i];
//       return longestWordInString;
//     }
//   }

// function findLongestWord(string) {
//   let wordlength = 0;
//   let longestWordInString;
//   const stringSplit = string.split(' ');

//   for (let i = 0; i < stringSplit.length; i++) {
//     let word = stringSplit[i];
//     if (word.length > wordlength) {
//       wordlength = word.length;
//       longestWordInString = wordlength;
//     }
//   }
//   return wordlength;
// }








// Самый лучший вариант!!!!!

function findLongestWord(string) {

  const stringSplit = string.split(' ');
  let longestWordInString = stringSplit[0];

  for (let i = 0; i < stringSplit.length; i++) {

    if (longestWordInString.length < stringSplit[i].length) {
      longestWordInString = stringSplit[i];
    }
  }
  return longestWordInString;
}

// Change code above this line


console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

//   // Change code above this line
// }

// const findLongestWord = function (str) {
//   let arrStr = str.split(' ');
//   let wordLength = 0;
//   let longestWord;

//   for (let i = 0; i < arrStr.length; i += 1) {
//     wordLength = arrStr[1].length;

//     if (arrStr[i].length > wordLength) {
//       longestWord = arrStr[i];

//       return longestWord;
//     }

//   }
// };

// // Вызовы функции для проверки
// console.log(
//   findLongestWord("May the force be with you")
// ); // вернет 'jumped'




// ==========================Задача============================================================================






// ==========================Задача============================================================================







// ==========================Задача============================================================================
