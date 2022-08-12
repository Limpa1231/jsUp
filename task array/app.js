//Задача. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
arr = [1,2,3,4,5];
    for (let i = 0; i <arr.length; i++ ){
        console.log(arr[i] );
    }

//Задача. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.
let result = 1;
arr = [2,3,4,5];
    for (let i = 0; i <arr.length; i++ ){
        result *= arr[i];
    }

console.log(result)

//Задача. Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.
const obj = {
	Минск: 'Беларусь',
	Москва: 'Россия',
	Киев: 'Украина'
};

for (let key in obj) {
    console.log (`${key} - это ${obj[key]}.`)
}

//Выведите столбец чисел от 1 до 100 . While and for.

// function write(n) {
//     while (n< 100){
//         console.log(n);
//         n++;
//     }
// }
// console.log(write(1));

// function write(n) {
//     for (let i = 1; i < n ; i++){
//         console.log(i);
//     }
// }
// console.log(write(100));

// С помощью цикла найдите сумму чисел от 1 до 100.

// function sum(n) {
//     for (let i = 0; i < n; i++){
        
//     }
// }



// function spinWords(string){
//     for (let i = 0; i < string.length; i++){
//       let writeln;
//       if (string[i] =! typeof number){
//           writeln = string[i] 
//       }
//     }return writeln; 
//   }

// console.log(spinWords('Hey guys'));


// Вывести в консоль массив списка семьи

const family = ['Peter', 'Ann', 'Alex', 'Linda'];


function showFamily(array) {
    let person = array.join(" ")
    if(array.length > 0){
        return `Семья состоит из: ${person}`;
    }return 'Семья пуста';
}

console.log(showFamily(family))


// Написать функцию , которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// без функции

const value = favoriteCities.join("\n").toLowerCase()
console.log(value)

// функция
    const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
    
    function standardizeStrings(arr) {
        const value = arr.join("\n").toLowerCase()
        return value;
        }

    console.log(standardizeStrings(favoriteCities))
    // второй способ

    function standardizeStrings(arr) {
        arr.forEach(city => {
            console.log(city.toLowerCase())
        })
    }
    
    standardizeStrings(favoriteCities);


    const someString = 'This is some strange string';
function reverse(str) {
    return console.log(str.reverse())
}

reverse(someString)

function greet() {
    return "hello world"
}
console.log(greet)