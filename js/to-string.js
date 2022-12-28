console.log('to string');

// number to string

let value = 0;

// 1 способ

let toString = String(value);
console.log(`${value}, через конструктор String()`, toString);
console.log(`тип данных ${value}, через конструктор String()`, typeof toString);

// 2 способ

toString = value + '';
console.log(`${value}, через конкотенацию`, toString);
console.log(`тип данных ${value}, через конкотенацию`, typeof toString);


value = 1;

// 1 способ

toString = String(value);
console.log(`${value}, через конструктор String()`, toString);
console.log(`тип данных ${value}, через конструктор String()`, typeof toString);

// 2 способ

toString = value + '';
console.log(`${value}, через конкотенацию `, toString);
console.log(`тип данных ${value}, через конкотенацию `, typeof toString);


// значение бесконечности

value = Infinity;

// 1 способ

toString = String(value);
console.log(`${value}, через конструктор String()`, toString);
console.log(`тип данных ${value}, через конструктор String()`, typeof toString);

// 2 способ

toString = value + '';
console.log(`${value}, через конкотенацию `, toString);
console.log(`тип данных ${value}, через конкотенацию `, typeof toString);


// значение не число
value = NaN;

// 1 способ

toString = String(value);
console.log(`${value}, через конструктор String()`, toString);
console.log(`тип данных ${value}, через конструктор String()`, typeof toString);

// 2 способ

toString = value + '';
console.log(`${value}, через конкотенацию `, toString);
console.log(`тип данных ${value}, через конкотенацию `, typeof toString);


// булевое значение true  к строке
value = true;

// 1 способ

toString = String(value);
console.log(`${value}, через конструктор String()`, toString);
console.log(`тип данных ${value}, через конструктор String()`, typeof toString);

// 2 способ

toString = value + '';
console.log(`${value}, через конкотенацию `, toString);
console.log(`тип данных ${value}, через конкотенацию `, typeof toString);


value = false;

// 1 способ

toString = String(value);
console.log(`${value}, через конструктор String()`, toString);
console.log(`тип данных ${value}, через конструктор String()`, typeof toString);

// 2 способ

toString = value + '';
console.log(`${value}, через конкотенацию `, toString);
console.log(`тип данных ${value}, через конкотенацию `, typeof toString);


undefined
value = undefined;

// 1 способ

toString = String(value);
console.log(`${value}, через конструктор String()`, toString);
console.log(`тип данных ${value}, через конструктор String()`, typeof toString);

// 2 способ

toString = value + '';
console.log(`${value}, через конкотенацию `, toString);
console.log(`тип данных ${value}, через конкотенацию `, typeof toString);


value = null;

// 1 способ

toString = String(value);
console.log(`${value}, через конструктор String()`, toString);
console.log(`тип данных ${value}, через конструктор String()`, typeof toString);

// 2 способ

toString = value + '';
console.log(`${value}, через конкотенацию `, toString);
console.log(`тип данных ${value}, через конкотенацию `, typeof toString);