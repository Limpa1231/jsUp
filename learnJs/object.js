const options = {
    name: 'graves',
    width: 1024,
    heigh: 1600,
    colors: {
        border: 'balck',
        bg: 'white'
    },
    makeTest: function(){
        console.log('Колибровка')
    }
}

// Деструктуризация 

const {border, bg} = options.colors
console.log(bg)
options.makeTest()

console.log(Object.keys(options).length)

// let counter = 0

//     for(let key in options){
//         if(typeof(options[key]) === 'object'){
//             for(let i in options[key]){
//                 console.log(`Полю ${i} соответсвует значение ${options[key][i]}`)
//                 counter++
//             }
//         }else{
//             console.log(`Полю ${key} соответсвует значение ${options[key]}`)
//             counter++
//         }
//     }
// console.log(counter)



