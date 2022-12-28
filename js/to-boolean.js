// =====  To boolean  ===========


// string to boolean ====== любое строчное значение к boolean  

let value = "Bla bla bla bla";

// 1 способ

let toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean()`, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean():`, typeof toBoolean);

// 2 способ

toBoolean = !!value;
console.log(`${value}, через !!`, toBoolean);
console.log(`тип данных ${value}, через !!:`, typeof toBoolean);


// ======  строчное число к boolean  ========

value = "3232323";

// 1 способ

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean()`, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean():`, typeof toBoolean);

// 2 способ

toBoolean = !!value;
console.log(`${value}, через !!`, toBoolean);
console.log(`тип данных ${value}, через !!:`, typeof toBoolean);



// ======  пустая строка к boolean  ========

value = "";

// 1 способ

toBoolean = Boolean(value);
console.log(`пустая строка ${value}, через конструктор Boolean()`, toBoolean);
console.log(`тип данных пустой строки ${value}, через конструктор Boolean():`, typeof toBoolean);

// 2 способ

toBoolean = !!value;
console.log(`пустая строка ${value}, через !!`, toBoolean);
console.log(`тип данных пустой строки ${value}, через !!:`, typeof toBoolean);


// ====== строка с пробелом к boolean  ========

value = " ";

// 1 способ

toBoolean = Boolean(value);
console.log(`строка с пробелом ${value}, через конструктор Boolean()`, toBoolean);
console.log(`тип данных строки с пробелом  ${value}, через конструктор Boolean():`, typeof toBoolean);

// 2 способ

toBoolean = !!value;
console.log(`строка с пробелом ${value}, через !!`, toBoolean);
console.log(`тип данных пстроки с пробелом  ${value}, через !!:`, typeof toBoolean);


// ====== число к boolean  ========

value = 0;

// 1 способ

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean()`, toBoolean);
console.log(`${value}, через конструктор Boolean():`, typeof toBoolean);

// 2 способ

toBoolean = !!value;
console.log(`${value}, через !!`, toBoolean);
console.log(`${value}, через !!:`, typeof toBoolean);


value = 344;

// 1 способ

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean()`, toBoolean);
console.log(`${value}, через конструктор Boolean():`, typeof toBoolean);

// 2 способ

toBoolean = !!value;
console.log(`${value}, через !!`, toBoolean);
console.log(`${value}, через !!:`, typeof toBoolean);


// ====== undefined boolean  ========

value = undefined;

// 1 способ

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean()`, toBoolean);
console.log(`${value}, через конструктор Boolean():`, typeof toBoolean);

// 2 способ

toBoolean = !!value;
console.log(`${value}, через !!`, toBoolean);
console.log(`${value}, через !!:`, typeof toBoolean);


// ====== null boolean  ========

value = null;

// 1 способ

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean()`, toBoolean);
console.log(`${value}, через конструктор Boolean():`, typeof toBoolean);

// 2 способ

toBoolean = !!value;
console.log(`${value}, через !!`, toBoolean);
console.log(`${value}, через !!:`, typeof toBoolean);

// ====== NaN boolean  ========

value = NaN;

// 1 способ

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean()`, toBoolean);
console.log(`${value}, через конструктор Boolean():`, typeof toBoolean);

// 2 способ

toBoolean = !!value;
console.log(`${value}, через !!`, toBoolean);
console.log(`${value}, через !!:`, typeof toBoolean);


// ====== NaN boolean  ========

value = Infinity;

// 1 способ

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean()`, toBoolean);
console.log(`${value}, через конструктор Boolean():`, typeof toBoolean);

// 2 способ

toBoolean = !!value;
console.log(`${value}, через !!`, toBoolean);
console.log(`${value}, через !!:`, typeof toBoolean);