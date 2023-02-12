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

// console.log(filterArray([1, 4, 5, 6, 3, 13], 3));



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

// const calculateTotalBalance = users =>
//     users.reduce((acc, user) => {
//         return acc + user.balance
//     }, 0);



// !======================Task============================================
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и 
// возвращала общее количество друзей(свойство friends) всех пользователей 
// из массива users.

// const getTotalFriendCount = users =>
//     users.reduce((acc, user) => {
//         return acc + user.friends.length
//     }, 0);




// !======================Task============================================
// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания,
//     по её возрастанию или убыванию.Дополни код так, чтобы в переменной 
//  ascendingReleaseDates получилась отсортированная по возрастанию копия 
//  массива releaseDates, а в переменной descendingReleaseDates копия 
//  отсортированная по убыванию.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);



// !======================Task============================================
// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору,
//     в алфавитном и обратном алфавитном порядке.Дополни код так, чтобы 
//     в переменной authorsInAlphabetOrder получилась отсортированная 
//     по алфавиту копия массива authors, а в переменной authorsInReversedOrder 
//     копия отсортированная в обратном алфавитном порядке.

// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));


// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);



// !======================Task============================================
// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по 
// имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный
//  по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный 
// по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный 
// по убыванию рейтинга.

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);


// !======================Task============================================

// const sortByAscendingBalance = users =>
//     [...users].sort((a, b) => a.balance - b.balance)
//     ;

// console.log(sortByAscendingBalance);

// !======================Task============================================

// Дополни код так, чтобы в переменной names получился массив имён авторов в 
// алфавитном порядке, рейтинг книг которых больше значения 
// переменной MIN_BOOK_RATING.

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//         title: "The Dreams in the Witch House",
//         author: "Howard Lovecraft",
//         rating: 8.67,
//     },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//     .filter(book => book.rating > MIN_BOOK_RATING)
//     .map(book => book.author)
//     // .sort((a, b) => a.author.localeCompare(b.author))
//     .sort()
//     ;

// console.log(names);


// !======================Task============================================
// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала 
// массив имён пользователей отсортированный по возрастанию количества 
// их друзей(свойство friends).

// const getNamesSortedByFriendCount = users =>
//     [...users]
//         .sort((a, b) => a.friends.length - b.friends.length)
//         .map(user => user.name)
//     ;

// console.log(getNamesSortedByFriendCount);

// !======================Task============================================
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив 
// уникальных имён друзей(свойство friends) отсортированный по алфавиту.



const users = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male"
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female"
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male"
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female"
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
        isActive: true,
        balance: 3951,
        gender: "male"
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Goldie Gentry", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
        isActive: false,
        balance: 1498,
        gender: "male"
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker", "Goldie Gentry"],
        isActive: true,
        balance: 2764,
        gender: "female"
    }
]



// const getSortedFriends = users => {
//     return [...users]
//         .flatMap(user => user.friends)
//         .filter((val, ind, user) => user.indexOf(val) === ind)
//         .sort()
// };
// console.log(getSortedFriends(users));




// !======================Task============================================

// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы 
// она возвращала общий баланс пользователей(свойство balance), пол
// которых(свойство gender) совпадает со значением параметра gender.

// const getTotalBalanceByGender = (users, gender) => {
//     return [...users]
//         .filter(user => user.gender === gender)
//         .reduce((acc, user) => acc + user.balance, 0)
// };

// console.log(getTotalBalanceByGender(users, "male"));


// !======================Task============================================



// !======================Task============================================




