import $ from 'jquery';

$(function () {
  var parent = $('#shuffle1');
  var divs = parent.children();

  while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
  }
});

$(function () {
  var parent = $('#shuffle2');
  var divs = parent.children();

  while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
  }
});

$(function () {
  var parent = $('#shuffle3');
  var divs = parent.children();

  while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
  }
});

$(function () {
  var parent = $('#shuffle4');
  var divs = parent.children();

  while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
  }
});