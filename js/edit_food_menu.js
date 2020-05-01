// Create a "close" button and append it to each list item
var myNodelist = document.querySelectorAll('li');
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement('SPAN');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = 'none';
  };
}

let uls = document.querySelectorAll('.list-group');

uls.forEach((ul) => {
  let lis = ul.querySelectorAll('li');

  lis.forEach((li) => {
    li.addEventListener('click', (e) => e.target.classList.toggle('checked'));
  });
});

function newElement(x) {
  var li = document.createElement('li');
  let inputValue = document.getElementById(`myInput${x}`).value;

  var t = document.createTextNode(inputValue);

  li.className = 'food_items';
  li.appendChild(t);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    document.getElementById(`myUL${x}`).appendChild(li);
  }
  document.getElementById(`myInput${x}`).value = '';

  var span = document.createElement('SPAN');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = 'none';
    };
  }
}
