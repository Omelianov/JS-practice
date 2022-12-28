
// =====  To number  ===========


// string to number ====== любое строчное значение к числу  

let value = "Bla bla bla bla";

// 1 способ

let toNumber = Number(value);
console.log(`${value}, через конструктор Number()`, toNumber);
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber);

// 2 способ

toNumber = +value;
console.log(`${value}, через унарный +`, toNumber);
console.log(`тип данных ${value}, через унарный +:`, typeof toNumber);




// let sum = Number(value + value);
// console.log(sum);
// console.log(typeof sum);


// ======  строчное число к числу  ========

value = "2342435";

// 1 способ

toNumber = Number(value);
console.log(`${value}, через конструктор Number()`, toNumber);
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber);

// 2 способ

toNumber = +value;
console.log(`${value}, через унарный +`, toNumber);
console.log(`тип данных ${value}, через унарный +:`, typeof toNumber);


// ======  пустая строка к числу  ========

value = "";

// 1 способ

toNumber = Number(value);
console.log(`пустая строка ${value}, через конструктор Number():`, toNumber);
console.log(`тип данных пустой строки ${value}, через конструктор Number():`, typeof toNumber);

// 2 способ

toNumber = +value;
console.log(`пустая строка ${value}, через унарный +`, toNumber);
console.log(`тип данных пустой строки ${value}, через унарный +:`, typeof toNumber);


// ======  строка с пробелом к числу  ========

value = " ";

// 1 способ

toNumber = Number(value);
console.log(`строка с пробелом ${value}, через конструктор Number():`, toNumber);
console.log(`тип данных строки с пробелом ${value}, через конструктор Number():`, typeof toNumber);

// 2 способ

toNumber = +value;
console.log(`строка с пробелом ${value}, через унарный +`, toNumber);
console.log(`тип данных строки с пробелом ${value}, через унарный +:`, typeof toNumber);


// булевое значение true  к числу
value = true;

// 1 способ

toNumber = Number(value);
console.log(`${value}, через конструктор Number()`, toNumber);
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber);

// 2 способ

toNumber = +value;
console.log(`${value}, через унарный +:`, toNumber);
console.log(`тип данных ${value}, через унарный +:`, typeof toNumber);


value = false;

// 1 способ

toNumber = Number(value);
console.log(`${value}, через конструктор Number()`, toNumber);
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber);

// 2 способ

toNumber = +value;
console.log(`${value}, через унарный +:`, toNumber);
console.log(`тип данных ${value}, через унарный +:`, typeof toNumber);


// undefined к числу

value = undefined;

// 1 способ

toNumber = Number(value);
console.log(`${value}, через конструктор Number()`, toNumber);
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber);

// 2 способ

toNumber = +value;
console.log(`${value}, через унарный +:`, toNumber);
console.log(`тип данных ${value}, через унарный +:`, typeof toNumber);



value = null;

// 1 способ

toNumber = Number(value);
console.log(`${value}, через конструктор Number()`, toNumber);
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber);

// 2 способ

toNumber = +value;
console.log(`${value}, через унарный +:`, toNumber);
console.log(`тип данных ${value}, через унарный +:`, typeof toNumber);