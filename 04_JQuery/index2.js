function getValue() {
  let value = $('input').val();
  alert(value);
}
function setValue() {
  $('input').val('다른글자로설정');
}

function changeCssJS() {
  let span = document.querySelector('span');
  span.style = 'font-size:20px; color:red;';
}
function changeCssJQ() {
  $('span').css('font-size', '40px');
  $('span').css('color', 'blue');
}

function changeAttrJS() {
  let a = document.querySelector('a');
  a.setAttribute('href', 'https://www.naver.com');
}
function changeAttrJQ() {
  $('a').attr('href', 'https://www.daum.net');
}

//text()
function changeTextJS() {
  let p = document.querySelector('.p-text');
  p.innerText = 'js로 바꾼 내용';
}
function changeTextJQ() {
  $('.p-text').text('jquery로 바꾼 내용');
}

//html
function changeHtmlJS() {
  let p = document.querySelector('.p-html');
  p.innerHTML = '<em>javascript~</em>';
}
function changeHtmlJQ() {
  $('.p-html').html('<h2>jQuery~</h2>');
}
//append
function appendJS() {
  let ul = document.querySelector('.colors');
  let li = document.createElement('li');
  li.innerText = '마지막 자식으로 추가된 li(JS)';
  ul.append(li);
}
function appendJQ() {
  $('.colors').append('<li>마지막 자식으로 추가된 li(jquery)</li>');
}
//prepend
function prependJS() {
  let ul = document.querySelector('.colors');
  let li = document.createElement('li');
  li.innerText = '앞에 추가된 li(JS)';
  ul.prepend(li);
}
function prependJQ() {
  $('.colors').prepend('<li>앞에 추가된 li(jquery)</li>');
}
//after
function afterJS() {
  let ul = document.querySelector('.green');
  let li = document.createElement('li');
  li.innerText = 'after 형제 추가된 li(JS)';
  ul.after(li);
}
function afterJQ() {
  $('.green').after('<li>after 형제 추가된 li(jquery)</li>');
}
//befor
function beforeJS() {
  let ul = document.querySelector('.orange');
  let li = document.createElement('li');
  li.innerText = 'before 형제 추가된 li(JS)';
  ul.before(li);
}
function beforeJQ() {
  $('.orange').before('<li>before 형제 추가된 li(jquery)</li>');
}

//remove()
function removeJS() {
  let li2 = document.querySelector('.li2');
  li2.remove();
}
function removeJQ() {
  $('.li2').remove();
}

//empty(), 자식들을 모두 지우기
function emptyJS() {
  let nums = document.querySelector('ul.nums');
  nums.innerHTML = '';
}
function emptyJQ() {
  $('ul.nums').empty();
}

function findParent() {
  console.log($('.child2').parent());
}
function findParents() {
  console.log($('.child2').parents());
}

function findNext() {
  console.log($('.child2').next());
}
function findPrev() {
  console.log($('.child2').prev());
}
function findChildren() {
  console.log($('.parent').children());
}

function addClass() {
  $('#hi').addClass('fs-50');
}
function removeClass() {
  //   $('#hi').removeClass('color-blue');
  $('#hi').removeClass();
  //인자를 아무것도 주지 않으면 모두 삭제함
}
function hasClass() {
  console.log($('#hi').hasClass('fs-50'));
}
function toggleClass() {
  $('#hi').toggleClass('bg-pink');
}
