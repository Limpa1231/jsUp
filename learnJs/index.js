// Место для первой задачи
function firstTask() {

    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    for (let i = 0; i< arr.length; i++){
        result[i] = arr[i];
    }

    console.log(result)
    return result;
}

function secondTask() {

    const data = [5, 10, 'Shopping', 20, 'Homework'];
    for (let i = o; i< data.length; i++){
        if (typeof(data[i]) === 'number'){
            data[i] *= 2;
        }else if (typeof(data[i]) === 'string'){
            data[i] = `${data[i]} - done `;
    }
    return data;
    }
}
function thirdTask() {

    const data = [5, 10, 'Shopping', 20, 'Homework'];
    let result;
    result = data.reverse();
    return result;
}
function even_or_odd(number) {
    if(Math.abs(number) % 2 === 1){
      return 'Odd'
    }return 'Even'
  }
console.log(even_or_odd(-7));
console.log(even_or_odd(42));


function countBy(x, n) {
    let z = [];
    for (let i = 0, j = 1; i < n; i++,j++){
      z[i] = j * x;
    }
    return z;
  }
  
console.log(countBy(1,10))
console.log(countBy(2,5))

const massiv= [1,3,4,7,10].reduce((partialSum, a) => partialSum + a, 0);
    
console.log(sumMix);
const sum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0);
console.log(sum);


function highAndLow(numbers){
  let array = numbers.split(' ').map(function(item){
    return Number(item)
  })

  return {
  max : Math.max(...array),
  min : Math.min(...array),
}
};
console.log(highAndLow('2 3 10 13 -20 -50 312'));

highAndLow = function(x) {
  // split the string & map function to convert each element to number
  const newArray = x.split(' ').map(function(item) {
    return Number(item)
  })

  return {
    max: Math.max(...newArray),
    min: Math.min(...newArray),
  }
};

console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 12'));

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}


console.log(SumElement('3 5 1 7 2'))

//сумма квадрата элементов массива 1
const numbers = [1, 4, 9];
const double = numbers.map((num) => num ** 2)
const sumMix = double.reduce((Summa, a) => Summa + a, 0);
console.log(sumMix);

//сумма квадрата элементов массива 2
function squareSum(numbers) {
  const multiply = number => number * number
  const reducer = (acc, cur) => acc + cur
  return Array.from(numbers, multiply).reduce(reducer, 0)
}
console.log(squareSum('1 3 4 5'))
//сумма квадрата элементов массива 3
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}
//сумма квадрата элементов массива 4
function squareSum(numbers)
{ 
  let totalSum = 0;
  for (i=0;i<numbers.length;i++)
  {
    totalSum += Math.pow(numbers[i], 2);
  }
  return totalSum;
}
function betterThanAverage(classPoints, yourPoints) {
  let totalSum = 0;
  for (i=0;i<classPoints.length;i++)
  {
    totalSum += classPoints[i];
  }
  if (yourPoints > totalSum/+classPoints.lenght){
    return true
  }else return false
}

// массив кратных чисел до лимита
function findMultiples(int,limit){
  let result = []
  
  for (let i = int; i<=limit ; i+=int)
    result.push(i)
    
  return result
}

const arr = ['a', 'b','z', 'p'];
console.log(arr.map(letter => letter.charCodeAt(0) - 96))


function powersOfTwo(n){
  let result = []
  for(let i = 0 ; i <= n; i++){
    result.push(2 ** i);
  }
   return result;
 }
console.log(powersOfTwo(0))


