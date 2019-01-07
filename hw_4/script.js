// 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)

function multiply(){
    let res = 1;
    for(let value of arguments){
        if(typeof value !== 'number')
            return 'some arguments are not numbers';
        res *= value;
    }
    if(arguments.length === 0){
        return 0
    } else{
        return res; 
    }
   
}

multiply(2, 3, 4);
// 2.Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
function reverseString(string){
        return string.split('').reverse().join('');
}
// 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: 
    function getCodeStringFromText(string){
        
        let newArr = [];
        for(let i = 0; i < string.length; i++){
            newArr.push(string.charCodeAt(i))
        }
        return newArr.join(' ');
    }
// 4.Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.
    function guessNumber(userNum){
        if(typeof userNum !== 'number')
            return'you entered not a number';
        let myNum = Math.ceil(Math.random()*10);
        if(userNum> 0 && userNum <= 10){
            if(userNum === myNum){
                return 'Вы выиграли'
            } else{
                return `Вы не угадали ваше число ${userNum} а выпало число ${myNum}`
            }
        }else{
            return 'number out of range';
        }

    }

// 5. Создать функцию, которая принимает число N и возвращает массив, заполненный числами от 1 до N: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
    function getArray(n){
        let numArr = [];
        for(i = n; i > 0; i--){
            numArr.push(i)
        }
        return numArr.reverse();
    }

// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива: doubleArray([1,2,3]) // [1,2,3,1,2,3]
    function doubleArray(userArr){
       return userArr.concat(userArr);
    }
// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений: changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
function changeCollection(userCollection){
    let cahgedArr = [];
    for(let elements of arguments){
        elements.shift();
        cahgedArr.push(elements);
    }
    return cahgedArr;
}
// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие у казанным параметрам.
function funcGetUsers(users, gender, male){
    if(arguments.length !== 3) return 'not enough arguments';
    let ourUser = [];
    for(let value of users){
    
        if(value[gender] == male)
        {
            ourUser.push(value)
        }
    }
    return ourUser;
}
