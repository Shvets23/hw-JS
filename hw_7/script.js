//1. Найти параграф и получить его текстовое содержимое (только текст!)
let p = document.querySelector('p').innerHTML;
console.log(p);
//2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0)
function infoNode(node){
    let res = {
        'type': 0,
        'name':'',
        'children': 0
    };
    res['type'] = node.nodeType;
    res['name'] = node.nodeName;
    if (node.children.length > 0){
        res['children'] = node.children.length
    } else {
        res['children'] =0
    }
    return res;
};
//3.Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

let getTextFromUl = (ul) =>{
    let listChildren = ul.children,
    res = [];
    for (let i = 0; i < listChildren.length; i++){
        res.push(listChildren[i].innerText);
    }
    return res;
};

//4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
//-text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
let changeInner = () =>{
    let p = document.querySelector('p'), pChildren = p.childNodes;
    for (let i = 0; i < pChildren.length; i++) {
        if (pChildren[i].nodeType == 3){
             pChildren[i].textContent = '-text-';

        } else {
            continue;
        }
    }
    return document.querySelector('p');
};
// Свойства. Задачи.
// 1. Найти в коде список ul и добавить класс “list”
let ul = document.querySelector('ul');
ul.classList.add('list');
console.log(ul);
//2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
let a = document.querySelector('ul').nextElementSibling.nextElementSibling;
a.id = 'link';
//3. На li через один (начиная с самого первого) установить класс “item”
let addClass = () =>{
    let ulChildren = document.querySelector('ul').children;
    for (let i = 0; i < ulChildren.length; i+=2) {
        
            ulChildren[i].id =('item');
        
    }
    return ulChildren;
};
// 4. На все ссылки в примере установить класс “custom-link”
let addClass2 = () =>{
    let links = document.links;
    for (let value of links){
        value.classList.add('custom-link')
    }
    return links;
}

//1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li
let addLi = () =>{
    let ul = document.querySelector('ul'),
    ulChildren = ul.children;
    ul.insertAdjacentHTML('beforeend', `<li class="new-item">item${ulChildren.length+1}</li>`);

};
//2.В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong). 
let addStrong = () => {
    let ulChildren = document.querySelector('ul').children;
    for (let value of ulChildren) {
        value.querySelector('a').innerHTML = `<strong>${value.querySelector('a').innerHTML}</strong>`
    }
};
//3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 
let img = document.createElement('img');
img.setAttribute('src', 'https://cdn.igromania.ru/mnt/articles/5/4/6/b/a/6/29232/preview/9b459f274856c1ea_848x477.jpg');
img.setAttribute('alt', 'be happy');
document.body.insertBefore(img, document.body.firstChild);
//4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
let mark = document.querySelector('mark');
mark.insertAdjacentText('beforeend', ' green');
mark.classList.add('green');
mark.setAttribute('style', 'background-color: green, color:white');

//5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
let ul2 = document.querySelector('ul'),
list = ul2.getElementsByTagName('li'),
array = [];
function compareNumeric(a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
  }
for (let li of list){
    array.push(li.innerHTML);
    array.sort(compareNumeric);
}
 for (let i = 0; i < array.length; i++){
     list[i].innerHTML = array[i];
 }




	

