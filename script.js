//1.Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// Первая функция возвращает строку “New value: ” и результат обработки:

// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
function getNewString(arr, func) {
    let newString;

    return newString = 'New value: ' + func(arr);
};


function joinWords(arr) {
    let str = '', res = '';

    for (let elem of arr) {
        str += elem + ' ';
    };

    for (let i = 0; i < str.length; i++) {

        if (str[i - 1] === ' ' || i === 0) {
            res += str[i].toUpperCase();
        } else if (str[i] === ' ') {
                continue;
        } else {
            res += str[i];
        }
    }
    return res;
}
function multiplyTen(arr) {
    let str = '', res = '';

    for (let elem of arr) {
        str += elem * 10 + ', ';
    }

    return str;
};
function reverseArr(arr) {
    let newArr = [];

    for (let elem of arr) {
        newArr.push(elem.split('').reverse().join(''))
    }

    return newArr;
};

function userData(arr){
    let res = '';

    for (elem of arr) {
      res+=`${elem['name']} is ${elem['age']}, `
    }
    return res;
  }
getNewString([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], userData);
getNewString(['abc', '123'], reverseArr);
getNewString([10, 20, 30], multiplyTen);
getNewString(['my', 'name', 'is', 'Trinity'], joinWords);    

//2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив. 

function every(arr, func){
    if (Array.isArray(arr) === true) {
      return func(arr);
      
    } else { 
        return 'argument is not array'
    }
   };
   
function inspectArr(arr){
     for (let elem of arr){
       if (elem > 5) {
         continue;
       } else { return false}
     }
     return true;
   }

   every(5, inspectArr);

// Перебирающие методы. Задачи.
//1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив, каждый элемент которого будет хранить информацию о числе и его четности: [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
let arr =  [1,2,3,5,8,9,10];
let newArr = arr.map(function(value, index, arr){
 let obj = {};
 if (value%2) {
     return arr[index] = {digit: value, odd: true}
  } else {
    return arr[index] = {digit: value, odd: false}
  }
 
})
console.log(newArr);

// 2.Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.
let arr = [12, 4, 50, 0, 2, 18, 40];
let a = arr.every(function(b){
  return b !== 0;
});
console.log(a);

// 3.Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true
let arr2 = ['yes', 'hello', 'no', 'easycode', 'what'];
let c = arr2.some(function(lengthWord){
  return lengthWord.length > 3;
})
console.log(c);

//4.Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
let arr = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

function sortArr(prev, curr){
    if (prev.index > curr.index) return 1;
    if (prev.index < curr.index) return -1;
  };

arr.sort(sortArr);
console.log(arr);
let newString = arr.reduce(function(accum, current){
      return accum + current.char;
  }, '');
console.log(newString);
//Метод Sort. Задачи.
// 1. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
let a = [  [14, 45],  [1],  ['a', 'c', 'd']  ];
function sortArr2(prev, current){
  if (prev.length > current.length) return 1;
  if (prev.length < current.length) return -1;
};
a.sort(sortArr2);

// 2. Есть массив объектов:
 let pc = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
]

//Отсортировать их по возрастающему количеству ядер (cores).

function sortPc(prev, current){
    if (prev['info']['cores'] > current['info']['cores']) return 1;
    if (prev['info']['cores'] < current['info']['cores']) return -1;
  };
pc.sort(sortPc);
 