// Задача на вложенные циклы: изобразить фигуру с помощью знака asteriks 
// *
// **
// ***
// ****
// *****
// ******

// const lenght = 7
// let result = ''

// for(let i = 1; i<lenght; i++){
//     for(let j = 0 ; j<i; j++){
//         result += '*'
//     }

//     result += '\n'
// }

// console.log(result)


//Задача на преобразование времени в часы и минуты (до 10 часов)

    function getTimeFromMinutes(minut) {
        if(minut/60 === 0 || Math.floor(minut/60) > 4){
            return `Это ${Math.floor(minut/60)} часов и ${minut%60} минут`
        }else if(minut/60 <5 && Math.floor(minut/60) > 1){
            return  `Это ${Math.floor(minut/60)} часа и ${minut%60} минут`
        }else if(minut < 0 || typeof(minut) !== 'number' || Number.isInteger(minut) === false ){
            return "Ошибка, проверьте данные"
        }return `Это ${Math.floor(minut/60)} час и ${minut%60} минут`
    }

    console.log(getTimeFromMinutes(50.5))


//Задача. Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них.
//Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
    function findMaxNumber(a, b, c, d) {
     if(typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number')
        {
            return 0;
        }else{
             return Math.max(a, b, c, d)
        }
    }

    console.log(findMaxNumber(1, 5, 10, 11))
    console.log(findMaxNumber(1, 3, 4,))


function findMaxNumber(a, b ,c, d) {
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

console.log(findMaxNumber(1, 5, 6.6, 10.5));
console.log(findMaxNumber(1, 5, 6, '10'));

// calback function 

function first () {
    //Do something 
    setTimeout(function () {
        console.log(1)

    }, 500)
}

function second () {
    console.log(2)
}

first()
second()

function learnJs (lang, callback) {
    console.log(`Изучаю язык ${lang}`)
    callback()
}

function done () {
    console.log('Я прошёл этот урок')
}

console.log(learnJs('JavaScript', done))