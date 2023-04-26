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
items[1].style.backgroundColor = 'green';
    items[2].style.display = 'none';

    var secondItem = document.querySelectorAll('li:nth-child(2)');
        secondItem[0].style.color = 'green';
    var odditems = document.querySelectorAll('li:nth-child(odd)');
       for(var i = 0; i < odditems.length; i++){
        odditems[i].style.backgroundColor = 'green';
       }
