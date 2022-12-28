// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Change code below this line
//     let totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//     let message = (`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`);
  
  
//     // Change code above this line
//     console.log(message);
    
//   }




// let pricePerDroid = 3000;
// let orderedQuantity = 4;
// let customerCredits = 10000;


// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity;
//     if (totalPrice > customerCredits) {
//       message = "Insufficient funds!";
//     }
//     else 
//       message =  "You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left";
//     // Change code above this line
//     return message;
//   }

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity;
//   let creditsLeft = customerCredits - totalPrice;
//     if (totalPrice <= customerCredits) {
//       message =  `You ordered ${orderedQuantity} droids, you have ${creditsLeft} credits left`;
//     }
//     else 
//   message = "Insufficient funds!";
//     // Change code above this line
//     return message;
//   }

// let available = 100;
// let ordered = 60;
// let storage = checkStorage


// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
  
//     if (ordered === 0) {
//       message = `There are no products in the order!`;
//     } if (ordered > available) {
//       message = `Your order is too large, there are not enough items in stock!`;
//     }
//     else {
//       message = `The order is accepted, our manager will contact you`
//     }
//     // Change code above this line
//     return message;
//   }
//   console.log(storage);