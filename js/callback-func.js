// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//         if (this.pizzas.includes(pizzaName)) {
//             return onSuccess(pizzaName);
//         } else {
//             return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//         }
//     }
// }

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//     return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);




// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     for (let i = 0; i < orderedItems.length; i += 1) {
//         totalPrice += orderedItems[i];
//     }

//     orderedItems.forEach(function (item) {
//         totalPrice += item;
//     });
// }




// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line

//     numbers.forEach(function (number) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     // Change code above this line
//     return filteredNumbers;
// }

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line

//     firstArray.forEach(function (number) {
//         if (secondArray.includes(number)) {
//             commonElements.push(number);
//         }
//     });

//     return commonElements;
//     // Change code above this line
// }




// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// const changeEven = (numbers, value) => {
//     // Change code below this line
//     const newArray = [];

//     numbers.forEach(function (number) {
//         if (number % 2 === 0) {
//             newArray.push(number = number + value)
//         } else newArray.push(number)
//     });

//     return newArray;

//     // Change code above this line
// }
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));



// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет.Обязательно используй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = [];
// planets.map(planet => { planetsLengths.push(planet.length) });

// console.log(planetsLengths);

// or

// const planetsLengths = planets.map(planet => planet.length);



// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} готовит ${dish}`);
//     };

//     return makeDish;
// };

// const mango = makeSheff('Mango');

// mango('сырники');


// const poly = makeSheff('Poly');

// poly('кофейку');


// !======================Task============================================



// Используя метод flatMap() сделай так, чтобы в переменной genres 
// получился массив всех жанров книг(свойство genres) из массива книг books.


// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism"],
//     },
// ];
// // Change code below this line
// const genres = books.map(book => book.genres);
// // const genres = books.flatMap(book => book.genres);
// console.log(genres);



// !======================Task============================================

// const getUserNames = users => {
//     return users.map(user => user.name

//     )
// };

// !======================Task============================================

// Дополни код так, чтобы в переменной evenNumbers получился массив чётных 
// чисел из массива numbers, а в переменной oddNumbers массив нечётных.
// Обязательно используй метод filter().


// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);


// console.log(evenNumbers);
// console.log(oddNumbers);



// !======================Task============================================

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction", "mysticism"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism", "adventure"],
//     },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// console.log(allGenres);
// // const uniqueGenres = allGenres.filter((genre) => uniqueGenres.indexOf(genre) === genre);
// // const uniqueGenres = [...new Set(allGenres)];



// // or

// const uniqueGenres = allGenres.filter((genre, index, allGenres) => allGenres.indexOf(genre) === index);

// console.log(uniqueGenres);


// !======================Task============================================

// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она 
// возвращала массив пользователей, возраст которых(свойство age) попадает в промежуток от minAge до maxAge.

// const getUsersWithAge = (users, minAge, maxAge) => {

//     return users.filter(user => user.age > minAge && user.age < maxAge)
// };


// !======================Task============================================

// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала 
// массив пользователей у которых есть друг с именем в параметре friendName.
// Массив друзей пользователя хранится в свойстве friends.

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {

//     return users.filter(user => user.friends.includes(friendName))
// };
// // Change code above this line





// !======================Task============================================
// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре 
// для каждого игрока, и получить общую сумму этих времён.Рассчитать время для 
// каждого из игроков, можно разделив его время(свойство playtime) на количество
// игр(свойство gamesPlayed).

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//     return acc + player.playtime / player.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame);


// !======================Task============================================
// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и 
// возвращала сумму всех средств(свойство balance) которые хранят пользователи 
// из массива users.

const calculateTotalBalance = users =>
    users.reduce((acc, user) => {
        return acc + user.balance
    }, 0);



// !======================Task============================================
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и 
// возвращала общее количество друзей(свойство friends) всех пользователей 
// из массива users.

// const getTotalFriendCount = users =>
//     users.reduce((acc, user) => {
//         return acc + user.friends.length
//     }, 0);




// !======================Task============================================






// !======================Task============================================






// !======================Task============================================






// !======================Task============================================






// !======================Task============================================


