/*
함수
특정 작업을 수행하기 위해 설계된 코드 집합
함수의 선언 구조
키워드 : function
함수의 이름 : camelCase로 함수의 이름 작성
(매개변수) : 함수 내부에서 사용할 변수
{스코프} : 함수의 내부 코드
함수 선언문, 함수 표현식
-함수 표현식 : 변수에 함수를 저장하는 것.
-함수 선언문 : 명시적 함수 선언
*/

function helloWorld1() {
  console.log('Hello world1');
}
helloWorld1();

const helloWorld2 = function () {
  console.log('Hello world2');
};
helloWorld2();

function helloWorld3() {
  //return 키워드
  //함수 내부 코드의 최종 결과값
  return 'hello world3';
  //return 아래는 실행되지 않음
}
console.log(helloWorld3());

helloWorld1(); //어디에서든 호출할 수 있음
helloWorld2(); //선언된 이후에만 사용할 수 있음

const helloWorld4 = () => {
  console.log('Hello world4');
};
helloWorld4();
//화살표도 선언되기 전에 사용할 수 없음

//매개변수가 있는 함수 만들기
//매개변수 1개, 함수선언문
function sayHello1(text) {
  return text;
}

console.log(sayHello1('hihihihihihihi'));

//매개변수 2개, 함수선언문
function sayHello2(text, name) {
  return `${text}! ${name}`;
}
console.log(sayHello2('hihihi', 'choi'));

function sayHello3(text, name) {
  console.log(`${text}! ${name}`);
}
sayHello3('hihihihi', 'choi');

const sayHello4 = function (text, name) {
  console.log(`${text}! ${name}`);
};
sayHello4('hi', 'Shdo');

const sayHello5 = (text, name) => {
  return `${text}! ${name}`;
};
console.log(sayHello5('hihi', 'kine'));
