// !======================Task============================================

// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     // Change code below this line
//     getPizzas() {
//         return this.pizzas;
//     },
//     checkPizza(pizzaName) {
//         return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//         const isPizzaAvailable = this.checkPizza(pizzaName);

//         if (!isPizzaAvailable) {
//             return `Sorry, there is no pizza named «${pizzaName}»`;
//         }

//         return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//     // Change code above this line
// };

// console.log(pizzaPalace.order("Big Mike"));



// !======================Task============================================


// class Storage {
//     constructor(items) {
//         this.items = items;
//     }

//     getItems() {
//         return this.items;
//     }

//     addItem(newItem) {
//         this.items.push(newItem);
//     }

//     removeItem(itemToRemove) {
//         this.items = this.items.filter(item => item !== itemToRemove);
//     }
// }




// !======================Task============================================

// class StringBuilder {
//     constructor(value) {
//         this.value = value;
//     }

//     getValue() {
//         return this.value;
//     }

//     padEnd(str) {
//         this.value += str;
//     }

//     padStart(str) {
//         this.value = str += this.value;
//     }
//     padBoth(str) {
//         this.value = str + this.value + str;
//     }

// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="



// !======================Task============================================
// class Car {
//     // Change code below this line
//     static MAX_PRICE = 50000;
//     #price;

//     constructor({ price }) {
//         this.#price = price;

//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         if (newPrice <= Car.MAX_PRICE) { this.#price = newPrice };

//     }
//     // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000





// !======================Task============================================
// class Car {
//     static #MAX_PRICE = 50000;
//     // Change code below this line

//     static checkPrice(price) {

//         if (price > Car.#MAX_PRICE) return "Error! Price exceeds the maximum";
//         return "Success! Price is within acceptable limits"
//     }

//     // Change code above this line
//     constructor({ price }) {
//         this.price = price;
//     }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"





// !======================Task============================================

// class User {
//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
// // Change code below this line

// class Admin extends User {
//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser"
//     }
// }





// !======================Task============================================

// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {
//     // Change code below this line
//     constructor({ email, accessLevel }) {
//         super(email, accessLevel);
//         User.AccessLevel = accessLevel;
//     }

//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };

//     // Change code above this line
// }

// const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"



// !======================Task============================================






// !======================Task============================================







// !======================Task============================================






// !======================Task============================================







// !======================Task============================================





// !======================Task============================================






// !======================Task============================================




