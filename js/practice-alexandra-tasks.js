

// 1. 
// - Запроси у пользователя ввести его возраст в всплывающем окне браузера.
// - Проверь введенные пользователем данные:
// -- если это число от 0 до 18, не включая 18, то выведи в ответ сообщение, что далее он не может пользоваться данным ресурсом,
// -- если это число от 18 включительно и до 65, не включая его, то сообщите, что пользователь может пройти регистрацию,
// -- если число от 65 и выше - предложить пользователю связаться с центром обслуживания,
// -- если введено не число, вывести сообщение об ошибке.

console.log('ok');

// let userInput = prompt('Enter your age please');
// console.log('AGE:', userInput, typeof userInput, isNaN(userInput));
// let checkedValue = parseInt(userInput);
// // let checkedValue = parseFloat(userInput);
// let cancelValue = isNaN(userInput); // null => false
// console.log('checkedValue:', checkedValue);
// // '2' < 18
// if (cancelValue) {
//     alert('Incorrect number! Please enter the number')
// } else if (checkedValue < 18) {
//     alert('You cannot use it, sorry!')
// } else if (checkedValue >= 18 && checkedValue < 65) {
//     alert('You can authorize')
// } else if (checkedValue > 65) {
//     alert('Please call to customer service')
// } else {
//     console.log('User clicked CANCEL');
// }

// ====================================================================

// 2. 
// Сделай калькулятор.
// - Пусть пользователь вводит выражения типа "2+2" или "5-3" и так далее, а при нажатии на Ok, выводи ему результат выражения: 
// -- если его возможно вычислить и сообщение об ошибке,
// -- если выражение было введено не корректно. 

// // let expression = prompt('Enter the expression');
// let expression = ' 21  $  3   ';
// //                012
// console.log('EXPRESSION:', expression, typeof expression);
// // console.log(Number(expression));

// const isPlusExist = expression.includes('+');
// const isMinusExist = expression.includes('-');
// const isMultypleExist = expression.includes('*');
// const isDirExist = expression.includes('/');
// const isRestExist = expression.includes('%');
// const isPowExist = expression.includes('**');

// // if (!isPlusExist && !isMinusExist && !isMultypleExist && !isDirExist && !isRestExist && !isPowExist) {
// //     alert('Incorrect expression!')
// // }
// let result;
// if (isPlusExist) {
//     let idx = expression.indexOf('+');
//     // console.log('idx:', idx);
//     let firstNumber = Number(expression.slice(0, idx));
//     // console.log('firstNumber:', firstNumber, typeof firstNumber);
//     let lastNumber = Number(expression.slice(idx + 1));
//     // console.log('lastNumber:', lastNumber, typeof lastNumber);
//     result = firstNumber + lastNumber;
// } else if (isMinusExist) {
//     let idx = expression.indexOf('-');
//     // console.log('plusIdx:', idx);
//     let firstNumber = Number(expression.slice(0, idx));
//     // console.log('firstNumber:', firstNumber, typeof firstNumber);
//     let lastNumber = Number(expression.slice(idx + 1));
//     // console.log('lastNumber:', lastNumber, typeof lastNumber);
//     result = firstNumber - lastNumber;
// } else if (isMultypleExist) {
//     let idx = expression.indexOf('*');
//     // console.log('plusIdx:', idx);
//     let firstNumber = Number(expression.slice(0, idx));
//     // console.log('firstNumber:', firstNumber, typeof firstNumber);
//     let lastNumber = Number(expression.slice(idx + 1));
//     // console.log('lastNumber:', lastNumber, typeof lastNumber);
//     result = firstNumber * lastNumber;
// } else if (isDirExist) {
//     let idx = expression.indexOf('/');
//     // console.log('plusIdx:', idx);
//     let firstNumber = Number(expression.slice(0, idx));
//     // console.log('firstNumber:', firstNumber, typeof firstNumber);
//     let lastNumber = Number(expression.slice(idx + 1));
//     // console.log('lastNumber:', lastNumber, typeof lastNumber);
//     result = firstNumber / lastNumber;
// } else if (isRestExist) {
//     let idx = expression.indexOf('%');
//     // console.log('plusIdx:', idx);
//     let firstNumber = Number(expression.slice(0, idx));
//     // console.log('firstNumber:', firstNumber, typeof firstNumber);
//     let lastNumber = Number(expression.slice(idx + 1));
//     // console.log('lastNumber:', lastNumber, typeof lastNumber);
//     result = firstNumber % lastNumber;
// } else if (isPowExist) {
//     let idx = expression.indexOf('**');
//     // console.log('plusIdx:', idx);
//     let firstNumber = Number(expression.slice(0, idx));
//     console.log('firstNumber:', firstNumber, typeof firstNumber);
//     let lastNumber = Number(expression.slice(idx + 2));
//     console.log('lastNumber:', lastNumber, typeof lastNumber);
//     result = firstNumber ** lastNumber;
// } else {
//     alert('Incorrect expression!');
// }



// console.log('result:', result);


// ====================================================================


// 3. 
// - Попроси пользователя ввести свое имя и фамилию и выведи ему именное приветствие со значением имени и фамилии в регистре CamelCase или со значением anonymous, если имя не было введено.

// let name = prompt('Enter your name');
// let uName = '  John    Doe  '; // => false
// uName = uName.trim();

// let firstName, lastName; 

// if (uName.includes(' ')) {
//     let idx = uName.indexOf(' ')
//     firstName = uName.slice(0, idx);
//     lastName = uName.slice(idx).trim();
// } 

// if (!uName) {
//     uName = 'anonymous';
// } 
// if (lastName) {
//     uName = firstName + ' ' + lastName
// }

// let greeting = `Hello, ${uName}`
// console.log(greeting);

// ====================================================================

// 4. 
// Проверь полученную строку на наличие лишних пробелом перед началом, внутри и в конце строки, верни исправленное значение.

// let str = '   what   a   beautiful day   ! ';
// str = str.trim().replace(/ +/g, ' ');
// console.log(str);




// ====================================================================


// 5. 
// Найди и замени все символы "+" в строках на символ пробела:
// hrevtsova+123@yahoo.com
// s.hrevtsova+2453+22@gmail.com

// const uData = 'hrevtsova+123@yahoo.com s.hrevtsova+2453+22@gmail.com';
// const replaceWhat = '+';
// const replaceWith = ' ';
// const result = uData.replaceAll(replaceWhat, replaceWith);
// console.log(result);


// ====================================================================


// 6. 
// Посчитай и выведи результат, сколько гласных букв в строке:
// - "Есть только две бесконечные вещи: Вселенная и глупость. Хотя насчет Вселенной я не уверен."
// - "Теория — это когда все известно, но ничего не работает. Практика — это когда все работает, но никто не знает почему. Мы же объединяем теорию и практику: ничего не работает… и никто не знает почему!"
// - "Образование — это то, что остаётся после того, как забывается всё выученное в школе."

// let uInput = prompt ('Enter text here')
let uInput = 'Есть только две бесконечные вещи: Вселенная и глупость. Хотя насчет Вселенной я не уверен.';
let uInputToLowerCase = uInput.toLowerCase();
console.log(uInputToLowerCase);
let uInputSplit = uInput.split('');
console.log(uInputSplit);
const vowelsLetters = [ёуеыаоэяию];
uInputSplit.filter(vowelsLetters); 


// ====================================================================


// 7. 
// Попроси пользователя ввести дату рождения в формате: дд.мм.гггг
// - Выведи ответ пользователю с информацией:
// был ли этот год високосным и через сколько лет наступит его год по Восточному календарюю.
// Если пользователь указал дату в неверном формате, попроси его ввести ее снова, если он нажал cancel, то не запрашивай.