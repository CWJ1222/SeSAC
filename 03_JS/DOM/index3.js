/*
동작의 종류
click dbclick scroll change submit ...
addEventListner(동작의종류, function)

태그 onchange = "함수의 이름"
onclick = "함수의 이름"
on[동작의종류] 속성으로 이벤트 제어 가능

*/

const btn1 = document.querySelector('.btn--black');
const btn2 = document.querySelector('.btn--green');
const btn3 = document.querySelector('.btn--blue');
const btn4 = document.querySelector('.btn--red');
console.log('🚀 ~ btn1:', btn1);
console.log('🚀 ~ btn2:', btn2);
console.log('🚀 ~ btn3:', btn3);
console.log('🚀 ~ btn4:', btn4);

// btn1.addEventListener('동작이름', function(){동작})
btn1.addEventListener('click', function () {
  console.log('버튼1이 클릭되었음!!');
  alert('버튼1이 눌렸어요~');
});

btn1.addEventListener('mouseover', function () {
  //   btn1.style.backgroundColor = 'aqua';
  this.style.backgroundColor = 'aqua';
});
btn1.addEventListener('mouseout', function () {
  btn1.style.backgroundColor = 'black';
});
//out까지 해줘야 뗏을때 작동까지 설정됨

//btn2를 눌렀을 때, div를 자식으로 붙이기
const cantainer = document.getElementById('container');
btn2.addEventListener('click', () => {
  let div = document.createElement('div');
  div.innerText = 'hi';
  div.style.backgroundColor = 'pink';
  container.append(div);
});

//btn3
//만들어진 div의 배경색 바꾸기
btn3.addEventListener('click', changeColor);
// btn3.addEventListener('click', changeColor())
//()가 있으면 함수 바로 호출실행됨, 생략해야 이벤트시 함수 실행됨
function changeColor() {
  const divs = document.querySelectorAll('#container > div');
  // [div, div, div...]
  for (let div of divs) {
    div.style.backgroundColor = 'skyblue';
  }
}

//막내요소만 노란색으로 변경

//btn4
//배경색 노란색으로 변경, 글자색 검정색으로 변경
btn4.addEventListener('click', changeBtnColor);
function changeBtnColor() {
  this.style.backgroundColor = 'yellow';
  this.style.color = 'black';
}

//btn5
function sayHi() {
  alert('안녕하세요, 버튼5입니다');
}

// -----------------------------------

const btn = document.querySelector('button');
console.log('🚀 ~ btn:', btn);
const input = document.querySelector('input');
console.log('🚀 ~ input:', input);

//클릭이벤트
btn.addEventListener('click', function (event) {
  console.log(event);
  //어떤 요소가 클릭되었는지 확인 가능
  //event는 이벤트객체
  console.log(event.target);
});

input.addEventListener('keydown', function (event) {
  //   console.log(event);

  //방향키 아래 위 왼쪽 오른쪽

  //   console.log(event.code);
  //   console.log(event.key);
  //   console.log(event.keycode);

  if (event.code === 'ArrowLeft') {
    console.log('왼쪽 방향키 눌렀습니다');
  } else if (event.code === 'ArrowRight') {
    console.log('오른쪽 방향키 눌렀음');
  } else if (event.code === 'ArrowUp') {
    console.log('위쪽 눌름');
  } else if (event.code === 'ArrowDown') {
    console.log('아래쪽 방향키 눌렀음');
  } else {
    console.log('방향키 아님');
  }
});

//scroll 이벤트
// console.log(window);
window.addEventListener('scroll', (event) => {
  //   console.log(event);
  //   console.log(event.target);
  //   console.log(scrollY);

  //scrollY가 511에서 div opacity가 1이 되도록
  if (scrollY > 511) {
    document.querySelector('.pos').style.opacity = '1';
  }
});
//특정위치에서 진해짐!!!

//4. form 이벤트, submit
const todoform = document.querySelector('#todo-form');
console.log('🚀 ~ todoform:', todoform);
const todos = document.querySelector('.todos');
console.log('🚀 ~ todos:', todos);

todoform.addEventListener('submit', function (e) {
  e.preventDefault(); // 자동새로고침되는걸 막아줌,
  //이벤트 전달을 막는 방법
  console.log('submit');
  const todoInput = document.querySelector('input[name="todo"]');

  console.dir(todoInput); //요소가 가지고 있는 데이터 출력
  console.log(todoInput.value);

  const todo = todoInput.value.trim();

  //선택된 ul태그의 자식으로 <li>todo</li>
  if (todo !== '') {
    const li = document.createElement('li');
    li.textContent = todo;
    todos.append(li);
  } else {
    alert('오늘의 할 일을 작성해 주세요');
  }
  todoInput.value = '';
  //빈값으로 다시 만들어주기
});

//공백이나 빈값이면 리스트업 되지 않게 하기.if문 넣고 trim사용하기

//-------------------------------

//5. change 이벤트
//변경이 발생되면 발생하는 이벤트

const chgInput = document.querySelector('#change-input');
chgInput.addEventListener('change', function () {
  console.log('changed!!!');
});
chgInput.addEventListener('input', function () {
  console.log('changing!!!!');

  let intro = document.querySelector('.intro');
  intro.innerHTML = this.value;
});
//input창의 value에 변경이 발생되면 일어난 이벤트
//실시간 텍스트 반영 가능
