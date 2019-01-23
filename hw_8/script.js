//1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
let button= document.getElementById('btn-msg');
button.addEventListener('click', function(e){
    alert(button.getAttribute('data-text'));
});
//2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.
button.addEventListener('mouseover', function(){
    button.classList.add('btn-red')
});
button.addEventListener('mouseout', function(){
    button.classList.remove('btn-red')
});
//3.При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
let doc = document.body, tag = document.getElementById('tag');

doc.addEventListener('click', (e)=>{
    tag.innerHTML = `<strong>Tag:</strong> ${e.target.tagName}`;
});
//4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д 
let button2 = document.getElementById('btn-generate');
button2.addEventListener('click', (e)=>{
    let ul = document.querySelector('ul');
    ul.insertAdjacentHTML('beforeend', `<li>Item ${ul.children.length + 1}</li>`)
});
//5. Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none. При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно в тот  dropdown-item на котором произошел клик. При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться. При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться. 
let menuItem = document.getElementsByClassName('dropdown-item');

for(let i = 0; i<menuItem.length; i++){
    let k = menuItem[i].getElementsByClassName('dropdown-menu')[0];
    menuItem[i].addEventListener('click', (e)=>{
        k.classList.toggle('d-none');
        if ( i > 0 ){
        menuItem[i-1].getElementsByClassName('dropdown-menu')[0].classList.add('d-none');
        
        }else if(i==0){
            menuItem[i+1].getElementsByClassName('dropdown-menu')[0].classList.add('d-none');
        }
   
        
    });
    
}
