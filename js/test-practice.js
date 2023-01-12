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


//     // Change code above this line
// }
// console.log(calculateEngravingPrice("Web-development is creative work", 20));


// ==========================Задача============================================================================



// `Напишите функцию initSnake(str), которая преобразует стиль написания составных
// слов строки из CamelCase в snake_case, при котором несколько слов разделяются
// символом подчеркивания(_), причём каждое слово пишется с маленькой буквы.`


function initSnake(str) {
    let result = str.replace(/([A-Z])/g, " $1");
    return result.split(' ').join('_').toLowerCase().substring(1);
}

console.log(initSnake('CamelCaseIsMoreFunToReadThenSnakeCase'));




// ==========================Задача============================================================================