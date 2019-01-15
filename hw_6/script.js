//Зная структуру html, с помощью изученных методов получить (в консоль):
//1. head
console.log(document.head)
//2. body
console.log(document.body)

//3. все дочерние элементы body и вывести их в консоль.
console.log(document.body.children)
//4. первый div и все его дочерние узлы
console.log(document.body.firstElementChild)

//а) вывести все дочерние узлы в консоль
console.log(document.body.firstElementChild.children)
//б) вывести в консоль все дочерние узлы, кроме первого и последнего
let collection = document.body.firstElementChild.children;
for(let i = 1; i < (collection.length-1); i++){
    console.log(collection[i]);
}

//1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
//isParent(parent, child);
//isParent(document.body.children[0], document.querySelector('mark'));
// true так как первый див является родительским элементом для mark
//isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так ul НЕ является родительским элементом для mark
function isParent(parent, child){
    let childrenCollection = parent.children;
    for(let i = 0; i < childrenCollection.length; i++){
        if (childrenCollection[i] == child) {
            return true;
         } else {
             return false;
         }
     
    }
}
//2. Получить список всех ссылок, которые не находятся внутри списка ul
let linkCollection = document.links;
let notInUl = [];
for (let i = 0; i <linkCollection.length; i++){
    if(!linkCollection[i]['parentElement'].matches('li')){
        notInUl.push(linkCollection[i])
    } 
}
console.log(notInUl);
//3.Найти элемент, который находится перед и после списка ul
let ul = document.querySelector('ul');
ul.previousElementSibling //элемент, который находится перед ul
ul.nextElementSibling//элемент, который находится после списка ul

//4. Посчитать количество элементов li в списке
let listChildrenCount = document.querySelector('ul').children.length

//5. В коде с занятия написать функцию по редактированию задачи. 

/**
 * 
 * @param {String} id 
 * @param {String} title
 * @param {String} text
 */
const editTodoItem = (id, title, text) => {
    
    if (!text) return console.log("Передайте все нужные параметры для редактирования задачи: id, заголовок и текст ");
    for(let i = 0; i < todosStorage.currentTodos.length; i++){
        if (todosStorage.currentTodos[i].id == id){
            todosStorage.currentTodos[i].text = text;
            todosStorage.currentTodos[i].title = title;
            
        };
        
    };
  
}
