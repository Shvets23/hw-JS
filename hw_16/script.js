//1.Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// принимать, кроме name, название спутника (satelliteName). Переопределите метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
// дополнительный текст 'The satellite is' + satelliteName.

function Planet(name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    }
}
function PlanetWithSatellite(name, satelliteName){
    Planet.call(this, name);
    this.satelliteName = satelliteName;
    this.getName = function () {
        return 'Planet name is ' + this.name + '. The satellite is ' + this.satelliteName;
    }
}

//2.Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
// Создайте наследников этого класса:
// классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование 

// У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}

// У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)

function Building(name, floorCount){
    this.name = name;
    this.floorCount = floorCount;
    this.getFloor = function(){
        return "Количество этажей: " + this.floorCount;
    }
    this.setFloor = function(value){
        this.floorCount = value;
    }
}

function House(floorCount, flatCount){
    Building.call(this, floorCount);
    this.flatCount =flatCount;
    this.getFloor = function(){
        return {'этажи': floorCount, 'всегоКвартир': floorCount *flatCount}
        
    }
}

function ShoppingCenter(floorCount, storeCount){
    Building.call(this, floorCount)
    this.storeCount = storeCount;
    this.getFloor = function(){
        return {'этажи': floorCount, 'всегоМагазинов': floorCount *storeCount}
    }
}

let house2 = new House(5, 3);
let shoppingCenter2 = new ShoppingCenter(5, 3)

//3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и
// “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

function Furniture(name, price){
    this.name = name;
    this.price = price;
};
Furniture.prototype.getInfo = function(){
    return `Name: ${this.name}, Price: ${this.price}`
}

function HomeFurniture(name, price, color){
    Furniture.call(this, name, price);
    this.color = color;
    this.getInfo = function(){
        return `Name: ${this.name}, Price: ${this.price}, Color: ${this.color}`
    }
}

function OfficeFurniture(name, price, delivery){
    Furniture.call(this, name, price);
    this.delivery = delivery;
    this.getInfo = function(){
        return `Name: ${this.name}, Price: ${this.price}, Delivery: ${this.delivery}`
    }
}
let homeFurniture2 = new HomeFurniture('table', 5000, 'white');
let officeFurniture2 = new OfficeFurniture('chair', 1500, true);

// 4.Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
//     true/false, должно быть скрытым). Свойства определяются в момент вызова
//     конструктора.
//     У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации).
//     У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)
function User(name, date){
    this.name = name;
    this.date = date;
}
User.prototype.getInfo = function(){
    return `Name: ${this.name}, Date of registration: ${this.date}`
}
function Admin(name, date, superAdmin){
    User.call(this, name, date);
    this._superAdmin = superAdmin;
}
Admin.prototype.getInfo = function(){
    return `Name: ${this.name}, Date of registration: ${this.date}, Super admin: ${this._superAdmin}`
}
function Guest(name, date, validDate){
    User.call(this, name, date);
    this._validDate = validDate;
}
Guest.prototype.getInfo = function(){
    return `Name: ${this.name}, Date of registration: ${this.date}, Super admin: ${this._validDate}`
}
let admin2 = new Admin('Admin', '22.02', true);
let guest2 = new Guest('Guest', '20.03', '1 month');