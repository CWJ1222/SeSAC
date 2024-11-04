/*
조건식은 참 혹은 거짓으로 판별될 수 있는 문장 
if(조건식){
조건식이 참일 때 실행할 문장
}



*/
// if (5 > 3) {
//   console.log('조건이 참 입니다.');
// }

// let number = Number(prompt('숫자를 입력하세요'));
// if (number > 10) {
//   console.log('입력받은 수가 10보다 큽니다.');
// } else {
//   console.log('입력받은 수가 10과 같거나 작습니다.');
// }

// if (number > 10) {
//   console.log('입력받은 수가 10보다 큽니다.');
// } else if (number === 10) {
//   console.log('입력받은 수가 10입니다.');
// } else {
//   console.log('수가 10보다 작습니다');
// }

//90점 이상은 A
//80 B
//70 C
//나머지 F

// let score = Number(prompt('점수를 입력하세요'));

// if (score < 0 || score > 100) {
//   console.log('재입력하세요');
// } else if (score >= 90 && score <= 100) {
//   console.log('A');
// } else if (score >= 80) {
//   console.log('B');
// } else if (score >= 70) {
//   console.log('C');
// } else {
//   console.log('F');
// }

//조건문은 위에서부터 차례대로 하기 때문에 모든 조건을 다 써줄 필요는 없다.
/*
조건문 중첩

*/

let userId = 'user01';
let userPw = '1234qwer';

function loginUser() {
  let promptId = prompt('아이디를 입력하시오');

  if (userId === promptId) {
    let promptPw = prompt('비밀번호를 입력하세요');

    if (userPw === promptPw) {
      console.log('로그인 성공');
      alert(`안녕하세요 ${userId}님`);
    } else {
      alert('비밀번호가 틀렸습니다');
    }
  } else if (promptId === '') {
    alert('아이디를 입력하지 않았습니다');
    let promptId = prompt('아이디를 재입력하시오');
  } else {
    alert('아이디가 틀렸음');
    let promptId = prompt('아이디를 재입력하시오');
  }
}

// loginUser();
//세번까지만 중첩해주는게 성능상 좋음.

//switch문
// let a = Number(prompt('숫자를 입력하시오'));
let a = 5;
switch (a) {
  case 3:
    console.log('a가 3');
    break;
  case 4:
    console.log('a가 4');
    break;
  case 5:
    console.log('a가 5');
    break;
  case 6:
  case 7:
    console.log('a가 6,7 입니다');
    break;
  default:
    console.log('3,4,5 아님');
    break;
}

//삼항연산자
//if-else를 간단하게 사용하는 방법
let num = 5;
if (num % 2 === 1) {
  console.log('홀수');
} else {
  console.log('짝수');
}
num % 2 === 1 ? console.log('홀수') : console.log('짝수');

let fruit = 'banana';
const value = fruit === 'banana' ? 'yellow' : 'red';
console.log(value);

if (fruit === 'banana') {
  console.log('yellow');
} else {
  console.log('red');
}

let value2;
if (fruit === 'banana') {
  value2 = 'yellow';
} else {
  value2 = 'red';
}
console.log(value2);
