// Поверхностное копирование, spread оператор ...

// const obj =  {
//     a: 5,
//     b: 3
// };

// // передача по ссылке  
// // const copy = obj;
// function copy(mainObject) {
//    let objCopy = {};

//    let key; 
//    for(key in mainObject) {
//     objCopy[key] = mainObject[key];
//    }

//    return objCopy;
// }

// const numbers = {
//     a: 5,
//     b: 13,
//     c: {
//         z: 41,
//         x: 11
//     }
// };

// // let newNumbers = copy(numbers);

// // newNumbers.a = 12;
// const add = {
//     d: 17,
//     e: 21
// };

// // console.log(Object.assign(numbers, add));

// const ball = Object.assign({}, add);

// ball.d = 20;

// console.log(add);
// console.log(ball);

// // Создание копии массива

// // const array = ['a', 'd', 'e'];

// // const newArray = array.slice();  

// // newArray[2] = "кибернетика";
// // console.log(newArray);
// // console.log(array);

// //spread оператор

// const movie  = ['youtube','slack','windows'],
//       language  = ['js','java','kotlin'],
//       area  = [...movie, ...language,'list','vie'];


// console.log(area);
      
// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num  = [2, 7 ,13];

// (log(...num));

// const array  =  ['avi', 'savi'];

// const newArray  = [...array, 'levi'];

// console.log(newArray);

// const cars = {
//     mercedes: "banz",
//     toyota: "corolla"
// }

// const newCars = {...cars, mazda: "5"};

// console.log(newCars);

// // Динамическая типизация

// // превращение в строку.

// const a  = 14;

// console.log(typeof(a.toString()));

// // конкатенатенация

// console.log(typeof(14 + "sas"));

// const nums = 16; 

// console.log(`https://youtube.com/` + nums);

// const fontSize = 21 + 'px';

// // Превращение в число

// console.log(typeof(Number("12")));
// console.log(typeof(+"31"));

// //boolean 

// let switcher = null;

// switcher = 1;
// if(switcher) {
//     console.log("Работает");
// }


// console.log(typeof(Boolean("12")));
// console.log(typeof(!!"1231"));


// Замыкание и лексическое окружение

// let number = 5; debugger

// function logNumber(){
//     let number = 10; debugger
//     console.log(number);
// }

// number = 8;

// logNumber(); debugger


// function createCounter() {
//     let counter = 0;

//     const myFunction = function(){
//         counter += 1;
//         return counter;
//     }
//     return myFunction;
// }

// const increment = createCounter();
// const c2 = increment();  
// const c3 = increment();  
// const c4 = increment(); 

// console.log(c2,c3,c4);   

const now = new Date('2023-01-13');
 
// new Date.parse('2023-01-13');

console.log(now.setHours(18));

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

let start = new Date();

for (let i = 0; i < 10000; i++){
    let some = i ** 3
}

let end = new Date();

alert(`Цикл обработан за ${end -start} миллисекунд`)