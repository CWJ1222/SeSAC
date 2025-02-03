console.log(window);
console.log(document);
console.log($(window));
console.log($(document));

//click()클릭했을때
//jQuery에서는 이벤트 이름으로 메서드 존재
//요소.click(function(){}), 요소.hover(function(){}, function(){})

$('.p-msg').click(function () {
  $('.p-msg').css('color', 'red');
});

$('.num').click(function () {
  //   $('.num').css('color', 'blue');
  $(this).css('color', 'green');
  //여기서 this는 자기자신을 말함
});

$('.num').on('click', function () {
  $(this).css('color', 'pink');
});

// const nums = document.querySelectorAll('.num');
// for (let i = 0; nums.length; i++) {
//   nums[i].addEventListener('click', function () {
//     this.style.color = 'blue';
//   });
// }
//for사용해서 JS로도 같게 만들 수 있다.

/* 
주요 차이점 정리

	1.	적용 대상
	•	.click(): DOM에 이미 존재하는 요소에 대해서만 작동합니다.
	•	.on(): 미래에 동적으로 추가될 요소도 이벤트를 수신할 수 있도록 설정 가능합니다.
	2.	유연성
	•	.click(): 클릭 이벤트에 대한 간편한 단축 메서드로, 다른 이벤트에는 사용할 수 없습니다.
	•	.on(): 클릭 외에도 다양한 이벤트를 처리할 수 있어 더 유연합니다.
	3.	동적 요소에 대한 이벤트 바인딩
	•	.click(): 페이지 로드 후 새로 추가된 요소에 적용되지 않습니다.
	•	.on(): 동적으로 추가된 요소에 이벤트를 바인딩하려면 .on()을 사용하는 것이 좋습니다.
*/

//hover() : 마우스를 올렸을때, 떼었을 떄 각각 정의
$('.div-hover').hover(
  function () {
    $(this).addClass('hover');
  },
  function () {
    $(this).removeClass('hover');
  }
);

$(window).scroll(function () {
  console.log('scrolling......');
});

// input.addEventListener('keydown', function (event) {
//   //   console.log(event.code);
//   //   console.log(event.key);
//   //   console.log(event.keycode);

//   if (event.code === 'ArrowLeft') {
//     console.log('왼쪽 방향키 눌렀습니다');
//   } else if (event.code === 'ArrowRight') {
//     console.log('오른쪽 방향키 눌렀음');
//   } else if (event.code === 'ArrowUp') {
//     console.log('위쪽 눌름');
//   } else if (event.code === 'ArrowDown') {
//     console.log('아래쪽 방향키 눌렀음');
//   } else {
//     console.log('방향키 아님');
//   }
// });

// $('input-key').keydown(function (e) {
//     if(e.code === 'ArrowLeft') {
//     console.log('왼쪽 방향키 눌렀습니다');
//   } else if (event.code === 'ArrowRight') {
//     console.log('오른쪽 방향키 눌렀음');
//   } else if (event.code === 'ArrowUp') {
//     console.log('위쪽 눌름');
//   } else if (event.code === 'ArrowDown') {
//     console.log('아래쪽 방향키 눌렀음');
//   } else {
//     console.log('방향키 아님');
//   }

// todoform.addEventListener('submit', function (e) {
//   e.preventDefault(); // 자동새로고침되는걸 막아줌,
//   //이벤트 전달을 막는 방법
//   console.log('submit');
//   const todoInput = document.querySelector('input[name="todo"]');

//   console.dir(todoInput); //요소가 가지고 있는 데이터 출력
//   console.log(todoInput.value);

//   const todo = todoInput.value.trim();

//   //선택된 ul태그의 자식으로 <li>todo</li>
//   if (todo !== '') {
//     const li = document.createElement('li');
//     li.textContent = todo;
//     todos.append(li);
//   } else {
//     alert('오늘의 할 일을 작성해 주세요');
//   }
//   todoInput.value = '';
//   //빈값으로 다시 만들어주기
// });

$('#todo-form').submit(function (e) {
  e.preventDefault();
  const todoInput = $('input[name="todo"]').val();
  //   const todo = todoInput.value.trim();
  $('.todos').append(`<li>${todoInput}</li>`);
  $('input[name="todo"]').val('');
});
