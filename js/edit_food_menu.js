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

// Add a "checked" symbol when clicking on a list item
var list1 = document.getElementsByClassName('food_items');
// var list2 = document.getElementsByClassName("list_li2");
// var list3 = document.getElementsByClassName("list_li3");
// var list4 = document.getElementsByClassName("list_li4");
// var list5 = document.getElementsByClassName("list_li5");
// var list6 = document.getElementsByClassName("list_li6");
// var list7 = document.getElementsByClassName("list_li7");
// var list8 = document.getElementsByClassName("list_li8");
list1.addEventListener(
  'click',
  function (ev) {
    if (ev.target.className === 'food_items') {
      ev.target.classList.toggle('checked');
    }
  },
  true
);
// list2.addEventListener('click', function (ev) {
//         if (ev.target.className === 'list_li2') {
//             ev.target.classList.toggle('checked');
//         }
//     }, false);
// list3.addEventListener('click', function (ev) {
//         if (ev.target.className === 'list_li3') {
//             ev.target.classList.toggle('checked');
//         }
//     }, false);
// list4.addEventListener('click', function (ev) {
//         if (ev.target.className === 'list_li4') {
//             ev.target.classList.toggle('checked');
//         }
//     }, false);
// list5.addEventListener('click', function (ev) {
//         if (ev.target.className === 'list_li5') {
//             ev.target.classList.toggle('checked');
//         }
//     }, false);
// list6.addEventListener('click', function (ev) {
//         if (ev.target.className === 'list_li6') {
//             ev.target.classList.toggle('checked');
//         }
//     }, false);
// list7.addEventListener('click', function (ev) {
//         if (ev.target.className === 'list_li7') {
//             ev.target.classList.toggle('checked');
//         }
//     }, false);
// list8.addEventListener('click', function (ev) {
//         if (ev.target.className === 'list_li8') {
//             ev.target.classList.toggle('checked');
//         }
//     }, false);
// Create a new list item when clicking on the "Add" button
function newElement(x) {
  var li = document.createElement('li');
  if (x == 1) {
    var inputValue = document.getElementById('myInput1').value;
  } else if (x == 2) {
    var inputValue = document.getElementById('myInput2').value;
  } else if (x == 3) {
    var inputValue = document.getElementById('myInput3').value;
  } else if (x == 4) {
    var inputValue = document.getElementById('myInput4').value;
  } else if (x == 5) {
    var inputValue = document.getElementById('myInput5').value;
  } else if (x == 6) {
    var inputValue = document.getElementById('myInput6').value;
  } else if (x == 7) {
    var inputValue = document.getElementById('myInput7').value;
  } else if (x == 8) {
    var inputValue = document.getElementById('myInput8').value;
  }
  var t = document.createTextNode(inputValue);
  li.className = 'food_items';
  li.appendChild(t);
  if (inputValue === '') {
    alert('You must write something!');
  } else if (x == 1) {
    document.getElementById('myUL1').appendChild(li);
  } else if (x == 2) {
    document.getElementById('myUL2').appendChild(li);
  } else if (x == 3) {
    document.getElementById('myUL3').appendChild(li);
  } else if (x == 4) {
    document.getElementById('myUL4').appendChild(li);
  } else if (x == 5) {
    document.getElementById('myUL5').appendChild(li);
  } else if (x == 6) {
    document.getElementById('myUL6').appendChild(li);
  } else if (x == 7) {
    document.getElementById('myUL7').appendChild(li);
  } else if (x == 8) {
    document.getElementById('myUL8').appendChild(li);
  }
  document.getElementById('myInput').value = '';

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
