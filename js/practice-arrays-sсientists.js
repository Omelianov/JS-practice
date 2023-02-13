const arr = [{ name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
{ name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
{ name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
{ name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
{ name: "Pierre", surname: "Curie", born: 1859, dead: 1906, id: 5 },
{ name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 6 },
{ name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 7 },
{ name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 8 },
{ name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 9 },
{ name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 10 },
{ name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 11 },
{ name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 12 },
{ name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 13 }];

console.log("ok");

// !Получить массив ученых, родившихся в 19 веке.

// const bornedInIXX = arr.filter((element) => {
//     const scientistsIXX = element.born > 1799 && element.born < 1900;
//     return scientistsIXX;
// })
// console.log(bornedInIXX);

// const bornedInIXX = arr.filter((element) => element.born > 1799 && element.born < 1900)
// console.log(bornedInIXX);

// !Найти общую сумму лет, сколько прожили все ученые.

// const totalScientistsYears = arr.reduce((memo, scientist) => memo += scientist.dead - scientist.born, 0)
// console.log(totalScientistsYears);

// Отсортировать ученых по алфавиту.

// const sortByName = arr.slice().sort((a, b) => { return a.surname > b.surname ? 1 : -1 })
// console.log(sortByName);

// const sortByName = arr.slice().sort((a, b) => a.surname > b.surname ? 1 : -1);
// console.log(sortByName);

// !Отсортировать ученых по количеству прожитых лет.

// const sortScientistsAgeOfLife = [...arr].sort((min, max) => { const minAge = min.dead - min.born; const maxAge = max.dead - max.born; return minAge - maxAge });

// const sortScientistsAgeOfLife = [...arr].sort((min, max) => (min.dead - min.born) - (max.dead - max.born));


// console.log(sortScientistsAgeOfLife);
// console.log(sortScientistsAgeOfLife === arr);


// !Удалить из массива ученых, родившихся в 15, 16 или 17 веках.


// const deleteSomeScientists = arr.filter((scientist) => { return scientist.born <= 1399 || scientist.born > 1700 });

// const deleteSomeScientists = arr.filter((scientist) => scientist.born <= 1399 || scientist.born > 1700);


// console.log(deleteSomeScientists);


// !Найти ученого, который родился позже всех.

// const lastBornScientist = ([...arr].sort((a, b) => { return a.born - b.born })).pop();


// // const last = lastBornScientist.pop();

// console.log(lastBornScientist);
// // console.log(last);



// !Найти год рождения Albert Einstein. 

// const scientistName = "Einstein";

// const einsteinAgeBirth = arr.find((elem) => {
//     if ((elem.name.concat(" ", elem.surname)) || elem.name || elem.surname === scientistName) {

//         return elem.born

//     };
// })

// console.log(einsteinAgeBirth.born);



// !Найти ученых, фамилия которых начинается на букву "С".

// const scientistsNameStartsC = arr.filter(({ surname }) => {

//     console.log(surname);
//     return surname.startsWith("C")
// })


// const scientistsNameStartsC = arr.filter(({ surname }) => surname.toUpperCase().startsWith("C"));

// console.log(scientistsNameStartsC);



// !Удалить из массива всех ученых, имя которых начинается на букву "A".

// const scientistsNameStartsA = arr.filter(({ name }) => !name.toUpperCase().startsWith("A"));

// console.log(scientistsNameStartsA);


// !Найти ученого, который прожил больше всех и ученого, который меньше.

// const sortScientistAgeLived = [...arr].sort((a, b) => (a.dead - a.born) - (b.dead - b.born));

// console.log(sortScientistAgeLived);

// const scientistAgeLivedMin = sortScientistAgeLived[0];

// const scientistAgeLivedMax = sortScientistAgeLived[sortScientistAgeLived.length - 1];

// console.log(scientistAgeLivedMin);
// console.log(scientistAgeLivedMax);


// !Найти ученых, у которых совпадают первые буквы имени и фамилии.

// const scientistsWithCommonFirstLetters = arr.filter((scientist) => {
//     return scientist.name.charAt(0) === scientist.surname.charAt(0)
// })

// console.log(scientistsWithCommonFirstLetters);



//     !Узнать, все ли ученые работали в 19 веке.

// const scientWhoNotWorkInIXX = arr.filter((scientist) => { return scientist.dead < 1810 || scientist.dead > 1895 })

// console.log(scientWhoNotWorkInIXX);