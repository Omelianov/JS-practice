// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,

// };

// let totalFeedback = 0;


// // !Перебор объектов=====================================

// // *чтобы вывести ключи

// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//     console.log(key);
//     // console.log(feedback[key]);    выведет значения, лучше так не делать, а вывести сразу через value 
//     // totalFeedback += feedback[key];
// }


// // *что бы вывести значения 

// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//     console.log(value);
//     totalFeedback += value;
//     console.log('totalFeedback: ', totalFeedback);

// }


//!------------ Работа с коллекцией (массивом объектов) -----------------------------

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];
// console.table(friends);

// for (const friend of friends) {
//     console.log(friend);

//     // console.log(friend.name);

//     friend.newprop = 5555;
// }
// console.table(friends);


// // Ищем друга по имени



// function findFriendByName(allFriends, name) {
//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.name);

//         if (friend.name === name) {
//             return "Found!!!";
//         }
//     }
//     return "NOT FOUND";
// }
// console.log(findFriendByName(friends, "Poly"));




// !Получить тмена всех друзей и запушить их в массив----------


// function getAllNames(allFriends) {
//     const names = [];

//     for (const friend of allFriends) {
//         console.log(friend.name);

//         names.push(friend.name);
//     }
//     return names;
// }
// console.log(getAllNames(friends));



// !Нужно получить всех друзей (полностью весь массив, а не только имена), которые online-----------------

// function getOnlineFriends(allFriends) {
//     const namesOnline = [];

//     for (const friend of allFriends) {

//         if (friend.online) {

//             // пушим весь объект
//             namesOnline.push(friend);
//         }
//     }
//     return namesOnline;
// }
// console.log(getOnlineFriends(friends));




// function getOfflineFriends(allFriends) {
//     const namesOffline = [];

//     for (const friend of allFriends) {

//         if (!friend.online) {

//             // пушим весь объект
//             namesOffline.push(friend);
//         }
//     }
//     return namesOffline;
// }
// console.log(getOfflineFriends(friends));


// СОртируем по статусу друзей

// function getFriendsByStatus(allFriends) {
//     const friendsByStatus = {
//         online: [],
//         offline: [],
//     };

//     for (const friend of allFriends) {

//         if (friend.online) {
//             friendsByStatus.online.push(friend);
//             continue;
//         }
//         friendsByStatus.offline.push(friend);
//     }
//     return friendsByStatus;
// }
// console.log(getFriendsByStatus(friends));



// !Операция spread (...) (распыление) -------------------------

// const numbers = [0, 5, 10, ...[1, 2, 3], 4, 5];
// console.log(numbers);



// // *поиск самого маленького и самого большого числа 

// const temps = [18, 14, 12, 23, 43, 10, 5];

// console.log(Math.max(...temps));
// console.log(Math.min(...temps));


// // !Если элементы в массиве простые (примитивы), то автоматически создается копия элементов и 
// // работаем с копией, а если элементы в массиве являются объектами (являюся сложными типами), то создаются
// // ссылки на эти элементы.

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// // в массив b распаковали или распылили массив a, не скопировали, 
// //     а именно создали ссылки
// const b = [...a]

// console.log(a);
// console.log(b);

// // если изменить значение x, то он измениться и в a и в b;
// a[0].x = 1000;

// console.log(a);
// console.log(b);

// // *Сшиваем несколько массивов в один через concat() и spread


// const keys = [];
// const values = [];
// const advert = {
//     service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     // Change code below this line

//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }


//     // Change code above this line
// }
// console.log(apartment);




// Напиши функцию countProps(object), которая считает и возвращает 
// количество собственных свойств объекта в параметре object.
// Используй переменную propCount для хранения количества свойств объекта.

// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line

//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     }

//     // Change code above this line
//     return propCount;
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));




// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;

//     const keys = Object.keys(object);
//     return Object.keys(object).length;
//     // Change code above this line
// }



// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(apartment);
// console.log(keys);
// console.log(values);




// *Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат,
//     где имя свойства это имя сотрудника, а значение свойства это зарплата.
//     Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
//     Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line

//     const values = Object.values(salaries);

//     for (let value of values) {
//         totalSalary += value;
//     }

//     // Change code above this line
//     return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));




// *Перебери массив объектов colors используя цикл for...of.
// Добавь в массив hexColors значения свойств hex, а в массив rgbColors 
// значения свойств rgb из всех объектов массива colors.

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {

//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);



// *Напиши функцию getProductPrice(productName) которая принимает один параметр
// productName - название продукта.Функция ищет объект продукта с таким именем
//     (свойство name) в массиве products и возвращает его цену(свойство price).
//     Если продукт с таким названием не найден, функция должна возвращать null.


// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     // Change code below this line

//     for (const product of products)

//         if (productName === product.name)
//             return product.price;
//     return null;

//     // Change code above this line
// }

// console.log(getProductPrice("Droid"));



// *Напиши функцию getAllPropValues(propName) которая принимает один параметр
// propName - имя(ключ) свойства.Функция должна вернуть массив всех значений 
// свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой
// массив.


// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line
//     const values = [];
//     for (const product of products) {
//         if (product[propName] !== undefined) {
//             values.push(product[propName]);
//         }
//     }
//     return values;


//     // Change code above this line
// }
// console.log(getAllPropValues("name"));



// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//     let totalPrice = 0;
//     for (const product of products) {
//         if (product.name === productName) {
//             totalPrice = product.price * product.quantity;
//             return totalPrice;
//         }

//     }
//     return 0;

//     // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Grip1"));


// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
// }

// console.log(hexColors);


// const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh }, } = forecast;