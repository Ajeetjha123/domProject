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
