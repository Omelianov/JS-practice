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

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
];
console.table(friends);

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
