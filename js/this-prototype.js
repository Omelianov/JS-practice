// !======================Task============================================

const pizzaPalace = {
    pizzas: ["Supercheese", "Smoked", "Four meats"],
    // Change code below this line
    getPizzas() {
        return this.pizzas;
    },
    checkPizza(pizzaName) {
        return this.pizzas.includes(pizzaName);
    },
    order(pizzaName) {
        const isPizzaAvailable = this.checkPizza(pizzaName);

        if (!isPizzaAvailable) {
            return `Sorry, there is no pizza named «${pizzaName}»`;
        }

        return `Order accepted, preparing «${pizzaName}» pizza`;
    },
    // Change code above this line
};

console.log(pizzaPalace.order("Big Mike"));



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






// !======================Task============================================





// !======================Task============================================






// !======================Task============================================






// !======================Task============================================






// !======================Task============================================







// !======================Task============================================






// !======================Task============================================







// !======================Task============================================





// !======================Task============================================






// !======================Task============================================




