// var , let , const  - конструкция создания переменных 
// числа, строки, boolean, Infinity, NaN, undefind, null, symbol, Bigint, object, 
// числа
let number = 25;
// строки 
let persone = "Строковый тип данных "; 
let stringNumber = '11';
// boolean значения
const bool =  true; 
//Infinity
console.log(4/0);
//Nan 
console.log('sad'*3);
//null - переменной не существует   
//undefind
let validator;
// object, array- частный случай объекта

const object = {
    name : "Jhon",
    age : 23,
    isMarried : false
}

console.log(object.name);

//массив
let array = [1,3,4,5,2,-1,3];

console.log(array[1]);


// Task js

const storeName = 'Fusty';

const storeDescription = {
    budjet : 10000,
    employess : ['Marina', 'Andrey', 'Sergey'],
    products : {
        sweet : 300,
        tea : 200
    },
    open : true
}

// Работа с массивами 

// const arr = [1, 3, 5, 7, 2]

arr.sort(compare)
// Быстрая сортировка алгоритм 
function compare(a, b) {
    return a - b
}

console.log(arr)
// arr.pop()

// console.log(arr)

// arr.push(12)

// console.log(arr)    

// for ( let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// for (let value of arr){
//     console.log(value)
// }

arr.forEach(function(item, i, arr) {
    console.log(` иднекс элемента ${i} = значению  ${item} из массива ${arr}`)
})


const Ask = prompt("Введите фрукты через запятую", "")

const product = Ask.split(', ');

console.log(product)


// Передача по ссылке и по значению

let a = 5,
    b = a;
   
b = b + 5

console.log(b)
console.log(a)

const obj = {
    fName: 'Alice',
    lName: 'Vrunder',
    clothes: {
        chest: 'blouse',
        sneakers: 'adidas'
    }
}

// function copyrated (value){
//     let copy = {}
//     for(let key in value){
//         copy[key] = value[key];
//     }return copy
// }

// const person = copyrated(obj)
// person.fName = 'Slame'

// console.log(copyrated(person))
// console.log(obj)

const add = {
    hair: 'brown'
}

const colorHair = (Object.assign({},add))   
console.log(colorHair)


