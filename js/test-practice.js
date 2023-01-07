// console.log("ok");
// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = (courseTopic[0]);
// const lastElement =(courseTopic[courseTopic.length -1]);


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




// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase() ; // Change this line
  
//     return normalizedInput;
//   }

//   console.log(normalizeInput('MoNdEo'));



// function checkForName(fullName, name) {
//     const result = fullName.includes (name) ; // Change this line
//      return result;
//    }
//    console.log(checkForName('Петров Саша', 'саша'));

console.log('ok');

function checkForSpam(message) {
    let result;
    // Change code below this line
  messageToLowerCase = message.toLowerCase();
  result = messageToLowerCase.includes('spam') || messageToLowerCase.includes('sale');
    // Change code above this line
    return result;
  }

  console.log(checkForSpam("Amazing SalE, only tonight!"));