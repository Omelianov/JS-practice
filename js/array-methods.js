// ================ПОЛУЧАЕМ ВСЕ ЗЕЛЬЯ==============
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     // Change code below this line
//     getPotions() {
//         return this.potions
//     }
//     // Change code above this line
// };


// ================ДОБАВЛЯЕМ НОВОЕ ЗЕЛЬЕ==============
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//         // Change code below this line
//         this.potions.push(potionName);


//         // Change code above this line
//     },
// };


// ================УДАЛЯЕМ ЗЕЛЬЕ==============
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//         // Change code below this line

//         this.potions = this.potions.filter(potion => potion !== potionName);

//         // Change code above this line
//     },
// };


// ================ЗАМЕНЯЕМ ЭЛЕМЕНТ ПО НАЗВАНИЮ==============

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//         // Change code below this line
//         const bookIndex = this.books.indexOf(oldName);
//         this.books.splice(bookIndex, 1, newName);
//         // Change code above this line
//     },
// };

// или 

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//         this.potions = this.potions.map(potion =>
//             potion === oldName ? newName : potion
//         );
//     },
// };


// или 


// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//         // Change code below this line
//         const potionsIndex = this.potions.indexOf(oldName);
//         this.potions.splice(potionsIndex, 1, newName);
//         // Change code above this line
//     },
// };


// const potionsIndex = this.potions.indexOf(oldName);
// this.potions.splice(potionsIndex, 1, newName);



// this.potions = this.potions.map(potion =>
//     potion === oldName ? newName : potion);



// ================РАСШИРЯЕМ ИНВЕНТАРЬ==============

const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
        return this.potions;
    },

    addPotion(newPotion) {
        for (const potion of this.potions) {
            if (potion.name === newPotion.name) {
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
            }
        }
        this.potions.push(newPotion);
    },

    removePotion(potionName) {
        const potionIndex = this.potions.findIndex(
            (potion) => potion.name === potionName
        );

        if (potionIndex === -1) {
            return `Potion ${potionName} is not in inventory!`;
        }

        this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
        const potionIndex = this.potions.findIndex(
            (potion) => potion.name === oldName
        );

        if (potionIndex === -1) {
            return `Potion ${oldName} is not in inventory!`;
        }

        this.potions[potionIndex].name = newName;
    },

    // Change code above this line
};










