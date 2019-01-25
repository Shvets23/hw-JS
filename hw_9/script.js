//Деструктурирующее присваивание. Задачи.
//1.Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

    function argObject(var1, ...rest){
        let obj = {var1, rest};
        return obj;
    };

//2. Организовать функцию getInfo, которая принимает объект вида
//{ name: ...,  info: { employees: [...], partners: [ … ]  } }
//и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:
const organisation = {  
    name: 'Google',   
    info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   } 
  };
 function getInfo({name = 'Unknown', info={partners:['Microsoft','Facebook']}} = {}){
     console.log(`Name: ${name}`)
     console.log(`Partners: ${info.partners[0]} ${info.partners[1]}`)
     
 }
 //Функции стрелки. Задачи.
//1.Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):

//function sum() {
//     const params = Array.prototype.slice.call(arguments);
//     if (!params.length) return 0;
//     return params.reduce(function (prev, next) { return prev + next; });
//   }
  
//   sum(1, 2, 3, 4); // 10
//   sum(); // 0
let sum = (...arguments) =>{
    const params = Array.prototype.slice.call(arguments);
    if (!params.length) return 0;
    return params.reduce( (prev, next)=> { return prev + next; });

}

//This. Задачи.
//1. Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};
const rectangle = {
    width: 10,
    height: 5,
    getSquare: function(){
        return this.width + this.height;
    }
}
//2.Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5

const price = {
        price: 10,
        discount: '15%',
        getPrice: function(){
            return 'price: ' + this.price;
        },
        getPriceWithDiscount: function(){
            return 'price with discount: ' + this.price * (1 -(parseFloat(this.discount))/100);
        }
    };

//3.Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:

 let objHeight = {
     height: 10,
     increaseHeight: function(){
         return this.height +=1;
     }
 };
 //4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
const numerator = {
    value: 1,
    double: function () {
        this.value*=2;
        return this;
    },
    plusOne: function () {
        this.value += 1;
        return this;
    },
    minusOne: function () {
        this.value -=1;
        return this.value;
    },
};

//1. Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)

let products = {
    price: 10,
    count: 20,
    getTotalPrice: function(){
        return this.price*this.count
    }
}
// 2. Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.
let ditails = {
    count: 15,
    price:10,
    

}

products.getTotalPrice.call(ditails);
//3. Даны объект и функция:
// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes
let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};

getSquare.call(sizes);

// 4.  
// let element = {
//     height: 25,
//     getHeight: function () {return this.height;}
// };

// let getElementHeight = element.getHeight;
// getElementHeight(); // undefined

// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.
let element = {
        height: 25,
        getHeight: function () {return this.height;}
    };

let getElementHeight = element.getHeight.bind(element);


  