// 1. Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):

// function Component(tagName) {
//   this.tagName = tagName || 'div';
//   this.node = document.createElement(tagName);
// }

// Пример вызова:

// const comp = new Component('span');
class Component{
    constructor(tagName){
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
    }
}
const comp = new Component('span');
//2.Реализовать конструктор и методы в ES6 синтаксисе:

// function Component(tagName) {
//     this.tagName = tagName || 'div';
//     this.node = document.createElement(tagName);
//   }
  
//   Component.prototype.setText = function (text) { 
//     this.node.textContent = text;
//   };
class Component2{
    constructor(tagName){
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
    }
    setText(){
        this.node.textContent = text;
    }
}
const comp2 = new Component2('span');

//3.Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить, вычесть, умножить , разделить. Также у него должны быть геттер и сеттер для получения и установки текущего числа с которым производятся вычисления.
class Calculator{
    constructor(value){
        this._number = value;
    }
    plus(val){
        return this._number + val
    }
    minus(val){
        return this._number - val
    }
    multiply(val){
        return this._number * val
    }
    divide(val){
        return this._number / val
    }
    get number(){
        return this._number;
    }
    set number(value){
        this._number = value
    }
}

const calc = new Calculator(1);


// AJAX Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com используя класс созданный на занятии. Получив ответ от сервера вывести имена пользователей на страницу. При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. Для визуальной части можно использовать bootstrap или другие фреймворки. 
class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }

    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(data);
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
}
let usersArr = [];
const httpClient = new CustomHttp();

httpClient.get('https://jsonplaceholder.typicode.com/users', (response) => {
    usersArr = JSON.parse(response);
    let ul = document.getElementById('user-list');
    let span = document.getElementById('info');
    for (let value of usersArr){
        console.log(value)
        ul.insertAdjacentHTML('beforeend', `<li data-id="${value.id}">${value.name} </li>`)
    }
    

// let li = document.querySelectorAll('li');

ul.addEventListener('click', function (e) {
    console.log(e.target);
    let target = e.target;
    span.style.display = 'block';
    console.log(target.getAttribute('data-id'));
    for(let value of usersArr){
        if(target.getAttribute('data-id') == value.id){
            span.innerHTML = '';
            for(let val in value){ 
                console.log(val)
                if(val == 'company'){
                    span.insertAdjacentHTML('beforeend', `<div>company : </div>`)
                    
                    for(let key in value[val]){
                        span.insertAdjacentHTML('beforeend', `<div class="tab">${key} : ${value[val][key]}</div>`)
                    }
                } else if(val == 'address'){
                    span.insertAdjacentHTML('beforeend', `<div>address : </div>`)
                    
                    for(let key in value[val]){
                        span.insertAdjacentHTML('beforeend', `<div class="tab">${key} : ${value[val][key]}</div>`)
                    }
                } else{

                    span.insertAdjacentHTML('beforeend', `<div>${val} : ${value[val]}</div>`)
                }
            }
           
    
        }
        
    }
   
 })
});
