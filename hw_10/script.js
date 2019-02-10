//1.Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.
function minus(x = 0){
    return function(y = 0){
         return x - y;
    }
}
//2.Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function MultiplyMaker ...
// const multiply = MultiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)
function MultiplyMaker(a){
    var i = 1;
    return function(a){
        return i = i * a;
    }
}
//3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

const str = (function(){
    let string = '';
    function setStr(val){
        if(!val){
            string = ''
        }else {
            string = val.toString();
        }
        
    };
    function getStr(){
        return string;
    }
    function getLength(){
        return string.length;
    }
    function reversStr(){

        return string.split("").reverse().join("");
    }
    return{
        setStr: setStr,
        getStr: getStr,
        reversStr: reversStr,
        getLength:getLength
    }

}());

//4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

const calculate = (function(){
    num = 0;
    function setNum(val){
        if(!val){
            num = 0
        }else {
            num = val;
        }
        
    };
    function numPlus(val){
        return num +=val;
    }
    function numMinus(val){
        return num -= val;
    }
    function multiplyNum(val){
        return num *= val;
    }
    function powNum(val){
        return Math.pow(num, val);
    }
    function divideNum(val){
        return num /= val;
    }
    function getRes(){

        return +num.toFixed(2);
    }
    return{
        setNum: setNum,
        numMinus:numMinus,
        numPlus: numPlus,
        multiplyNum: multiplyNum,
        getRes:getRes,
        powNum:powNum,
        divideNum,

    }

}());
const calculate2 = {


    num: 0,
    setNum: function(val){
        if(!val){
            this.num = 0
        }else {
            this.num = val;
        }
        
    },
    numPlus: function(val){
         this.num +=val;
         return this;
    },
    numMinus: function(val){
        this.num -= val;
        return this;
    },
    multiplyNum: function(val){
        return this.num *= val;
    },
    powNum: function(val){
        return Math.pow(this.num, val);
    },
    divideNum: function(val){
        return this.num /= val;
    },
    getRes: function(){

        return +this.num.toFixed(2);
    }
    

}

//Конструкторы
// 1.Создать конструктор для производства автомобилей. Конструктор должен принимать марку автомобиля и возраст машины. Конструктор должен иметь метод, который возвращает марку, и
// второй метод, который возвращает год производства машины (год текущий минус возраст машины, использовать Date для получения текущего года)
// var lexus = new Car(‘lexus’, 2);
// lexus.получитьМарку(); // “Lexus”
// lexus.получитьГодВыпуска(); // 2014 (2016-2);
// Марка машины всегда должна возвращаться с большой буквы!

function Car(brand, age){
    this.getBrand = function(){
        let arr = brand.split('');
        arr[0] = arr[0].toUpperCase();
        return arr.join('');
    }
    this.getIssueYear = function(){
        let date = new Date();
        let currentYear = date.getFullYear();
        return currentYear - age;
    }
}

// 2.Написать конструктор, который умеет элементарно шифровать строки (например, сделать из строки строку-перевертыш, или заменить все символы их цифровым представлением, или любой другой метод). Конструктор при инициализации получает строку и имеет следующие методы:
// 	a. показать оригинальную строку
// b. показать зашифрованную строку
// Строки не должны быть доступны через this, только с помощью методов.
function SpyString(str){
    this.showOrigin = function(){
        return str;
    }
    this.showSpy = function(){
        return str.split('').reverse().join('');
    }
}
