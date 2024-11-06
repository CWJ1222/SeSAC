//함수작성

// function showError() {
//   alert('에러 발생!!');
// }
// showError();

//매개변수가 있는 함수
function sayHello(name) {
  const msg = `Hello, ${name}`;
  console.log(msg);
}

sayHello('Mike');
sayHello('Jane');
sayHello('Tom');

function sayHello1(name) {
  let msg = 'Hello';
  if (name) {
    msg = `Hello ${name}`;
  }
  console.log(msg);
}
//msg는 지역변수 함수안에서만 사용가능
//함수 밖에서 선언하면 사용 가능
//함수 내부에서만 접근가능-지역변수, 외부에서 사용-전역변수

sayHello1();
sayHello1('Gor');
//name이 undefined일 때 if로 처리됨

console.log('----------------------------------');
//전역변수 지역변수
let msg = 'welcome';
console.log(msg);

function sayHello3(name) {
  let msg = 'Hello';
  console.log(msg + ' ' + name);
}
sayHello3('Mike');
console.log(msg);

console.log('----------------------------------');

let name = 'Mike';
function sayHello4(name) {
  console.log(name);
}
sayHello();
sayHello('Jane');
//전역변수보다는 지역변수를 많이 사용하는 것이 좋다

console.log('----------------------------------');

function sayHello5(name) {
  let newName = name || 'friend';
  let msg = `Hello, ${newName}`;
  console.log(msg);
}
sayHello5();
sayHello('Jane');

console.log('----------------------------------');
//변수 자리에 default 할당도 가능
function sayHello6(name = 'friend') {
  let msg = `Hello , ${name}`;
  console.log(msg);
}
sayHello6();
sayHello6('Kine');

console.log('----------------------------------');
//return 사용하기
function add(num1, num2) {
  return num1 + num2;
}
const result = add(2, 3);
console.log('🚀 ~ result:', result);

//return 이 있으면 오른쪽에 있는 값을 반환하고 함수를 즉시 종료함.
function showError() {
  alert('에러가 발생했다');
  return;
  alert('이 코드는 실행되지 않습니다');
}
const result1 = showError();
console.log(result1);
