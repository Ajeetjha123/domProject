var headerTitle  = document.getElementById('header-title');
var header = document.getElementById('main-header');
headerTitle.textContent='Hello';
header.style.borderBottom = 'solid 3px #000';
var addItem = document.getElementsByClassName('title')[0];
addItem.style.color = 'green';
var items = document.getElementsByClassName('list-group-item');
    items[2].style.backgroundColor = 'green';
    for(let i = 0; i < items.length; i++){
      items[i].style.fontWeight = 'bold';
    }
var liclass = document.getElementsByClassName('list-group-numbered')[0];
    liclass.textContent = 'Hello';
var liTag = document.getElementsByTagName('li')[3];
    liTag.textContent = 'Goodbye';
