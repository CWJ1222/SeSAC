//변수 var
var name = '홍길동';
name = 'gildong'; //재할당 가능

var name = '성춘향'; //재선언 가능
console.log('🚀 ~ name:', name);
//재선언 가능한 것이 장점으로 보이나 협업과 유지보수에 힘들다.

//let 재할당가능, 재선언 불가
let c; //
console.log('🚀 ~ c:', c);

c = 5; // 재할당 가능
c = 15;
c = 20;
c = 20;
console.log('🚀 ~ c:', c);

//const 재할당, 재선언 불가.
//const b / 선언과 동시에 초기화되어야 함
const b = 3;

let q1 = 3;
q1 = q1 - 2;
console.log(q1);

let q2 = 10;
q2 = q2 - 5;
console.log(q2);

// 연산자
// 대입연산자, =
// 비교연산자, == === != !== > >= < <=
// 산술연산자, + - * / % **
// 논리연산자 ! && ||

//비교연산자
// 비교연산자, == === != !== > >= < <=
console.log(1 == 1);
console.log(1 == 2);
console.log(1 != 1);
console.log(1 != 2);
console.log(1 == '1'); //트루가 나와버림
console.log(1 == '2');

console.log('=== 비교');
console.log(1 === 1);
console.log(1 === 2);
console.log(1 !== 1);
console.log(1 !== 2);
console.log(1 === '2');

console.log('크기비교');
console.log(2 > 1);
console.log(2 >= 1);

console.log('산술연산자');
console.log(1 + 2);
console.log(1 * 2);
console.log(1 - 2);
console.log(1 / 2);
console.log(8 % 5);
console.log(2 ** 5);

//논리연산자 t f 에만 적용할 수 있음
console.log(true);
console.log(false);
console.log(!true);
console.log(!false);
console.log(!!false);
console.log(true && true);
console.log(true && false); //false가 앞에 있는 것이 순서상 좋다.
console.log(false && false);
console.log(true || false); //true가 앞에 있는 것이 좋다.
//|| 하나만 true라도 true가 된다
//
console.log(!(2 > 1)); //false
console.log(2 > 1 && -2 < 1); //T
console.log((2 > 1 && 0 > -2) || 5 < 2); //T

//==연산자 이용
console.log('================== ==연산자이용');
console.log('0' == false);
console.log('0' == 0);
console.log('' == 0);
console.log('' == false);
console.log(0 == false);
//자바스크립트의 정의라서 T

console.log('' == '0');
console.log(false == undefined);
console.log(false == null);
//F

//이런 부분 때문에 === 3개 등호를 사용하는 것이 좋음, 모두 false
console.log('------------------');
console.log('0' === false);
console.log('0' === 0);
console.log('' === 0);
console.log('' === false);
console.log(0 === false);
